# Local development

## Prerequisites

- Node.js / npm
- Git
- Global or npx AEM CLI: `@adobe/aem-cli`

## Install and run

```sh
cd aem-portfolio
npm i
npm run dev
```

Or:

```sh
npx -y @adobe/aem-cli up --html-folder drafts --url https://main--aem-portfolio--devistic-asim.aem.page
```

Opens (or serves) http://localhost:3000/

## Drafts

Files in `drafts/`:

| File | Local path |
|------|------------|
| `index.plain.html` | `/` or `/index` |
| `portfolio.plain.html` | `/portfolio` |
| `nav.plain.html` | `/nav` (header fragment) |
| `footer.plain.html` | `/footer` |

Edit HTML, CSS, or JS and refresh — changes are immediate.

## Lint

```sh
npm run lint
npm run lint:fix
```

## Notes

- If the remote preview URL is not ready yet, drafts-only mode still works for block/style work.
- Header/footer need `/nav` and `/footer` fragments (provided in `drafts/`).
