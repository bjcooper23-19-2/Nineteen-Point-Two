# Next Steps

## Likely future improvements

- Check future positioning work against `/docs/19.2-operating-doctrine.md` before changing public copy.
- Check deployed GitHub Pages output after each push, especially `/`, `/workplace-ai/` and `/workplace-ai-academy/`.
- Check old `/insights/` routes only as redirects to WAIA Insights.
- Review the homepage periodically to make sure WAIA has appropriate flagship product weight while Outside Clarity and Revenue Review remain clear standalone routes.
- Keep the Revenue Review journey clear: the Revenue Stress Test identifies exposure, and any Gumroad improvement pack is a separate paid purchase.
- Keep `/waia/how-it-works/` aligned with the current WAIA package, pricing and implementation detail.
- Keep Outside Clarity links pointed to `https://outsideclarity.co.uk/` unless a separate decision brings any journey back onto the Nineteen Point Two site.
- If adding more pages, mirror the existing static route pattern with a folder and `index.html`.
- If adding workplace AI Insights, create them in the WAIA Marketing Site repository. Do not restore the retired Nineteen Point Two Insights generator.
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
- If the Outside Clarity product journey changes, update the standalone Outside Clarity site first and keep this site pointed to the canonical product domain.
- If a confirmed canonical Gumroad improvement-pack link is provided, add it only where the Revenue Review journey needs it.
