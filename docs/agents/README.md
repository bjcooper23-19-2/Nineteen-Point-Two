# 19.2 Agent Builder Workflows

This folder is the repo-backed source of truth for the live OpenAI Agent Builder workflows used by Nineteen Point Two.

Agent Builder is the execution layer. These documents are the strategic and operational record that should keep the live builder prompts, workflow intent and terminology aligned with the wider 19.2 positioning system.

Codex cannot inspect the live OpenAI Agent Builder UI or retrieve current builder prompts directly. Current Prompt sections are deliberately left as placeholders so the live prompt text can be pasted from Agent Builder into the repo.

## Live Agent Stack

### 19.2 Narrative Planner

Role: Strategic narrative layer.

Purpose: Shape campaign direction, category language, editorial themes and operational positioning before content is produced.

This agent should define angles, narrative tension, audience recognition points, sequencing and campaign logic. It should not produce final marketing copy unless explicitly asked.

### 19.2 Content Producer

Role: Content execution layer.

Purpose: Create operator-led content assets for Nineteen Point Two.

This agent turns strategic narrative into LinkedIn posts, article drafts, campaign assets, email copy and other content while preserving the calm, commercially grounded 19.2 voice.

### WAIA Diagnostic Interpreter

Role: Commercial diagnostic layer.

Purpose: Operational interpretation of workplace AI adoption and lead flow into Workplace AI Academy.

This agent creates recognition around Shadow AI, manager visibility gaps, workflow inconsistency and practical enablement needs. It should lead naturally into Workplace AI Academy rather than act like a standalone consulting product.

## Shared Strategic Context

Nineteen Point Two’s worldview is that workplace AI adoption is primarily an operational visibility and execution consistency problem, not a technology problem.

Core language:

- AI is not a strategy. It’s a tool.
- Shadow AI is an operational condition, not a buzzword.
- The problem is often inconsistent workplace behaviour, weak manager visibility, workflow variation, unofficial ways of working and gaps between leadership assumptions and operational reality.
- Workplace AI Academy is the practical enablement response.
- Revenue Stress Test is the broader operational assumption-versus-reality diagnostic.
- The WAIA Diagnostic Interpreter is a lead flow into Workplace AI Academy, not a standalone AI consulting product.

## Terminology Rules

- Use workplace AI consistently. Do not use the older workplace-adoption terminology.
- Use Workplace AI Academy consistently.
- Use Revenue Stress Test and RST.
- Use the correct RST sequence only.
- Use UK English.
- Do not introduce em dashes.

## Keeping Builder And Repo In Sync

When a live Agent Builder workflow changes:

1. Paste the updated builder prompt into the relevant Current Prompt section.
2. Update Workflow Structure if nodes, branching, inputs or outputs have changed.
3. Add a Change Log entry with the date, author and reason for the change.
4. Check terminology against the shared rules above.
5. Review whether the change still supports the current 19.2 operating doctrine.
6. Commit the documentation update separately from website or product code changes.

## Review Process

Before changing a live builder prompt, review:

- `/docs/19.2-operating-doctrine.md`
- `/docs/context.md`
- `/docs/decisions.md`
- this folder

Prompt changes should be checked for:

- strategic alignment with the 19.2 worldview
- consistency with workplace AI terminology
- avoidance of hype, generic AI consultancy language and engagement bait
- clear distinction between WAIA, Revenue Stress Test and content workflows
- no em dashes
- UK English

Live builder prompts should not drift away from these docs. These files should be updated whenever the live workflows materially change.
