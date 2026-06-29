# Site positioning audit

Date: 29 June 2026

Status: Audit only. No website content or code was changed as part of this review.

## 1. Executive summary

The site has a clear lead product in WAIA, but the public journey still presents a standalone AI adoption diagnostic in navigation, homepage cards, WAIA calls to action, the legacy WAIA page, Outside Clarity comparisons and two Insight articles.

That is the main source of product confusion.

The current doctrine requires all workplace AI adoption, baseline visibility, guidance, learning, evidence and manager follow-up conversations to lead to WAIA. The public site does not yet meet that standard because the AI Adoption Diagnostic is repeatedly presented as a separate entry product.

Outside Clarity is much clearer than it was, but it still relies heavily on `pressure-test`, `diagnostic` and `assessment` language. Those terms make the offer feel closer to consultancy advisory than the intended independent outside view before commitment.

### Audit coverage

- 21 public HTML routes reviewed.
- 20 canonical URLs listed in `sitemap.xml`.
- 1 external Revenue Stress Test tool route reviewed.
- 5 published Insight articles reviewed in both markdown source and generated HTML.
- 2 distinct navigation patterns found across the 21 rendered pages.
- 6 distinct footer patterns found.
- 31 rendered links to the main Tally enquiry form found.
- 2 rendered links to the separate Outside Clarity intake form found.
- 9 `mailto:` links found. All are fallback or legal contact links rather than primary buttons.
- 30 rendered links target the `ai-adoption-diagnostic` anchor.
- All root-relative HTML links resolve to files or routes present in the repository.

### Grouped issue count

These are grouped issues, not literal word matches.

| Category                              |    Issues found | Highest priority                                                        |
| ------------------------------------- | --------------: | ----------------------------------------------------------------------- |
| Product architecture and routes       |               5 | Remove the standalone AI Adoption Diagnostic proposition                |
| Navigation and footer consistency     |               3 | Remove the AI diagnostic menu item and align legal-page navigation      |
| CTA and destination consistency       |               6 | Route AI adoption interest to WAIA or the WAIA enquiry                  |
| Terminology families requiring action |               5 | Diagnostic, pressure-test, assessment, maturity and transformation      |
| Insight editorial alignment           | 4 of 5 articles | Replace two diagnostic links and review maturity language               |
| Generator and continuity risk         |               2 | Fix the generator source and update older doctrine after public changes |

### What is already working

- WAIA is the visual and commercial lead on the homepage.
- `/waia/` explains guidance, practical learning, manager support, evidence and follow-up as one product system.
- Workplace AI interest is usually offered a direct WAIA route as well as the stale diagnostic route.
- Outside Clarity has a distinct audience and decision context.
- Revenue Stress Test remains commercially distinct from workplace AI adoption.
- The generated Insight related-work block makes WAIA the primary product CTA.
- Outside Clarity appears in every rendered navigation instance.
- No public `Workplace AI Snapshot` or `AI Snapshot` proposition exists.
- No primary commercial CTA relies on `mailto:`.

## 2. Route inventory

### Public and product routes

| Page path                    | Page purpose                                            | Main offer referenced                                              | Primary CTA                | Destination                            | Status                                                                                                                                                          |
| ---------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------ | -------------------------- | -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`                          | Main brand and offer architecture                       | WAIA, AI Adoption Diagnostic, Outside Clarity, Revenue Stress Test | `Explore WAIA`             | `/waia/`                               | Inconsistent. WAIA leads, but a separate diagnostic card and four diagnostic CTAs compete with it.                                                              |
| `/waia/`                     | Primary workplace AI adoption product page              | WAIA                                                               | `Book a WAIA fit call`     | `https://tally.so/r/gDgbQP`            | Inconsistent. Strong WAIA proposition, but it contains a dedicated AI diagnostic section and repeated diagnostic CTAs.                                          |
| `/workplace-ai/`             | Shadow AI and workplace adoption problem-awareness page | WAIA                                                               | `Explore WAIA`             | `/waia/`                               | Mostly current. Routes to WAIA correctly, but uses `maturity model` and `audit` language that should be reviewed.                                               |
| `/workplace-ai-academy/`     | Legacy or alternate WAIA product page                   | WAIA and Workplace AI Operational Diagnostic                       | `Explore WAIA`             | `/waia/`                               | Stale. Canonical points to `/waia/`, but the page still renders on `www` and contains a standalone diagnostic section and CTA.                                  |
| `/outside-clarity/`          | Outside view on a plan before commitment                | Outside Clarity, plus comparison with other offers                 | `Submit a plan for review` | `https://tally.so/r/gDgbQP`            | Inconsistent. Audience and decision moment are clear, but the page uses pressure-test language and presents three diagnostics including AI Adoption Diagnostic. |
| `/outside-clarity/snapshot/` | Direct Outside Clarity intake                           | Outside Clarity                                                    | Embedded intake            | `https://tally.so/embed/obzbWP`        | Review. It is indexed in the sitemap but no longer linked from the main Outside Clarity commercial CTA, which uses the separate general Tally form.             |
| External RST tool            | Fast revenue reality check                              | Revenue Stress Test                                                | `Run the stress test`      | `https://rstapp.nineteenpointtwo.com/` | Current. No dedicated local RST page exists; the homepage section and external tool are the public route.                                                       |

