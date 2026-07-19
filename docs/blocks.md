# Blocks

Blocks are the building units of an AEM Edge Delivery page. Each block is a folder under `blocks/` with:

- `{name}.js` — exports `export default async function decorate(block)`
- `{name}.css` — styles scoped under `.{name}`

## Lifecycle

1. Content authors create a table; first row = block name
2. Pipeline turns the table into nested `<div>` markup
3. `decorateBlocks()` sets `data-block-name` and wrapper classes
4. `loadBlock()` imports JS/CSS and calls `decorate(block)`

## Rules

- Vanilla ES6+ only — no build step, no bundler
- Use `.js` extensions in imports
- Never edit `scripts/aem.js`
- Scope CSS to `.{blockname}` (and children)
- Mobile-first; breakpoints at 600 / 900 / 1200px
- Handle missing cells gracefully

## Portfolio blocks

See [portfolio-blocks.md](portfolio-blocks.md) for authoring tables.

| Block | Role |
|-------|------|
| `hero` | Landing intro + CTA |
| `about` | Profile + bio |
| `skills` | Tech grid |
| `projects` | Project cards |
| `contact` | Contact links |
| `header` / `footer` | Fragments |
| `fragment` / `columns` | Utilities |

## Official docs

https://www.aem.live/developer/block-collection
