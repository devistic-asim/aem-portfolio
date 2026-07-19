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

Serves http://localhost:3000/

**Open the portfolio draft at:** http://localhost:3000/drafts/

(Root `/` proxies the remote preview until da.live content exists.)

## Drafts

Files in `drafts/` are served under `/drafts/`:

| File | Local path |
|------|------------|
| `index.plain.html` | `/drafts/` or `/drafts/index` |
| `portfolio.plain.html` | `/drafts/portfolio` |
| `nav.plain.html` | `/drafts/nav` (header uses this on localhost) |
| `footer.plain.html` | `/drafts/footer` |

Edit HTML, CSS, or JS and refresh — changes are immediate.

## Lint

```sh
npm run lint
npm run lint:fix
```

## Notes

- If the remote preview URL is not ready yet, drafts-only mode still works for block/style work.
- Header/footer need `/nav` and `/footer` fragments (provided in `drafts/`).