### Insights routes

| Page path                                                     | Page purpose                                         | Main offer referenced                             | Primary CTA    | Destination | Status                                                                                |
| ------------------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------- | -------------- | ----------- | ------------------------------------------------------------------------------------- |
| `/insights/`                                                  | Editorial index                                      | WAIA and Shadow AI overview                       | `Explore WAIA` | `/waia/`    | Current content. Navigation still exposes AI Adoption Diagnostic.                     |
| `/insights/cost-of-ai-is-becoming-visible/`                   | AI cost and operating visibility article             | WAIA                                              | `Explore WAIA` | `/waia/`    | Current apart from shared navigation terminology.                                     |
| `/insights/hidden-cost-of-fragmented-ai-adoption/`            | Fragmented adoption and manager visibility article   | WAIA                                              | `Explore WAIA` | `/waia/`    | Review. Product routing is current; three maturity references should be reconsidered. |
| `/insights/hidden-cost-of-workplace-ai/`                      | Operational drag and illustrative cost article       | WAIA                                              | `Explore WAIA` | `/waia/`    | Review. Product routing is current; one `cross-team audit` phrase should be softened. |
| `/insights/operational-strain-beneath-workplace-ai-adoption/` | Workflow variation and management visibility article | WAIA, RST and Workplace AI Operational Diagnostic | `Explore WAIA` | `/waia/`    | Stale. Body copy links to a standalone Workplace AI Operational Diagnostic.           |
| `/insights/shadow-ai-workplace-ai-adoption/`                  | Shadow AI operating-condition article                | WAIA, RST and Workplace AI Operational Diagnostic | `Explore WAIA` | `/waia/`    | Stale. Body copy links to a standalone diagnostic and contains a maturity model.      |

### Legal and policy routes

The legal bodies appear current and should not be rewritten for marketing style. Their navigation is stale.

| Page path                     | Page purpose                      | Main offer referenced     | Primary CTA                                   | Destination                 | Status                                |
| ----------------------------- | --------------------------------- | ------------------------- | --------------------------------------------- | --------------------------- | ------------------------------------- |
| `/legal/`                     | Legal hub                         | WAIA in global navigation | None in body; nav uses `Book a WAIA fit call` | `https://tally.so/r/gDgbQP` | Current legal body; stale navigation. |
| `/privacy/`                   | Privacy Notice                    | WAIA in global navigation | None in body; nav uses `Book a WAIA fit call` | `https://tally.so/r/gDgbQP` | Current legal body; stale navigation. |
| `/cookies/`                   | Cookie Notice                     | WAIA in global navigation | None in body; nav uses `Book a WAIA fit call` | `https://tally.so/r/gDgbQP` | Current legal body; stale navigation. |
| `/website-terms/`             | Website Terms                     | WAIA in global navigation | None in body; nav uses `Book a WAIA fit call` | `https://tally.so/r/gDgbQP` | Current legal body; stale navigation. |
| `/waia-terms/`                | WAIA Terms                        | WAIA                      | None in body; nav uses `Book a WAIA fit call` | `https://tally.so/r/gDgbQP` | Current legal body; stale navigation. |
| `/data-processing-agreement/` | WAIA data processing terms        | WAIA                      | None in body; nav uses `Book a WAIA fit call` | `https://tally.so/r/gDgbQP` | Current legal body; stale navigation. |
| `/subprocessors/`             | WAIA subprocessors                | WAIA                      | None in body; nav uses `Book a WAIA fit call` | `https://tally.so/r/gDgbQP` | Current legal body; stale navigation. |
| `/waia-ai-use-statement/`     | WAIA product and AI use statement | WAIA                      | None in body; nav uses `Book a WAIA fit call` | `https://tally.so/r/gDgbQP` | Current legal body; stale navigation. |
| `/security/`                  | WAIA security summary             | WAIA                      | None in body; nav uses `Book a WAIA fit call` | `https://tally.so/r/gDgbQP` | Current legal body; stale navigation. |

