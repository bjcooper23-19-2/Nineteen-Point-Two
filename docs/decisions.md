# Decisions

## Static GitHub Pages structure

The repository is organised as a static site. Routes are represented by folders containing `index.html` files. Root assets are referenced directly from the HTML.

Current routes visible in the repo:

- `/`
- `/insights/`
- `/workplace-ai/`
- `/workplace-ai-academy/`

The custom domain is managed through `CNAME`, which contains `www.nineteenpointtwo.com`.

The canonical strategic doctrine is stored at `/docs/19.2-operating-doctrine.md`.

## Product hierarchy

The homepage should now lead with operational clarity and controlled workplace AI adoption rather than making Revenue Stress Test feel like the main strategic product.

WAIA is the flagship workplace AI enablement platform. Outside Clarity is a standalone paid decision product. Revenue Review is the buyer-facing route for the Revenue Stress Test journey. Insights is the editorial layer for durable operational thinking.

The main buyer should first recognise Shadow AI: workplace AI adoption moving faster than visibility, evidence, manager confidence or operational consistency. Revenue integrity remains a secondary application of the same people, process and data lens.

## Current commercial route decision

Decision date: 10 July 2026.

The public navigation should use direct product links:

- WAIA
- Outside Clarity
- Revenue Review
- Insights
- Operating Lens

The Tools navigation category is retired. Do not restore a Tools dropdown unless there is a separate decision to introduce a broader product directory.

The main product pages should answer the commercial questions quickly. Supporting pages should carry package, scope, implementation and FAQ detail:

- `/waia/how-it-works/`
- `/outside-clarity/how-it-works/`
- `/revenue-review/`

Revenue Review is the public route label. Revenue Stress Test remains the mechanism used inside that journey.

## Workplace AI section separation

The Workplace AI pages have distinct jobs:

- `/workplace-ai/` creates problem awareness around AI adoption as an operating model and governance issue.
- `/workplace-ai-academy/` explains the Workplace AI Academy product, learner and admin experience, organisation guidance, acknowledgement, deployment options and evidence value.

The readiness page should avoid over explaining the Academy. The Academy page should be more concrete and platform specific.

## CTA discipline

Primary CTAs should stay consultative and commercially grounded.

Examples visible on the site include:

- Ask to see WAIA
- Explore WAIA
- Submit your plan
- Run the Revenue Stress Test
- Explore WAIA

The Workplace AI sign in link is for existing learners or admins. It should not be treated as the primary prospect CTA.

WAIA prospect CTAs should use `https://tally.so/r/gDgbQP`.

Outside Clarity package CTAs should use `/outside-clarity/snapshot/`, which contains the `obzbWP` intake form.

Revenue Review should route users locally first to `/revenue-review/`; the local page carries the direct Revenue Stress Test app CTA.

## Navigation

The current navigation pattern is:

- WAIA
- Outside Clarity
- Revenue Review
- Insights
- Operating Lens

The logo is the home route. Keep Sign in and Ask to see WAIA as global actions.

## Insights section

Insights is the editorial section for durable operational thought leadership. It is not a CMS and should not be called Blog.

Articles are written in markdown under `src/content/insights/` and rendered into static pages under `insights/` with `node scripts/build-insights.mjs`.

## Copy constraints

Use UK English. Keep the tone calm, practical, premium and operator led. Avoid em dashes and en dashes. Avoid generic future of work language, exaggerated claims and broad small business consultancy positioning.

The exact phrase below is required where it appears and should not be altered:

`AI is not a strategy, it’s a tool.`
