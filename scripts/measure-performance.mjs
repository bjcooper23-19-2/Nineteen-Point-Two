import { spawn } from "node:child_process";
import { mkdir, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";

const chromePath =
  process.env.CHROME_PATH ||
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const baseUrl = process.env.PERF_BASE_URL || "http://127.0.0.1:8781";
const viewportWidth = Number(process.env.PERF_VIEWPORT_WIDTH || 0);
const viewportHeight = Number(process.env.PERF_VIEWPORT_HEIGHT || 1200);
const routes = (
  process.env.PERF_ROUTES ||
  [
    "/",
    "/workplace-ai/",
    "/waia/",
    "/outside-clarity/",
    "/outside-clarity/snapshot/",
    "/insights/",
    "/insights/hidden-cost-of-workplace-ai/",
  ].join(",")
)
  .split(",")
  .map((route) => route.trim())
  .filter(Boolean);

const port = Number(process.env.PERF_DEBUG_PORT || 9228);
const userDataDir = path.join(os.tmpdir(), `19-2-perf-${Date.now()}`);

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const scoreTiming = (value, good, poor) => {
  if (!Number.isFinite(value)) return 0;
  if (value <= good) return 1;
  if (value >= poor) return 0;
  return 1 - (value - good) / (poor - good);
};

const estimatePerformanceScore = ({ fcp, lcp, tbt, cls }) => {
  const fcpScore = scoreTiming(fcp, 900, 3000);
  const lcpScore = scoreTiming(lcp, 1200, 4000);
  const tbtScore = scoreTiming(tbt, 0, 600);
  const clsScore = scoreTiming(cls, 0.1, 0.25);
  return Math.round(
    100 * (fcpScore * 0.1 + lcpScore * 0.35 + tbtScore * 0.3 + clsScore * 0.25),
  );
};

const fetchJson = async (url, options) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}: ${url}`);
  }
  return response.json();
};

const waitForChrome = async () => {
  const versionUrl = `http://127.0.0.1:${port}/json/version`;
  for (let attempt = 0; attempt < 80; attempt += 1) {
    try {
      return await fetchJson(versionUrl);
    } catch {
      await wait(125);
    }
  }
  throw new Error("Chrome debugging endpoint did not become available.");
};

const connectCdp = (webSocketDebuggerUrl) =>
  new Promise((resolve, reject) => {
    const ws = new WebSocket(webSocketDebuggerUrl);
    const callbacks = new Map();
    const listeners = new Map();
    let counter = 0;

    ws.addEventListener("open", () => {
      const send = (method, params = {}) =>
        new Promise((sendResolve, sendReject) => {
          counter += 1;
          callbacks.set(counter, { resolve: sendResolve, reject: sendReject });
          ws.send(JSON.stringify({ id: counter, method, params }));
        });

      const on = (method, callback) => {
        if (!listeners.has(method)) listeners.set(method, []);
        listeners.get(method).push(callback);
      };

      const close = () => ws.close();

      resolve({ send, on, close });
    });

    ws.addEventListener("message", (event) => {
      const payload = JSON.parse(event.data);
      if (payload.id && callbacks.has(payload.id)) {
        const callback = callbacks.get(payload.id);
        callbacks.delete(payload.id);
        if (payload.error) callback.reject(new Error(payload.error.message));
        else callback.resolve(payload.result);
      }
      if (payload.method && listeners.has(payload.method)) {
        for (const listener of listeners.get(payload.method)) {
          listener(payload.params);
        }
      }
    });

    ws.addEventListener("error", reject);
  });

const observerScript = `
  window.__sitePerf = { cls: 0, lcp: 0, longTasks: [] };
  try {
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) window.__sitePerf.cls += entry.value;
      }
    }).observe({ type: "layout-shift", buffered: true });
  } catch {}
  try {
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const last = entries[entries.length - 1];
      if (last) window.__sitePerf.lcp = last.startTime;
    }).observe({ type: "largest-contentful-paint", buffered: true });
  } catch {}
  try {
    new PerformanceObserver((list) => {
      window.__sitePerf.longTasks.push(...list.getEntries().map((entry) => entry.duration));
    }).observe({ type: "longtask", buffered: true });
  } catch {}
`;