### Sitemap observations

- `sitemap.xml` contains 20 canonical URLs.
- `/workplace-ai-academy/` is intentionally absent because its canonical points to `/waia/`.
- The legacy page does not redirect visitors on the `www` host, so it remains a live duplicate despite the canonical decision.
- `/outside-clarity/snapshot/` is included and indexable even though the main Outside Clarity CTAs now use a different Tally form directly.
- The external Revenue Stress Test tool is correctly absent from the website sitemap.
- No sitemap change is recommended until the legacy WAIA route and Outside Clarity intake journey are deliberately resolved.

## 3. Product architecture audit

### WAIA

Intended role: workplace AI adoption, baseline visibility, guidance, practical learning, evidence and manager follow-up.

Current state:

- WAIA is visually first on the homepage and navigation.
- The WAIA page correctly explains adoption control, shared guidance, manager support and evidence-led follow-up.
- Baseline and operational drag are presented as WAIA capabilities, which is strategically coherent.
- A dedicated `AI Adoption Diagnostic` section, navigation item and CTA create an unnecessary product before the product.
- The phrase `Start with the AI adoption diagnostic` suggests that buyers must choose between WAIA and another offer, even when both routes use the same enquiry form.

Recommended direction:

- Remove the standalone diagnostic identity.
- Keep the baseline view, operating picture and adoption-readiness conversation inside the WAIA journey.
- Use one commercial route such as `Ask to see WAIA`, `Discuss workplace AI adoption` or `See your current operating picture`.
- Keep baseline language only where it is clearly a WAIA capability rather than a separate product.

### Outside Clarity

Intended role: an independent outside view on a plan, proposition, operating decision or commercial choice before commitment.

Current state:

- The audience, decision moment, evidence and decision-gate language are clear.
- The hero, product badge and homepage card use `pressure-test` repeatedly.
- The product page labels the offer comparison `Three diagnostics` and includes AI Adoption Diagnostic as a peer offer.
- The Snapshot page uses `assessment` in the information-handling notice.
- The main product page sends users to the general Tally enquiry, while the indexed Snapshot route embeds a separate Tally form.

Recommended direction:

- Use `outside view`, `independent review`, `decision readiness`, `what is missing` and `before you commit`.
- Replace `pressure-test` with `review`, `challenge` or `outside view` depending on context.
- Replace `Three diagnostics` with `Which route fits?` or `Three different operating questions`.
- Compare Outside Clarity directly with WAIA and Revenue Stress Test, not with a standalone AI diagnostic.
- Decide whether the Snapshot route remains the intake source of truth or whether the general enquiry form replaces it.

### Revenue Stress Test

Intended role: revenue capacity, assumptions and commercial operating clarity.

Current state:

- The homepage copy is commercially direct and distinct from workplace AI adoption.
- The tool has one clear external CTA.
- RST appears in two article contexts and the Outside Clarity comparison.
- There is no dedicated local landing page beyond the homepage section.

Recommended direction:

- Keep the current distinction.
- Consider the product name separately in future because `stress test` sits near the discouraged diagnostic language, but do not rename it as part of the immediate drift repair.
- If a local page is added later, make it a product/tool page rather than consultancy advisory copy.

### Product overlap causing confusion

1. Homepage: WAIA and Workplace AI Operational Diagnostic are separate cards for nearly the same buyer problem.
2. WAIA page: the buyer is offered a fit call and a diagnostic as parallel starting points.
3. Legacy Academy page: WAIA is described as a system but a separate 45 to 60 minute diagnostic conversation receives a full product section.
4. Outside Clarity: the comparison presents a standalone AI diagnostic alongside Outside Clarity and RST.
5. Insight articles: two articles point readers to the old diagnostic before WAIA.

## 4. Navigation audit

### Navigation pattern A: current commercial and Insights pages

