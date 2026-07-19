# Environments

| Environment | URL |
|-------------|-----|
| Local | http://localhost:3000/ |
| Preview | https://main--aem-portfolio--devistic-asim.aem.page/ |
| Live | https://main--aem-portfolio--devistic-asim.aem.live/ |

## URL pattern

```
https://{branch}--{repo}--{owner}.aem.page/   → preview
https://{branch}--{repo}--{owner}.aem.live/   → production
```

For this project:

- `{owner}` = `devistic-asim`
- `{repo}` = `aem-portfolio`

## What lives where

| Concern | Where |
|---------|-------|
| Code (blocks, CSS, JS) | GitHub → Code Sync → page/live |
| Content (copy, images) | da.live → Sidekick preview/publish |
| Local overrides | `drafts/*.plain.html` via `aem up --html-folder drafts` |

## Custom domain (optional, later)

Map DNS after the site is live. See Adobe launch docs: https://www.aem.live/docs/
