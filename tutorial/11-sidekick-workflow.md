# 11 — Sidekick workflow

## Preview

1. Open the da.live document
2. Click Sidekick **Preview**
3. Review on phone and desktop widths
4. Fix content or code as needed

## Publish

1. When preview looks good, click **Publish**
2. Confirm on `https://main--aem-portfolio--devistic-asim.aem.live/`

## Code releases

1. Branch → PR with preview URL
2. `npm run lint`
3. Merge to `main`
4. Code Sync updates the site code
5. Re-preview content if markup expectations changed

## Unpublish / fix mistakes

Re-edit in da.live → Preview → Publish again. Content updates are fast; no full redeploy.

## Next

[12-cursor-ai-setup.md](12-cursor-ai-setup.md)