Used by 12 pages:

- `index.html`
- `waia/index.html`
- `workplace-ai/index.html`
- `workplace-ai-academy/index.html`
- `outside-clarity/index.html`
- `outside-clarity/snapshot/index.html`
- `insights/index.html`
- all five generated Insight article pages

Visible structure:

`WAIA | Diagnostics | AI Adoption Diagnostic | Revenue Stress Test | Outside Clarity | Insights | Operating Lens | Sign in | Ask to see WAIA`

Findings:

- `AI Adoption Diagnostic` conflicts directly with the current doctrine.
- `Diagnostics` reinforces consultancy-style packaging.
- Outside Clarity is present and correctly routed.
- WAIA is prominent and the sign-in route is correct.
- `scripts/build-insights.mjs` is the source of truth for the six generated Insight pages and contains the same stale menu item.

### Navigation pattern B: legal and policy pages

Used by 9 pages:

- `legal/index.html`
- `privacy/index.html`
- `cookies/index.html`
- `website-terms/index.html`
- `waia-terms/index.html`
- `data-processing-agreement/index.html`
- `subprocessors/index.html`
- `waia-ai-use-statement/index.html`
- `security/index.html`

Visible structure:

`WAIA | Workplace AI | Shadow AI overview | WAIA product | Sign in | Diagnostics | AI Adoption Diagnostic | Revenue Stress Test | Outside Clarity | Insights | Operating Lens | Book a WAIA fit call`

Findings:

- This is an older navigation architecture.
- WAIA appears both top-level and inside the Workplace AI dropdown.
- Sign in is nested under Workplace AI rather than presented as a quiet utility action.
- The CTA label differs from the current `Ask to see WAIA` used elsewhere.
- AI Adoption Diagnostic is still present.
- These pages are not generated from `scripts/build-insights.mjs`, so they require a separate repeated-markup update.

### Recommended target navigation

Recommended direction, subject to the next implementation pass:

`WAIA | Tools | Insights | Operating Lens | Sign in | Ask to see WAIA`

The `Tools` group could contain:

- Revenue Stress Test
- Outside Clarity

WAIA should remain top-level rather than appearing again inside the group. Workplace AI awareness content can remain reachable through WAIA, Insights and footer links.

### Footer findings

Six footer patterns exist:

1. Homepage: People, Process and Data.
2. WAIA: WAIA, Shadow AI overview and Insights.
3. Workplace AI: People, Processes and Data.
4. Outside Clarity, Snapshot and legacy Academy: Safe, Consistent and Evidence-led.
5. Insights: Insights, Shadow AI overview and WAIA product.
6. Legal pages: legal links only.

The variations are not broken, but the shared `Safe | Consistent | Evidence-led` line makes Outside Clarity feel closer to WAIA than its decision-support role warrants. Review this in a later polish pass. Legal footer simplicity is appropriate.

## 5. CTA audit

### Destination groups

| Destination                                                     | Labels found                                                                                                                                                                                                             | Assessment                                                                                                                                                   |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `/waia/`                                                        | `Explore WAIA`, `See how WAIA works`, inline `WAIA` and `Manager enablement` links                                                                                                                                       | Current and strategically correct.                                                                                                                           |
| `/waia/#ai-adoption-diagnostic` and `#ai-adoption-diagnostic`   | `AI Adoption Diagnostic`, `Start with the AI adoption diagnostic`, `Start with the diagnostic`, `Explore the diagnostic`, `Workplace AI Operational Diagnostic`                                                          | Must change. This is the main source of standalone-product drift.                                                                                            |
| `https://tally.so/r/gDgbQP`                                     | `Ask to see WAIA`, `Book a WAIA fit call`, `Talk through adoption`, `Discuss workplace AI adoption`, `Start with the AI adoption diagnostic`, `Start a workplace AI diagnostic conversation`, `Submit a plan for review` | Destination is reliable, but labels mix WAIA, generic adoption and the discontinued standalone diagnostic proposition.                                       |
| `/outside-clarity/`                                             | `Explore Outside Clarity`, `Back to Outside Clarity`, global navigation link                                                                                                                                             | Current discovery route.                                                                                                                                     |
| `https://tally.so/embed/obzbWP` and `https://tally.so/r/obzbWP` | Embedded Outside Clarity Snapshot intake and fallback link                                                                                                                                                               | Review. This is a second form journey that is no longer reached by the main Outside Clarity CTAs.                                                            |
| `https://rstapp.nineteenpointtwo.com/`                          | `Run the stress test`, inline `Revenue Stress Test`                                                                                                                                                                      | Current.                                                                                                                                                     |
| `/#stress-test`                                                 | `Review revenue risk`, navigation and article references                                                                                                                                                                 | Current internal discovery route.                                                                                                                            |
| `https://waia.nineteenpointtwo.com/login`                       | `Sign in`, one inline login URL                                                                                                                                                                                          | Correct utility route.                                                                                                                                       |
| `mailto:`                                                       | 9 direct-contact or legal links                                                                                                                                                                                          | Keep as fallback/legal contact. None is a primary button. One subject still names Workplace AI Operational Diagnostic and should be updated with that offer. |

