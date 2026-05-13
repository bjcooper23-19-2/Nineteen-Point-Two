# Nineteen Point Two

Static marketing site for Nineteen Point Two.

The site is organised as root and nested `index.html` routes, with assets stored under `assets/` and the custom domain configured through `CNAME`.

## Working with Codex

Before making changes, review:

- /docs/19.2-operating-doctrine.md
- /docs/context.md
- /docs/decisions.md
- /docs/insights.md
- /docs/next-steps.md
- /docs/codex-instructions.md

Keep the homepage anchored in the Nineteen Point Two operating thesis. WAIA is now the flagship workforce AI enablement platform, while Revenue Stress Test remains the diagnostic visibility layer for revenue systems.

Use `/docs/19.2-operating-doctrine.md` as the canonical strategic positioning source for Nineteen Point Two, Revenue Stress Test and Workplace AI Academy.

Insights articles are source-controlled markdown files under `/src/content/insights/` and rendered to static HTML with `node scripts/build-insights.mjs`.
