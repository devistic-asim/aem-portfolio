# 02 — Clone and local development

## Clone

```sh
git clone https://github.com/devistic-asim/aem-portfolio.git
cd aem-portfolio
npm i
```

## Run locally

```sh
npm run dev
```

This runs:

```sh
npx -y @adobe/aem-cli up --html-folder drafts --url https://main--aem-portfolio--devistic-asim.aem.page
```

Open http://localhost:3000/

## What to open first

- Home (drafts): `/` or `/portfolio`
- Edit styles: `styles/styles.css`
- Edit a block: `blocks/hero/hero.css`

## Lint before you commit

```sh
npm run lint
```

## Next

[03-project-anatomy.md](03-project-anatomy.md)