### CTA issues to fix

1. Homepage contains three `Start with the AI adoption diagnostic` links and one `Start with the diagnostic` link.
2. WAIA hero and final section present the diagnostic anchor as an alternative to the WAIA fit call.
3. WAIA includes a Tally button whose label still sells the diagnostic.
4. Legacy Academy includes `Start a workplace AI diagnostic conversation` and a matching fallback email subject.
5. Outside Clarity links to the standalone diagnostic in its comparison section.
6. Two Insight articles link to Workplace AI Operational Diagnostic.

### CTA wording recommendation

For workplace AI adoption:

- Primary: `Ask to see WAIA`
- Alternative: `Discuss workplace AI adoption`
- Product exploration: `Explore WAIA`
- Baseline context: `See your current operating picture`

For Outside Clarity:

- Primary: `Submit a plan for review`
- Product exploration: `Explore Outside Clarity`
- Supporting action: `See what the review covers`

For Revenue Stress Test:

- Primary: `Run the stress test`
- Supporting action: `Check the revenue plan`

## 6. Terminology audit

### Raw search summary

The counts below include repeated generated HTML, navigation markup, ARIA labels and code identifiers. They are evidence of drift surface area, not counts of distinct copy issues.

| Search term                       | Raw matches | Files |
| --------------------------------- | ----------: | ----: |
| `diagnostic` / `diagnostics`      |         168 |    24 |
| `pressure-test` / `pressure test` |           9 |     3 |
| `audit`                           |           8 |     5 |
| `assessment`                      |          14 |    10 |
| `maturity`                        |          29 |     7 |
| `intervention`                    |           0 |     0 |
| `transformation`                  |           2 |     2 |
| `findings`                        |           0 |     0 |
| `AI Adoption Diagnostic`          |          32 |    22 |
| `Workplace AI Snapshot`           |           0 |     0 |
| `AI Snapshot`                     |           0 |     0 |
| `baseline`                        |          69 |    11 |

### Diagnostic and diagnostics

| File or repeated group                                                                               | Visible text or source snippet                                                                                    | Action                     | Suggested direction                                                                                                     |
| ---------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | -------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| All 21 rendered navs plus `scripts/build-insights.mjs:19-21`                                         | `Diagnostics`, `Operational diagnostics`, `AI Adoption Diagnostic`                                                | Replace                    | Use `Tools` or another product-led grouping. Remove the AI diagnostic item.                                             |
| `index.html:140-141`, `434-435`, `579-611`, `809-820`                                                | `Start with the AI adoption diagnostic`, `Workplace AI Operational Diagnostic`, `Use the diagnostic conversation` | Replace                    | Route to WAIA using `Explore WAIA`, `Discuss workplace AI adoption` or `See your current operating picture`.            |
| `waia/index.html:176-177`, `661-697`, `751`, `782-783`                                               | Dedicated diagnostic section and repeated diagnostic CTA                                                          | Replace                    | Fold the operating-picture conversation into WAIA onboarding. Remove the separate product identity and anchor.          |
| `workplace-ai-academy/index.html:318-408`, `706`                                                     | `Enablement diagnostic`, `Workplace AI Operational Diagnostic`, `baseline diagnostics`                            | Replace or retire page     | Align the route with `/waia/` or make it a true redirect.                                                               |
| `outside-clarity/index.html:515-546`                                                                 | `Three diagnostics`, `AI Adoption Diagnostic`, `Explore the diagnostic`                                           | Replace                    | Compare Outside Clarity with WAIA and Revenue Stress Test. Use `Three different questions` or `Which route fits?`.      |
| `src/content/insights/operational-strain-beneath-workplace-ai-adoption.md:41` and generated output   | `Workplace AI Operational Diagnostic`                                                                             | Replace                    | Link directly to WAIA with `See how WAIA supports workplace adoption`.                                                  |
| `src/content/insights/shadow-ai-workplace-ai-adoption.md:81` and generated output                    | `self-serve assessment`, `Workplace AI Operational Diagnostic`                                                    | Replace                    | Use `standalone tool` and route the reader directly to WAIA.                                                            |
| Legal bodies in `privacy/`, `data-processing-agreement/`, `waia-terms/` and `waia-ai-use-statement/` | `diagnostic logs`, `technical diagnostic information`, `diagnostic logic`                                         | Keep                       | These are technical or contractual uses, not commercial positioning.                                                    |
| Code and accessibility identifiers across core pages                                                 | `diagnostic-card`, `product-diagnostic`, `diagnostic-compare`, `#ai-adoption-diagnostic`, ARIA labels             | Review with content change | Rename user-facing ARIA labels immediately. Refactor code-only identifiers when the corresponding sections are removed. |

