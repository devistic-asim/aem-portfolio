# Metadata

Page metadata controls SEO, social cards, and which fragments load.

## Common keys

| Key | Example | Purpose |
|-----|---------|---------|
| `title` | Muhammad Asim \| Portfolio | Browser / OG title |
| `description` | Full-Stack .NET Developer… | Meta description |
| `template` | portfolio | Body class via decorateTemplateAndTheme |
| `theme` | dark | Body class |
| `nav` | /nav | Header fragment path |
| `footer` | /footer | Footer fragment path |
| `image` | /path/to/og.png | Social share image |

## How to set

In da.live: add a Metadata table on the page, or use a bulk metadata spreadsheet for many pages.

## This project

`scripts/scripts.js` also adds `theme-portfolio` on `<body>` for global dark-theme scoping.
