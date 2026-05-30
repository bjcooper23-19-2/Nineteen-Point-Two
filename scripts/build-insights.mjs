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
      <img class="brand-logo" src="/assets/logo/logo-horizontal.svg" alt="Nineteen Point Two" />
    </a>
    <div class="nav-links">
      <div class="nav-group">
        <a href="/workplace-ai/">Workplace AI</a>
        <div class="nav-menu" aria-label="Workplace AI pages">
          <a href="/workplace-ai/">Shadow AI overview</a>
          <a href="/workplace-ai-academy/">WAIA platform</a>
          <a href="https://waia.nineteenpointtwo.com/login">Sign in</a>
        </div>
      </div>
      <div class="nav-group">
        <a href="/#diagnostics">Diagnostics</a>
        <div class="nav-menu" aria-label="Operational diagnostics">
          <a href="/workplace-ai-academy/#operational-diagnostic">Workplace AI diagnostic</a>
          <a href="/#stress-test">Revenue Stress Test</a>
        </div>
      </div>
      <a href="/insights/">Insights</a>
      <a href="/#operating-lens">Operating Lens</a>
    </div>
    <a class="nav-cta" href="/workplace-ai-academy/">Explore WAIA</a>
  </nav>
</header>`;

const footer = `
<footer>
  <div class="footer-grid">
    <span>&copy; 2026 Nineteen Point Two</span>
    <span>Operating clarity across revenue systems and workplace AI adoption.</span>
    <span><a href="/insights/">Insights</a> | <a href="/workplace-ai/">Shadow AI overview</a> | <a href="/workplace-ai-academy/">WAIA platform</a></span>
    <span><a href="/legal/">Legal</a> | <a href="/privacy/">Privacy</a> | <a href="/cookies/">Cookies</a> | <a href="/website-terms/">Website Terms</a> | <a href="/subprocessors/">Subprocessors</a></span>
  </div>