### Pressure-test and pressure test

All 9 matches are in three Outside Clarity surfaces.

| File                                                        | Visible text                                                                                               | Action  | Suggested replacement                                                                         |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------- |
| `index.html:620`, `624`, `648`                              | `Independent decision pressure-test`, `Decision pressure-test`, `Pressure-test the plan before commitment` | Replace | `Independent outside view`, `Decision-readiness review`, `Review the plan before commitment`. |
| `outside-clarity/index.html:71`, `141`, `144`, `451`, `545` | Meta copy, badge, hero, AI initiative example and WAIA relationship use `pressure-test`                    | Replace | `outside view`, `independent review`, `challenge the plan`, `review before action`.           |
| `outside-clarity/snapshot/index.html:143`                   | `Independent decision pressure-test`                                                                       | Replace | `Independent decision-readiness review`.                                                      |

### Audit

| File                                                                           | Visible text                                                | Action  | Suggested replacement                                         |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------- | ------- | ------------------------------------------------------------- |
| `workplace-ai/index.html:267`                                                  | `Decision quality becomes harder to audit.`                 | Replace | `Decision quality becomes harder to evidence.`                |
| `src/content/insights/hidden-cost-of-workplace-ai.md:150` and generated output | `Conduct a cross-team audit of AI use behaviours and tools` | Replace | `Conduct a cross-team review of AI use behaviours and tools`. |
| `data-processing-agreement/index.html:398-414`                                 | `Audit and information rights`, contractual audit wording   | Keep    | Legal term.                                                   |
| `privacy/index.html:389`                                                       | `audit logs`                                                | Keep    | Technical and security term.                                  |

### Assessment

| File or group                                                                     | Visible text                                            | Action              | Suggested direction                                                                                                                    |
| --------------------------------------------------------------------------------- | ------------------------------------------------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `outside-clarity/snapshot/index.html:209`                                         | `produce the assessment`                                | Replace             | `produce the review`.                                                                                                                  |
| `src/content/insights/shadow-ai-workplace-ai-adoption.md:81` and generated output | `rather than a self-serve assessment`                   | Replace             | `rather than a standalone tool`.                                                                                                       |
| `waia/index.html:332` and `workplace-ai-academy/index.html:214`, `292`, `479`     | `AI Operational Drag Assessment`                        | Review              | Keep only as a WAIA capability if it is a confirmed product label. Otherwise use `Operational Drag View` or `Operational Drag Review`. |
| `data-processing-agreement/`, `privacy/`, `waia-terms/`, `waia-ai-use-statement/` | Knowledge checks, learner responses and risk assessment | Keep                | Legal, product-data or governance terminology.                                                                                         |
| HTML class names such as `assessment-card`                                        | Code-only identifier                                    | Leave until touched | Not visible copy, but rename opportunistically if the component is refactored.                                                         |

### Maturity

