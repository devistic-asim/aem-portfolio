# 03 — Project anatomy

## Folders that matter

```
blocks/     → UI components (JS + CSS per block)
styles/     → Global theme
scripts/    → Runtime (aem.js) + project entry (scripts.js)
drafts/     → Local HTML content
docs/       → Reference guides
tutorial/   → This learning path
```

## Critical files

| File | Rule |
|------|------|
| `scripts/aem.js` | Never edit — Adobe runtime |
| `scripts/scripts.js` | Project load pipeline |
| `head.html` | Global head tags |
| `styles/styles.css` | Design tokens and base styles |

## How a page loads

1. `loadEager` — decorate main, first section (LCP)
2. `loadLazy` — header, remaining sections, footer, fonts
3. `loadDelayed` — deferred work after 3 seconds

## Block naming

Folder `blocks/hero/` → class `hero` on the block div → loads `hero.js` + `hero.css`.

## Next

[04-dark-theme.md](04-dark-theme.md)
