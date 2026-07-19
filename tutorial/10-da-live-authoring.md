# 10 — da.live authoring

## Create the home page

1. In da.live, create the root document
2. Add block tables for hero, about, skills, projects, contact (see `docs/portfolio-blocks.md`)
3. Separate sections with horizontal rules
4. Add Metadata: `nav=/nav`, `footer=/footer`, `theme=dark`

## Create fragments

1. Document at path `/nav` — brand + link list
2. Document at path `/footer` — copyright

## Preview

Use Sidekick **Preview**, then open the `.aem.page` URL.

## Content vs code

| Change type | Where |
|-------------|-------|
| New project card text | da.live only |
| New block layout/CSS | Git → Code Sync |
| Fix typo in bio | da.live only |

## Next

[11-sidekick-workflow.md](11-sidekick-workflow.md)
