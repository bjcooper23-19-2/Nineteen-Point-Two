# Nineteen Point Two Context

## Site purpose

This repository contains the Nineteen Point Two marketing site. It presents Nineteen Point Two as a premium, operator-led brand for operational clarity and controlled workplace AI adoption.

The homepage should quickly establish the immediate operational problem: unmanaged workplace AI adoption, Shadow AI, weak manager visibility and inconsistent behaviour. Revenue systems remain part of the operating thesis, but Revenue Review should sit as a distinct commercial route rather than the primary homepage story.

WAIA is the flagship workplace AI enablement platform. Outside Clarity is the standalone paid decision product. Revenue Review is the buyer-facing route for the Revenue Stress Test journey. Insights is the editorial layer that explains the operating doctrine.

The canonical strategic positioning source is `/docs/19.2-operating-doctrine.md`. Use it to keep Nineteen Point Two, WAIA, Outside Clarity and Revenue Review aligned.

## Visible site structure

- `/` is served by `index.html`.
- `/waia/` is served by `waia/index.html`.
- `/waia/how-it-works/` is served by `waia/how-it-works/index.html`.
- `/outside-clarity/` is served by `outside-clarity/index.html`.
- `/outside-clarity/how-it-works/` is served by `outside-clarity/how-it-works/index.html`.
- `/outside-clarity/snapshot/` is served by `outside-clarity/snapshot/index.html`.
- `/revenue-review/` is served by `revenue-review/index.html`.
- `/insights/` is served by `insights/index.html`.
- `/workplace-ai/` is served by `workplace-ai/index.html`.
- `/workplace-ai-academy/` is a legacy route that redirects to `/waia/`.
- Shared visual assets sit under `assets/`.
- `CNAME` points the GitHub Pages custom domain to `www.nineteenpointtwo.com`.

The site is static HTML with page level CSS. Insights pages are generated from markdown content using `node scripts/build-insights.mjs` and committed as static output.

## Positioning

Nineteen Point Two helps leaders expose the hidden operating risks that sit beneath targets, forecasts, adoption, renewal, expansion and decision quality.

The core lens is:

- People: ownership, judgement, confidence, manager behaviour and role clarity.
- Process: handovers, review points, operating rhythm, workflow design and escalation.
- Data: evidence quality, visibility, definitions, inputs, outputs and decision use.

## Main propositions

Revenue Review:

- The buyer-facing route for the Revenue Stress Test journey.
- Designed to show whether the commercial plan is supported by the operating system underneath it.
- Should remain important, but should not outweigh WAIA as the flagship scalable product.
- The Revenue Stress Test result may point to a separate paid Gumroad improvement pack.

Outside Clarity:

- A standalone paid outside view before one important plan or decision becomes a commitment.
- Should use clear tier language: Snapshot, Deeper View and Debrief.
- Should not sound like a broad consultancy engagement or workplace AI replacement.

WAIA:

- The flagship workplace AI adoption product.
- Explains the operating layer for guidance, learning, acknowledgement, baseline visibility, application evidence and manager follow-up.
- Main page stays commercially focused. `/waia/how-it-works/` carries package, pricing and implementation detail.

## Brand feel

The site should feel premium, calm, commercial and operator led. It should avoid hype, generic future of work language, exaggerated AI claims and broad small business consultancy language.

The design language is dark, minimal and editorial, with charcoal backgrounds, off white type, muted supporting copy and cyan accents.
