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

Keep the homepage anchored in the Nineteen Point Two operating thesis. WAIA is the flagship workplace AI enablement platform. Outside Clarity is the standalone paid outside-view product for important decisions. Revenue Review is the buyer-facing route for the Revenue Stress Test journey.

Use `/docs/19.2-operating-doctrine.md` as the canonical strategic positioning source for Nineteen Point Two, WAIA, Outside Clarity and Revenue Review.

Insights articles are source-controlled markdown files under `/src/content/insights/` and rendered to static HTML with `node scripts/build-insights.mjs`.

Current direct navigation routes are:

- `/waia/`
- `/outside-clarity/`
- `/revenue-review/`
- `/insights/`
- `/#operating-lens`
