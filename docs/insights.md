# Insights Publishing

The Insights section is a lightweight static editorial area for operational thought leadership. It is not a CMS and should not become a separate publishing platform.

## Purpose

Use Insights for durable, indexable writing on:

- Workforce AI adoption.
- Shadow AI.
- Operational readiness.
- Governance as enablement.
- Workflow consistency.
- Management visibility.
- Recurring revenue operating realities.

The section should stay premium, editorial, commercially grounded and operator-led. It should not read like a generic AI blog.

## Structure

Source content lives in:

- `src/content/insights/`

Generated static pages live in:

- `insights/`

The build script is:

- `scripts/build-insights.mjs`

Run this after adding or editing article markdown:

```sh
node scripts/build-insights.mjs
```

Commit both the markdown source and the generated HTML output.

## Article format

Each article should be a markdown file with frontmatter:

```md
---
title: Article title
slug: article-slug
date: YYYY-MM-DD
category: Category
excerpt: Short editorial summary for listings and metadata.
---
```

Use folder-style route slugs. For example:

- Source: `src/content/insights/shadow-ai-workforce-ai-adoption.md`
- Route: `/insights/shadow-ai-workforce-ai-adoption/`

## Editorial rules

Follow `/docs/19.2-operating-doctrine.md`.

Use UK English. Do not use em dashes or en dashes. Keep the tone calm, practical and commercially grounded. Avoid hype, futurism, cyber-security theatre and generic AI consultancy language.

Do not call the section Blog. Use Insights.

Articles should connect back to the Nineteen Point Two operating lens where relevant:

- People.
- Process.
- Data.
- Visibility.
- Decision quality.
- System risk.
