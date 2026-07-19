# 13 — Content upload from Git

Edit files in `content/`, push to da.live with one command.

## Setup (once)

```sh
cp .env.example .env
```

Add tokens (see [docs/content-workflow.md](../docs/content-workflow.md)):

- `AEM_IMS_TOKEN` — from da.live DevTools
- `HLX_AUTH_TOKEN` — from https://tools.aem.live/

## Daily workflow

1. Edit `content/index.html`, `nav.html`, or `footer.html`
2. Run:

```sh
npm run content:push
```

3. Open preview: https://main--aem-portfolio--devistic-asim.aem.page/
4. When happy:

```sh
npm run content:live
```

## What each command does

| Command | Action |
|---------|--------|
| `content:upload` | PUT files to `admin.da.live` |
| `content:preview` | Refresh `*.aem.page` |
| `content:publish` | Publish to `*.aem.live` |
| `content:push` | upload + preview |
| `content:live` | upload + preview + publish |

## Local dev (no tokens)

```sh
npm run dev
```

http://localhost:3000/drafts/

## Do not

- Paste `content/*.html` into the da.live editor
- Commit `.env` (secrets)
