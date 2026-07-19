# da.live authoring

Production content for this portfolio is authored in [da.live](https://da.live/) with your Adobe ID.

## First-time connection

1. Sign in at https://da.live/ with your Adobe ID
2. Connect or open the `aem-portfolio` site linked to `devistic-asim/aem-portfolio`
3. Create documents for `/` (home), `/nav`, and `/footer`

## Home page structure

1. H1 = page title (e.g. Muhammad Asim)
2. Horizontal rules between sections
3. Each section = one block table (first cell/row = block name)
4. Metadata table at the bottom or top:

| Metadata | |
|----------|--|
| template | portfolio |
| theme | dark |
| nav | /nav |
| footer | /footer |

## Fragments

### `/nav`

- Brand link: `< Muhammad Asim >` → `/`
- List: About → `#about`, Skills → `#skills`, Projects → `#projects`, Contact → `#contact`

### `/footer`

- Copyright line of text

## Block tables

See [portfolio-blocks.md](portfolio-blocks.md) for exact column layouts.

## Local mirror

While learning, use `drafts/index.plain.html` — same content structure without da.live.