| File or group                                                                                          | Visible text                                                                   | Action  | Suggested direction                                                               |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------- | --------------------------------------------------------------------------------- |
| `workplace-ai/index.html:443-488`                                                                      | `Maturity model`, `Workplace AI maturity`, maturity path                       | Replace | `Adoption path`, `From informal use to visible adoption`, `operating stages`.     |
| `waia/index.html:677`                                                                                  | `It is not a maturity quiz`                                                    | Replace | Remove with the diagnostic section, or use `It is not a standalone scorecard`.    |
| `workplace-ai-academy/index.html:374`                                                                  | `This isn't an AI maturity score`                                              | Replace | Remove with the legacy diagnostic section.                                        |
| `src/content/insights/shadow-ai-workplace-ai-adoption.md:53-77` and generated output                   | `workplace AI maturity model`, `AI maturity`                                   | Replace | `workplace AI adoption path`, `operating consistency`, `adoption discipline`.     |
| `src/content/insights/hidden-cost-of-fragmented-ai-adoption.md:137`, `199`, `217` and generated output | `operational AI maturity`, `operational maturity`, `next stage of AI maturity` | Review  | Use `operating consistency`, `operational readiness` or `next stage of adoption`. |

### Transformation

| File                                  | Visible text                                    | Action                      | Suggested replacement                      |
| ------------------------------------- | ----------------------------------------------- | --------------------------- | ------------------------------------------ |
| `waia/index.html:429`                 | `rather than a large transformation programme`  | Replace for polish          | `rather than a large change programme`.    |
| `workplace-ai-academy/index.html:663` | `doesn't need a large transformation programme` | Replace or retire with page | `doesn't need a large internal programme`. |

### Baseline

Baseline is not inherently a problem. It is part of the WAIA product and is also preferred doctrine language when framed as a current view rather than a separate assessment.

| File or group                                                                       | Visible text                                                                                                               | Action                      | Suggested direction                                                                                   |
| ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | --------------------------- | ----------------------------------------------------------------------------------------------------- |
| `waia/index.html`                                                                   | `practical AI adoption baseline`, `AI Effectiveness Baseline`, `baseline adoption signals`, `Example WAIA baseline output` | Keep with guardrail         | Keep clearly inside WAIA. Prefer `baseline view` or `current operating picture` in buyer-facing CTAs. |
| `index.html`                                                                        | `admin-led baseline diagnostic`, `AI Effectiveness Baseline`, `AI adoption baseline`                                       | Review                      | Remove `diagnostic`; keep the baseline as a WAIA capability.                                          |
| `workplace-ai/index.html`                                                           | Shared baseline and baseline visibility                                                                                    | Keep or lightly refine      | This supports the WAIA worldview and does not currently create a separate product by itself.          |
| `workplace-ai-academy/index.html`                                                   | `AI Baseline`, `See how AI Baseline works`, baseline diagnostic                                                            | Replace or retire with page | Avoid capitalising and promoting it as a separate offer. Route to WAIA.                               |
| `scripts/build-insights.mjs:394` and all five generated article related-work blocks | `WAIA helps organisations establish a baseline`                                                                            | Keep                        | Correctly frames baseline as part of WAIA.                                                            |
| `src/content/insights/hidden-cost-of-workplace-ai.md` and generated output          | AI effectiveness baseline as an operating measure                                                                          | Keep with editorial review  | The concept is relevant. Add an explicit WAIA route only where natural.                               |

### Terms not found

- `intervention`: no matches.
- `findings`: no matches.
- `Workplace AI Snapshot`: no matches.
- `AI Snapshot`: no matches.

Do not introduce these product names during the next implementation pass.

## 7. Insight article audit

### Generator alignment

`scripts/build-insights.mjs` is the source of truth for:

- the Insights index navigation
- all generated article navigation
- the related-work CTA block
- the generated footer

What is aligned:

- Related work makes `Explore WAIA` the primary CTA.
- Shadow AI overview is a useful secondary editorial route.
- Generated footers link to WAIA and Insights.

What is stale:

- The generated navigation includes `Diagnostics` and `AI Adoption Diagnostic`.
- Regeneration will continue to reproduce that drift until the generator is changed.

### Article-by-article findings

