# Codex Instructions

## Before making changes

Read these files first:

- `/docs/19.2-operating-doctrine.md`
- `/docs/context.md`
- `/docs/decisions.md`
- `/docs/next-steps.md`
- `/docs/codex-instructions.md`

Then confirm:

- repository remote
- current branch
- git status
- files likely to change

## Editing rules

- Do not change site code when the request is documentation only.
- Do not alter `index.html`, CSS, assets or page content unless the user explicitly asks.
- Keep edits targeted.
- Use UK English.
- Do not use em dashes or en dashes.
- Preserve the premium editorial feel.
- Do not invent features, services, routes, forms, integrations or deployment steps.
- Base decisions only on visible repo structure, copy and files unless the user provides extra context.

## Brand and copy rules

Nineteen Point Two helps leaders make hidden operating risk visible across people, process and data.

Revenue integrity is the lead homepage proposition. Workplace AI readiness is a second application of the same operating risk lens.

Use `/docs/19.2-operating-doctrine.md` as the canonical strategic positioning source. If a request conflicts with the doctrine, flag the conflict before making positioning changes.

Use calm, commercially grounded, operator led copy. Avoid hype, generic future of work language, exaggerated AI claims and broad small business consultancy positioning.

Keep CTAs consultative. The sign in link for Workplace AI Academy is access for existing users, not a primary sales CTA.

## Technical cautions

- This is a static site with root and nested `index.html` routes.
- Be careful with asset paths on nested pages.
- Be careful with canonical URLs and the `www.nineteenpointtwo.com` domain.
- Do not remove or change `CNAME` unless explicitly requested.
- Mobile layout can be fragile because each page carries its own CSS.
- Navigation is duplicated across pages, so update all active pages consistently when navigation changes are requested.

## Verification

For documentation only changes:

- Run `git diff --check`.
- Check changed docs for em dashes and en dashes.
- Confirm no site files changed.

For site changes:

- Run `git diff --check`.
- Run any available formatter or lint check.
- Check desktop and mobile layouts locally.
- Confirm internal routes and external links still work.
- Confirm no placeholder copy remains.
