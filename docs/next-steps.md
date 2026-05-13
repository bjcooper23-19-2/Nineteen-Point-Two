# Next Steps

## Likely future improvements

- Check future positioning work against `/docs/19.2-operating-doctrine.md` before changing public copy.
- Check deployed GitHub Pages output after each push, especially `/`, `/workplace-ai/` and `/workplace-ai-academy/`.
- Check `/insights/` and individual insight routes after publishing new articles.
- Review the homepage periodically to make sure Workplace AI remains a second application of the operating risk lens, not the main brand story.
- Keep the Revenue Integrity Stress Test journey clear, including what happens after the diagnostic.
- If adding more pages, mirror the existing static route pattern with a folder and `index.html`.
- If adding Insights articles, update markdown under `src/content/insights/`, run `node scripts/build-insights.mjs`, and commit generated static HTML.
- If adding assets, preserve existing relative path conventions and check nested route paths carefully.

## Quality checks before commit

- Confirm no application or site code was changed when only docs were requested.
- Run `git diff --check`.
- Check for em dashes and en dashes in changed text.
- Check that any HTML links still point to existing routes or intentional external URLs.
- Review mobile spacing if HTML or CSS changes are made.

## Deployment checks

- Confirm `CNAME` still points to `www.nineteenpointtwo.com`.
- Confirm canonical URLs and redirect snippets remain consistent with the live domain.
- Confirm root and nested route asset paths still resolve.
- Confirm no generated output folder is expected before assuming a build step exists.

## Open follow ups

- If a future build system is introduced, document the build and deploy commands here.
- If GitHub Pages settings change from root deployment, document the source branch and directory here.
- If a contact form replaces mailto CTAs, document the route and required handling.