</footer>`;

const styles = `
:root {
  --charcoal: #1a1a2e;
  --ink: #f7f3ee;
  --muted: rgba(247, 243, 238, 0.72);
  --quiet: rgba(247, 243, 238, 0.52);
  --cyan: #0d7377;
  --cyan-soft: rgba(13, 115, 119, 0.26);
  --line: rgba(247, 243, 238, 0.14);
  --panel: rgba(247, 243, 238, 0.045);
  --shadow: 0 28px 80px rgba(0, 0, 0, 0.36);
  --max: 1180px;
}
* {
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}
body {
  margin: 0;
  font-family:
    Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
  background:
    radial-gradient(circle at 20% 0%, rgba(13, 115, 119, 0.16), transparent 28%),
    linear-gradient(180deg, var(--charcoal) 0%, #111120 54%, #0b0b15 100%);
  color: var(--ink);
  letter-spacing: 0;
}
body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  opacity: 0.18;
  background-image:
    linear-gradient(rgba(247, 243, 238, 0.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(247, 243, 238, 0.045) 1px, transparent 1px);
  background-size: 34px 34px;
  mask-image: linear-gradient(180deg, black, transparent 72%);
}
a {
  color: inherit;
  text-decoration: none;
}
p,
li {
  color: var(--muted);
  font-size: 1.05rem;
  line-height: 1.75;
}
header {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(18px);
  background: rgba(16, 16, 31, 0.76);
  border-bottom: 1px solid var(--line);
}
.nav {
  max-width: var(--max);
  margin: 0 auto;
  padding: 18px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
}
.brand {
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  line-height: 0;
  max-width: 42vw;
}
.brand-logo {
  display: block;
  width: auto;
  height: 36px;
  max-width: 100%;
}
.nav-links {
  display: flex;
  align-items: center;
  gap: 18px;
  color: var(--muted);
  font-size: 0.9rem;
}
.nav-links a:hover {
  color: var(--ink);
}
.nav-group {
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 8px 0;
}
.nav-group > a::after {
  content: "";
  display: inline-block;
  width: 6px;
  height: 6px;
  margin-left: 8px;
  border-right: 1px solid currentColor;
  border-bottom: 1px solid currentColor;
  transform: translateY(-2px) rotate(45deg);
}
.nav-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, 8px);
  min-width: 190px;
  padding: 10px;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: rgba(16, 16, 31, 0.96);
  box-shadow: var(--shadow);
  display: grid;
  gap: 2px;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition:
    opacity 160ms ease,
    transform 160ms ease,
    visibility 160ms ease;
}
.nav-group:hover .nav-menu,
.nav-group:focus-within .nav-menu {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translate(-50%, 0);
}
.nav-menu a {
  padding: 9px 10px;
  border-radius: 12px;
  white-space: nowrap;
}
.nav-menu a:hover {
  background: rgba(247, 243, 238, 0.08);
}
.nav-cta,
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 999px;
  padding: 12px 18px;
  border: 1px solid rgba(247, 243, 238, 0.22);
  font-weight: 700;
}
.nav-cta {
  background: rgba(247, 243, 238, 0.08);
  color: var(--ink);
  font-size: 0.9rem;
}
.btn.primary {
  background: var(--ink);
  color: #111120;
  border-color: transparent;
}
.btn.secondary {
  background: rgba(247, 243, 238, 0.06);
  color: var(--ink);
}
.site {
  position: relative;
  z-index: 1;
}
main {
  overflow: hidden;
}
section {
  padding: 88px 24px;
}
.container {
  max-width: var(--max);
  margin: 0 auto;
}
.hero {
  padding-top: 78px;
  padding-bottom: 76px;
  border-bottom: 1px solid var(--line);
}
.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-weight: 700;
  font-size: 0.78rem;
}
.eyebrow::before {
  content: "";
  width: 9px;
  height: 9px;
  border-radius: 999px;
  background: var(--cyan);
  box-shadow: 0 0 26px var(--cyan);
}
h1,
h2,
h3 {
  margin: 0;
  letter-spacing: 0;
  line-height: 0.96;
  color: var(--ink);
}
h1 {
  margin-top: 20px;
  max-width: 880px;
  font-size: clamp(3rem, 6.8vw, 5.8rem);
}
h2 {
  margin-top: 18px;
  max-width: 820px;
  font-size: clamp(2rem, 4vw, 3.5rem);
}
h3 {
  font-size: 1.35rem;
  line-height: 1.2;
}
.lede {
  max-width: 760px;
  margin: 24px 0 0;
  font-size: clamp(1.1rem, 1.55vw, 1.32rem);
  line-height: 1.65;
}
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 34px;
}
.section-head {
  max-width: 820px;
  margin-bottom: 40px;
}
.article-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}
.article-card,
.feature-panel,
.cta-box {
  border: 1px solid var(--line);
  border-radius: 28px;
  background: linear-gradient(145deg, rgba(247, 243, 238, 0.07), rgba(247, 243, 238, 0.025));
  box-shadow: var(--shadow);
}
.article-card {
  min-height: 318px;
  padding: 26px;
  display: grid;
  grid-template-rows: 1fr auto;
  gap: 28px;
  box-shadow: none;
}
.article-card-content {
  display: grid;
  align-content: start;
}
.article-meta,
.article-meta a {
  color: var(--quiet);
  font-size: 0.86rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 700;
}
.article-card .article-meta {
  margin-bottom: 16px;
}
.article-title {
  min-height: 4.55rem;
  font-size: 1.24rem;
  line-height: 1.22;
}
.article-card p {
  margin: 14px 0 0;
  max-width: 92%;
}
.article-card .btn {
  align-self: end;
  justify-self: start;
  margin-top: 0;
}
.article-shell {
  max-width: 760px;
  margin: 0 auto;
}
.article-header {
  padding: 74px 24px 46px;
  border-bottom: 1px solid var(--line);
}
.article-body {
  padding: 58px 24px 92px;
}
.article-body h2 {
  margin-top: 46px;
  margin-bottom: 14px;
  font-size: clamp(1.55rem, 2.8vw, 2.35rem);
  line-height: 1.1;
}
.article-body p {
  margin: 0 0 22px;
}
.article-body ul {
  margin: 0 0 28px;
  padding-left: 22px;
}
.article-body .table-wrap {
  margin: 26px 0 34px;
  overflow-x: auto;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: rgba(247, 243, 238, 0.035);
}
.article-body table {
  width: 100%;
  min-width: 720px;
  border-collapse: collapse;
}
.article-body th,
.article-body td {
  padding: 14px 16px;
  border-bottom: 1px solid var(--line);
  border-right: 1px solid var(--line);
  color: var(--muted);
  font-size: 0.95rem;
  line-height: 1.5;
  text-align: left;
  vertical-align: top;
}
.article-body th {
  color: var(--ink);
  font-weight: 700;
  background: rgba(247, 243, 238, 0.04);
}
.article-body th:last-child,
.article-body td:last-child {
  border-right: 0;
}
.article-body tr:last-child td {
  border-bottom: 0;
}
.article-body a {
  color: var(--ink);
  border-bottom: 1px solid rgba(13, 115, 119, 0.7);
}
.cta-box {
  padding: 42px;
  text-align: center;
}
.cta-box h2,
.cta-box p {
  margin-left: auto;
  margin-right: auto;
}
footer {
  padding: 38px 24px;
  border-top: 1px solid var(--line);
  color: var(--quiet);
}
.footer-grid {
  max-width: var(--max);
  margin: 0 auto;
  display: grid;
  gap: 14px;
}
footer a {
  color: var(--muted);
}
@media (max-width: 1040px) {
  .nav-links {
    gap: 12px;
    font-size: 0.82rem;
  }
}
@media (max-width: 900px) {
  .nav {
    gap: 12px;
    padding-left: 18px;
    padding-right: 18px;
  }
  .brand-logo {
    height: 30px;
  }
  .nav-links {
    gap: 9px;
    font-size: 0.76rem;
  }
  .nav-cta {
    padding: 10px 13px;
    font-size: 0.82rem;
  }
@media (max-width: 760px) {
  .nav-links {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    justify-content: center;
    gap: 18px;
    padding: 12px 16px calc(12px + env(safe-area-inset-bottom));
    background: rgba(12, 13, 28, 0.96);
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    overflow-x: auto;
  }

  .nav-links .nav-group,
  .nav-links .nav-menu {
    display: contents;
  }

  .nav-links a {
    white-space: nowrap;
    font-size: 0.82rem;
  }

  body {
    padding-bottom: 80px;
  }
}
  .brand {
    max-width: 136px;
  }
  .brand-logo {
    height: 32px;
  }
  section {
    padding: 68px 20px;
  }
  .hero {
    padding-top: 58px;
  }
  h1 {
    font-size: clamp(2.55rem, 11vw, 3.7rem);
  }
  .hero {
    padding-top: 54px;
    padding-bottom: 56px;
  }
  .article-header {
    padding: 52px 20px 34px;
  }
  .article-body {
    padding: 42px 20px 68px;
  }
  .article-grid {
    grid-template-columns: 1fr;
  }
  .article-card,
  .cta-box {
    border-radius: 22px;
    padding: 24px;
  }
  .article-title {
    min-height: auto;
  }
  .article-card p {
    max-width: none;
  }
  .nav {
    padding-left: 18px;
    padding-right: 18px;
  }
}
`;

const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const inlineMarkdown = (value) =>
  escapeHtml(value).replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

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
    <style>${styles}</style>
  </head>
  <body>
    <div class="site">
      ${nav}
      ${body}
      ${footer}
    </div>
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
              <a class="btn primary" href="/workplace-ai-academy/">Explore WAIA</a>
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
                These are not generic AI posts. They are working notes on the places
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
              Explore the operating risk behind workplace AI adoption, or see how
              WAIA helps organisations turn policy intent into
              shared standards, manager support and visible behaviour change.
            </p>
            <div class="hero-actions" style="justify-content: center; margin-bottom: 0">
              <a class="btn primary" href="/workplace-ai-academy/">Explore WAIA</a>
              <a class="btn secondary" href="/workplace-ai/">Shadow AI overview</a>
            </div>
          </div>
        </section>
      </main>`,
  });

const articles = await loadArticles();
await mkdir(outputDir, { recursive: true });
await writeFile(path.join(outputDir, "index.html"), renderIndex(articles));

for (const article of articles) {
  const articleDir = path.join(outputDir, article.slug);
  await mkdir(articleDir, { recursive: true });
  await writeFile(path.join(articleDir, "index.html"), renderArticle(article));
}

console.log(
  `Built ${articles.length} insight article${articles.length === 1 ? "" : "s"}.`,
);
