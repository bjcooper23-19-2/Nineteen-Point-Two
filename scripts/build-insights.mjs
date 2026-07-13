import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const contentDir = path.join(root, "src/content/insights");
const outputDir = path.join(root, "insights");
const siteUrl = "https://www.nineteenpointtwo.com";

const nav = `
<header>
  <nav class="nav" aria-label="Main navigation">
    <a class="brand" href="/" aria-label="Nineteen Point Two home">
      <img class="brand-logo" src="/assets/logo/logo-horizontal.svg" alt="Nineteen Point Two" width="800" height="200" />
    </a>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-navigation">Menu</button>
    <div class="nav-links" id="site-navigation">
      <a href="/waia/">WAIA</a>
      <a href="/outside-clarity/">Outside Clarity</a>
      <a href="/revenue-review/">Revenue Review</a>
      <a href="/insights/" aria-current="page">Insights</a>
      <a href="/#operating-lens">Operating Lens</a>
    </div>
    <div class="nav-actions">
      <a class="nav-sign-in" href="https://waia.nineteenpointtwo.com/login">Sign in</a>
      <a class="nav-cta" href="https://tally.so/r/gDgbQP" target="_blank" rel="noopener noreferrer">Ask to see WAIA</a>
    </div>
  </nav>
</header>`;

const footer = `
<footer>
  <div class="footer-grid">
    <span>&copy; 2026 Nineteen Point Two</span>
    <span>Operating clarity across revenue systems and workplace AI adoption.</span>
    <span><a href="/waia/">WAIA</a> | <a href="/outside-clarity/">Outside Clarity</a> | <a href="/revenue-review/">Revenue Review</a> | <a href="/insights/">Insights</a></span>
    <span><a href="/legal/">Legal</a> | <a href="/privacy/">Privacy</a> | <a href="/cookies/">Cookies</a> | <a href="/website-terms/">Website Terms</a> | <a href="/subprocessors/">Subprocessors</a></span>
  </div>
</footer>`;

const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const inlineMarkdown = (value) =>
  escapeHtml(value).replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

const tidyHtml = (value) => `${value.replace(/[ \t]+$/gm, "").trimEnd()}\n`;

const parseMarkdown = (source) => {
  const match = source.match(/^---\n([\s\S]+?)\n---\n([\s\S]*)$/);
  if (!match) {
    throw new Error("Insight markdown requires frontmatter.");
  }

  const data = {};
  for (const line of match[1].split("\n")) {
    const separator = line.indexOf(":");
    if (separator === -1) continue;
    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim();
    data[key] = value;
  }

  return { data, body: match[2].trim() };
};

const markdownToHtml = (markdown) => {
  const lines = markdown.split("\n");
  const blocks = [];
  let paragraph = [];
  let list = [];
  let table = [];

  const flushParagraph = () => {
    if (!paragraph.length) return;
    blocks.push(`<p>${inlineMarkdown(paragraph.join(" "))}</p>`);
    paragraph = [];
  };

  const flushList = () => {
    if (!list.length) return;
    blocks.push(
      `<ul>${list.map((item) => `<li>${inlineMarkdown(item)}</li>`).join("")}</ul>`,
    );
    list = [];
  };

  const parseTableRow = (line) =>
    line
      .trim()
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((cell) => cell.trim());

  const isTableSeparator = (line) =>
    /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(line.trim());

  const flushTable = () => {
    if (!table.length) return;
    const [header, ...rows] = table;
    const thead = `<thead><tr>${header
      .map((cell) => `<th>${inlineMarkdown(cell)}</th>`)
      .join("")}</tr></thead>`;
    const tbody = rows.length
      ? `<tbody>${rows
          .map(
            (row) =>
              `<tr>${row.map((cell) => `<td>${inlineMarkdown(cell)}</td>`).join("")}</tr>`,
          )
          .join("")}</tbody>`
      : "";
    blocks.push(
      `<div class="table-wrap"><table>${thead}${tbody}</table></div>`,
    );
    table = [];
  };

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed) {
      flushParagraph();
      flushList();
      flushTable();
      continue;
    }

    if (trimmed.startsWith("## ")) {
      flushParagraph();
      flushList();
      flushTable();
      blocks.push(`<h2>${inlineMarkdown(trimmed.slice(3))}</h2>`);
      continue;
    }

    if (trimmed.startsWith("### ")) {
      flushParagraph();
      flushList();
      flushTable();
      blocks.push(`<h3>${inlineMarkdown(trimmed.slice(4))}</h3>`);
      continue;
    }

    if (trimmed.startsWith("- ")) {
      flushParagraph();
      flushTable();
      list.push(trimmed.slice(2));
      continue;
    }

    if (trimmed.includes("|") && trimmed.startsWith("|")) {
      flushParagraph();
      flushList();
      if (!isTableSeparator(trimmed)) {
        table.push(parseTableRow(trimmed));
      }
      continue;
    }

    flushTable();
    paragraph.push(trimmed);
  }

  flushParagraph();
  flushList();
  flushTable();
  return blocks.join("\n");
};

