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

WAIA is the flagship workplace AI enablement platform. Revenue Stress Test remains important as the diagnostic visibility layer for revenue systems. Insights is the editorial layer for durable operational thinking.

The main buyer should first recognise Shadow AI: workplace AI adoption moving faster than visibility, evidence, manager confidence or operational consistency. Revenue integrity remains a secondary application of the same people, process and data lens.

## Workplace AI section separation

The Workplace AI pages have distinct jobs:

- `/workplace-ai/` creates problem awareness around AI adoption as an operating model and governance issue.
- `/workplace-ai-academy/` explains the Workplace AI Academy product, learner and admin experience, organisation guidance, acknowledgement, deployment options and evidence value.

The readiness page should avoid over explaining the Academy. The Academy page should be more concrete and platform specific.

## CTA discipline

Primary CTAs should stay consultative and commercially grounded.

Examples visible on the site include:

- Run the Revenue Integrity Stress Test
- Talk through the constraint
- Discuss your revenue system
- Explore WAIA
- Start the diagnostic conversation
- Discuss WAIA
- Discuss AI adoption readiness

The Workplace AI sign in link is for existing learners or admins. It should not be treated as the primary prospect CTA.

## Navigation

The current navigation pattern is:

- Workplace AI
- Diagnostics
- Insights
- Operating Lens

The Workplace AI dropdown labels are:

- Shadow AI overview
- WAIA platform
- Sign in

Keep routes unchanged unless there is an explicit route change request.

## Insights section

Insights is the editorial section for durable operational thought leadership. It is not a CMS and should not be called Blog.

Articles are written in markdown under `src/content/insights/` and rendered into static pages under `insights/` with `node scripts/build-insights.mjs`.

## Copy constraints

Use UK English. Keep the tone calm, practical, premium and operator led. Avoid em dashes and en dashes. Avoid generic future of work language, exaggerated claims and broad small business consultancy positioning.

The exact phrase below is required where it appears and should not be altered:

`AI is not a strategy, it’s a tool.`