const measureRoute = async (route) => {
  const target = await fetchJson(
    `http://127.0.0.1:${port}/json/new?${encodeURIComponent("about:blank")}`,
    { method: "PUT" },
  );
  const cdp = await connectCdp(target.webSocketDebuggerUrl);
  const transferByRequest = new Map();
  let transferred = 0;

  cdp.on("Network.loadingFinished", (event) => {
    transferByRequest.set(event.requestId, event.encodedDataLength || 0);
  });

  await cdp.send("Page.enable");
  await cdp.send("Runtime.enable");
  await cdp.send("Network.enable", {
    maxTotalBufferSize: 10000000,
    maxResourceBufferSize: 5000000,
  });
  if (viewportWidth) {
    await cdp.send("Emulation.setDeviceMetricsOverride", {
      width: viewportWidth,
      height: viewportHeight,
      deviceScaleFactor: 1,
      mobile: viewportWidth < 768,
    });
  }
  await cdp.send("Page.addScriptToEvaluateOnNewDocument", {
    source: observerScript,
  });

  const loaded = new Promise((resolve) =>
    cdp.on("Page.loadEventFired", resolve),
  );
  const startedAt = Date.now();
  await cdp.send("Page.navigate", { url: `${baseUrl}${route}` });
  await loaded;
  await wait(1200);

  const { result } = await cdp.send("Runtime.evaluate", {
    returnByValue: true,
    expression: `(() => {
      const navigation = performance.getEntriesByType("navigation")[0];
      const fcp = performance.getEntriesByName("first-contentful-paint")[0]?.startTime || 0;
      const tbt = (window.__sitePerf?.longTasks || []).reduce((sum, duration) => sum + Math.max(0, duration - 50), 0);
      return {
        fcp,
        lcp: window.__sitePerf?.lcp || 0,
        tbt,
        cls: window.__sitePerf?.cls || 0,
        domNodes: document.getElementsByTagName("*").length,
        htmlBytes: new Blob([document.documentElement.outerHTML]).size,
        scrollWidth: Math.max(document.documentElement.scrollWidth, document.body.scrollWidth),
        clientWidth: document.documentElement.clientWidth,
        navHasOutsideClarity: Boolean([...document.querySelectorAll(".nav-menu a")].find((a) => a.textContent.trim() === "Outside Clarity" && a.getAttribute("href") === "/outside-clarity/")),
        mobileMenuButton: Boolean(document.querySelector(".nav-toggle"))
      };
    })()`,
  });

  for (const bytes of transferByRequest.values()) transferred += bytes;

  cdp.close();
  await fetch(`http://127.0.0.1:${port}/json/close/${target.id}`);

  const metrics = result.value;
  return {
    route,
    score: estimatePerformanceScore(metrics),
    fcp: Math.round(metrics.fcp),
    lcp: Math.round(metrics.lcp),
    tbt: Math.round(metrics.tbt),
    cls: Number(metrics.cls.toFixed(4)),
    transferredKb: Math.round(transferred / 1024),
    htmlKb: Math.round(metrics.htmlBytes / 1024),
    domNodes: metrics.domNodes,
    horizontalOverflow: metrics.scrollWidth > metrics.clientWidth + 1,
    navHasOutsideClarity: metrics.navHasOutsideClarity,
    mobileMenuButton: metrics.mobileMenuButton,
    measuredMs: Date.now() - startedAt,
  };
};

await mkdir(userDataDir, { recursive: true });

const chrome = spawn(chromePath, [
  "--headless=new",
  "--no-sandbox",
  "--disable-gpu",
  "--disable-extensions",
  "--disable-background-networking",
  "--disable-default-apps",
  "--no-first-run",
  `--remote-debugging-port=${port}`,
  `--user-data-dir=${userDataDir}`,
  "about:blank",
]);

let chromeErrorOutput = "";
chrome.stderr?.on("data", (chunk) => {
  chromeErrorOutput += chunk.toString();
});

try {
  await waitForChrome();
  const results = [];
  for (const route of routes) {
    results.push(await measureRoute(route));
  }
  console.log(JSON.stringify(results, null, 2));
} catch (error) {
  if (chromeErrorOutput.trim()) {
    console.error(chromeErrorOutput.trim());
  }
  throw error;
} finally {
  chrome.kill("SIGTERM");
  await rm(userDataDir, { recursive: true, force: true });
}