const formatDate = (value) =>
  new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${value}T00:00:00Z`));

const readingTime = (body) => {
  const words = body.split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 220))} min read`;
};

const documentShell = ({
  title,
  description,
  canonical,
  body,
  type = "website",
  publishedDate = "",
  ogTitle = title,
  ogDescription = description,
}) => `<!doctype html>
<html lang="en-GB">
  <head>
    <link rel="preconnect" href="https://consent.cookiebot.com" crossorigin />
    <link rel="dns-prefetch" href="//consent.cookiebot.com" />
    <link rel="stylesheet" href="/assets/css/insights.css" />
    <script
      id="Cookiebot"
      src="https://consent.cookiebot.com/uc.js"
      data-cbid="d3681788-35b5-42d2-93ae-c48167aa30cd"
      data-blockingmode="auto"
      type="text/javascript"
    ></script>
    <script>
      (function () {
        function initApollo() {
          if (window.__apolloTrackerLoaded) return;
          window.__apolloTrackerLoaded = true;

          var n = Math.random().toString(36).substring(7);
          var o = document.createElement("script");

          o.src =
            "https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=" +
            n;
          o.async = true;
          o.defer = true;

          o.onload = function () {
            if (window.trackingFunctions && window.trackingFunctions.onLoad) {
              window.trackingFunctions.onLoad({
                appId: "6a2893312f53de001c40adf9",
              });
            }
          };

          document.head.appendChild(o);
        }

        function loadApolloIfMarketingConsent() {
          if (
            window.Cookiebot &&
            window.Cookiebot.consent &&
            window.Cookiebot.consent.marketing
          ) {
            initApollo();
          }
        }

        window.addEventListener("CookiebotOnLoad", loadApolloIfMarketingConsent);
        window.addEventListener("CookiebotOnAccept", loadApolloIfMarketingConsent);
      })();
    </script>
    <script>
      if (location.hostname === "nineteenpointtwo.com") {
        location.replace("${canonical}");
      }
    </script>
    <link rel="canonical" href="${canonical}" />
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <meta property="og:title" content="${escapeHtml(ogTitle)}" />
    <meta property="og:description" content="${escapeHtml(ogDescription)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:type" content="${type}" />
    <meta property="og:site_name" content="Nineteen Point Two" />
    ${
      publishedDate
        ? `<meta property="article:published_time" content="${publishedDate}" />`
        : ""
    }
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${escapeHtml(ogTitle)}" />
    <meta name="twitter:description" content="${escapeHtml(ogDescription)}" />
    <link rel="icon" type="image/svg+xml" href="/assets/favicon/favicon.svg" />
  </head>
  <body>
    <div class="site">
      ${nav}
      ${body}
      ${footer}
    </div>
    <script src="/assets/js/nav.js" defer></script>
    <!-- Cloudflare Web Analytics -->
    <script
      defer
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon='{"token": "77253ebb743e400a925844f457dfb3e8"}'
    ></script>
    <!-- End Cloudflare Web Analytics -->
  </body>
</html>
`;

const loadArticles = async () => {
  const files = (await readdir(contentDir)).filter((file) =>
    file.endsWith(".md"),
  );
  const articles = [];

  for (const file of files) {
    const source = await readFile(path.join(contentDir, file), "utf8");
    const { data, body } = parseMarkdown(source);
    const slug = data.slug || file.replace(/\.md$/, "");
    articles.push({
      ...data,
      slug,
      body,
      html: markdownToHtml(body),
      formattedDate: formatDate(data.date),
      readingTime: data.readingTime || readingTime(body),
    });
  }

  return articles.sort((a, b) => b.date.localeCompare(a.date));
};