| Article                                                            | Navigation                    | Product CTA                          | Stale terminology or product name                         | Related-work block                                                  | Recommendation                                                                                                           |
| ------------------------------------------------------------------ | ----------------------------- | ------------------------------------ | --------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| The Cost of AI Is Becoming Visible                                 | Stale AI diagnostic menu item | Routes to WAIA                       | None material in body                                     | Current                                                             | Update generator navigation only.                                                                                        |
| The hidden cost of fragmented AI adoption                          | Stale AI diagnostic menu item | Manager enablement routes to WAIA    | Three maturity references                                 | Current                                                             | Replace maturity language during editorial polish.                                                                       |
| The Hidden Cost of Workplace AI                                    | Stale AI diagnostic menu item | Related section routes to WAIA       | `cross-team audit`; baseline language is otherwise useful | Current                                                             | Replace `audit` with `review`; retain baseline as a WAIA-aligned concept.                                                |
| The operational strain beneath workplace AI adoption               | Stale AI diagnostic menu item | Generated CTA routes to WAIA         | Body links to Workplace AI Operational Diagnostic         | Current, but the custom `Further exploration` labels are plain text | Replace the diagnostic paragraph with a direct WAIA link; consider making RST and WAIA in Further exploration clickable. |
| The operational reality behind workplace AI adoption and Shadow AI | Stale AI diagnostic menu item | Body and generated CTA route to WAIA | Workplace AI Operational Diagnostic and maturity model    | Current                                                             | Remove diagnostic route and recast maturity as an adoption path.                                                         |

## 8. Recommended change plan

### Priority 1: must fix now to prevent product confusion

1. Remove `AI Adoption Diagnostic` from every navigation instance and from `scripts/build-insights.mjs`.
2. Rename or simplify the `Diagnostics` navigation group so the site feels product-led. A `Tools` group containing Revenue Stress Test and Outside Clarity is the clearest current option.
3. Remove the standalone Workplace AI Operational Diagnostic card and CTAs from the homepage. Fold current-state visibility into WAIA.
4. Remove the dedicated diagnostic section and diagnostic anchor from `/waia/`. Route both primary and secondary AI adoption interest to WAIA or the WAIA enquiry form.
5. Resolve `/workplace-ai-academy/` as a true redirect or make it mirror `/waia/` exactly. Do not continue serving stale duplicate product content on the canonical host.
6. Replace the two Insight article links to Workplace AI Operational Diagnostic with direct WAIA language and links.
7. Update Outside Clarity so it compares against WAIA rather than AI Adoption Diagnostic, and replace `Three diagnostics` with product-led wording.
8. Replace Outside Clarity `pressure-test` language with `outside view`, `independent review` and `before you commit` language.

### Priority 2: should fix for polish and consistency

1. Synchronise the nine legal-page navigation blocks with the current commercial navigation.
2. Standardise the global WAIA CTA label. Use either `Ask to see WAIA` or `Book a WAIA fit call`, not both across page types.
3. Replace workplace AI `maturity model` language with an adoption path or operating stages.
4. Replace non-legal `audit` and `assessment` wording with `review`, `evidence` or `current view`.
5. Decide whether `AI Operational Drag Assessment` remains an official WAIA capability label. If it does, always present it as a WAIA component.
6. Resolve the two Outside Clarity Tally journeys. Decide whether the Snapshot page or the general enquiry is the source of truth.
7. Review whether `/outside-clarity/snapshot/` should remain indexable once the intake decision is made.
8. Reduce footer drift where product-specific lines blur Outside Clarity and WAIA.

### Priority 3: future packaging or naming considerations

1. Consider whether Revenue Stress Test should retain its name or eventually move towards `Revenue Reality Check`. Do not change it until product and route implications are agreed.
2. Keep Workplace AI Snapshot as a future concept only. Do not add a route, CTA, card or public placeholder yet.
3. Create a reusable navigation and footer source or generator so static and legal pages cannot drift independently.
4. Update `README.md`, `docs/context.md`, `docs/decisions.md` and `docs/19.2-operating-doctrine.md` after the public product changes. The current continuity documents still endorse diagnostics and maturity language that conflicts with the doctrine used for this audit.
5. Add a lightweight automated content check for prohibited public product names and stale CTA destinations.

## 9. Validation record

Commands and checks used for this audit:

- `rg --files` route and source inventory.
- `sitemap.xml` route comparison.
- Structured extraction of titles, headings, navigation, footers and CTA links from all 21 HTML routes.
- Full terminology search across public HTML, Insight markdown sources and `scripts/build-insights.mjs`.
- CTA grouping by destination and visible label.
- Navigation signature comparison across all rendered pages.
- Footer signature comparison across all rendered pages.
- Root-relative internal link existence check.
- `git diff --check` after creating this document.
- Prettier check on this document.

No public website page, generator, stylesheet, navigation, footer, sitemap, legal content or CTA was changed during this audit.