const renderIndex = (articles) => {
  const cards = articles
    .map(
      (article) => `
        <article class="article-card">
          <div class="article-card-content">
            <div class="article-meta">${article.formattedDate} | ${escapeHtml(article.category)} | ${article.readingTime}</div>
            <h3 class="article-title">${escapeHtml(article.title)}</h3>
            <p>${escapeHtml(article.excerpt)}</p>
          </div>
          <a class="btn secondary" href="/insights/${article.slug}/">Read insight</a>
        </article>`,
    )
    .join("\n");

  return documentShell({
    title: "Insights | Nineteen Point Two",
    description:
      "Operational insights from Nineteen Point Two on workplace AI adoption, Shadow AI, governance as enablement, workflow consistency and revenue operating risk.",
    canonical: `${siteUrl}/insights/`,
    body: `
      <main id="top">
        <section class="hero">
          <div class="container">
            <div class="eyebrow">Insights</div>
            <h1>Operational thinking for hidden risk.</h1>
            <p class="lede">
              A durable home for Nineteen Point Two thinking on workplace AI adoption,
              Shadow AI as an operational condition, governance as enablement,
              workflow consistency, management visibility and recurring revenue
              operating realities.
            </p>
            <div class="hero-actions">
              <a class="btn primary" href="/waia/">Explore WAIA</a>
              <a class="btn secondary" href="/workplace-ai/">Explore Shadow AI</a>
            </div>
          </div>
        </section>
        <section>
          <div class="container">
            <div class="section-head">
              <div class="eyebrow">Latest thinking</div>
              <h2>Calm, practical analysis for operators.</h2>
              <p>
                These aren't generic AI posts. They are working notes on the places
                where leadership confidence depends on people, process, data,
                visibility and decision quality.
              </p>
            </div>
            <div class="article-grid">
              ${cards}
            </div>
          </div>
        </section>
      </main>`,
  });
};

const renderArticle = (article) =>
  documentShell({
    title: article.metaTitle || `${article.title} | Nineteen Point Two`,
    description: article.metaDescription || article.excerpt,
    ogTitle: article.ogTitle || `${article.title} | Nineteen Point Two`,
    ogDescription:
      article.ogDescription || article.metaDescription || article.excerpt,
    canonical: `${siteUrl}/insights/${article.slug}/`,
    type: "article",
    publishedDate: `${article.date}T00:00:00Z`,
    body: `
      <main id="top">
        <article>
          <header class="article-header">
            <div class="article-shell">
              <div class="eyebrow">${escapeHtml(article.category)}</div>
              <h1>${escapeHtml(article.title)}</h1>
              <p class="lede">${escapeHtml(article.excerpt)}</p>
              <p class="article-meta">${article.formattedDate} | ${article.readingTime}</p>
            </div>
          </header>
          <div class="article-body">
            <div class="article-shell">
              ${article.html}
            </div>
          </div>
        </article>
        <section>
          <div class="container cta-box">
            <div class="eyebrow">Related work</div>
            <h2>Make AI adoption visible enough to manage.</h2>
            <p>
              If AI use is already changing how work happens, WAIA helps make
              adoption visible, guided and manageable.
            </p>
            <div class="hero-actions" style="justify-content: center; margin-bottom: 0">
              <a class="btn primary" href="/waia/">Explore WAIA</a>
              <a class="btn secondary" href="https://tally.so/r/gDgbQP" target="_blank" rel="noopener noreferrer">Talk through adoption</a>
            </div>
          </div>
        </section>
      </main>`,
  });

const articles = await loadArticles();
await mkdir(outputDir, { recursive: true });
await writeFile(
  path.join(outputDir, "index.html"),
  tidyHtml(renderIndex(articles)),
);

for (const article of articles) {
  const articleDir = path.join(outputDir, article.slug);
  await mkdir(articleDir, { recursive: true });
  await writeFile(
    path.join(articleDir, "index.html"),
    tidyHtml(renderArticle(article)),
  );
}

console.log(
  `Built ${articles.length} insight article${articles.length === 1 ? "" : "s"}.`,
);
