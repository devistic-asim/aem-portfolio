# File map — aem-portfolio

Describes every important file and folder in this repository.

## Root

| Path | Purpose |
|------|---------|
| `head.html` | Injected into every page head (CSP, viewport, scripts, styles) |
| `404.html` | Custom not-found page |
| `favicon.ico` | Browser tab icon |
| `package.json` | npm scripts and lint dependencies |
| `package-lock.json` | Locked dependency versions (after `npm i`) |
| `README.md` | Project intro and quick start |
| `instructions.md` | Master project guide for humans and AI |
| `AGENTS.md` | AI agent entry point |
| `LICENSE` | Apache 2.0 |
| `CONTRIBUTING.md` | Contribution notes |
| `CODE_OF_CONDUCT.md` | Community standards |
| `.editorconfig` | Editor indentation defaults |
| `.eslintrc.js` | JavaScript lint rules (Airbnb base) |
| `.eslintignore` | Paths ESLint skips |
| `.stylelintrc.json` | CSS lint rules |
| `.hlxignore` | Files excluded from AEM delivery |
| `.gitignore` | Git ignore rules |
| `.renovaterc.json` | Dependency update config (if present) |

## `blocks/`

One folder per block. Each block has `{name}.js` (decorate) and `{name}.css` (scoped styles).

| Path | Purpose |
|------|---------|
| `blocks/header/` | Fixed navigation; loads `/nav` fragment |
| `blocks/footer/` | Site footer; loads `/footer` fragment |
| `blocks/fragment/` | Reusable fragment loader (`loadFragment`) |
| `blocks/columns/` | Multi-column layout helper |
| `blocks/hero/` | Hero: role, name, intro, CTA, illustration |
| `blocks/about/` | Profile photo, name, socials, bio |
| `blocks/skills/` | Skill icon/name grid |
| `blocks/projects/` | Project cards (Laboratory) |
| `blocks/contact/` | Contact links grid |

## `scripts/`

| Path | Purpose |
|------|---------|
| `scripts/aem.js` | EDS runtime — **do not edit** |
| `scripts/scripts.js` | Project entry: decorate, load eager/lazy/delayed |
| `scripts/delayed.js` | Deferred work (3s after load) |

## `styles/`

| Path | Purpose |
|------|---------|
| `styles/styles.css` | Global dark theme, buttons, sections |
| `styles/fonts.css` | `@font-face` for Roboto (loaded lazily) |
| `styles/lazy-styles.css` | Post-LCP styles (tables, tech tags) |

## `drafts/`

Local HTML for development (`npm run dev` / `aem up --html-folder drafts`).

| Path | Purpose |
|------|---------|
| `drafts/index.plain.html` | Home page content (local) |
| `drafts/portfolio.plain.html` | Same portfolio content at `/portfolio` |
| `drafts/nav.plain.html` | Nav fragment for header |
| `drafts/footer.plain.html` | Footer fragment |

## `dalive/`

Copy-paste content for https://da.live/ (not served as site code).

| Path | Purpose |
|------|---------|
| `dalive/README.txt` | How to paste into da.live |
| `dalive/home.txt` | Full home page content |
| `dalive/nav.txt` | Nav fragment (`/nav`) |
| `dalive/footer.txt` | Footer fragment (`/footer`) |
| `dalive/blocks/*.txt` | One file per block (optional) |

## `docs/` and `tutorial/`

| Path | Purpose |
|------|---------|
| `docs/*.md` | One-topic reference guides |
| `tutorial/*.md` | Numbered step-by-step learning path |

## Assets

| Path | Purpose |
|------|---------|
| `fonts/*.woff2` | Self-hosted Roboto fonts |
| `icons/` | SVG icons (e.g. search) |
| `icons/skills/` | Optional skill icon assets |

## `.github/`

| Path | Purpose |
|------|---------|
| `.github/workflows/main.yaml` | CI: install + lint on push |
| `.github/pull_request_template.md` | PR checklist + preview URL |

## `.cursor/`

| Path | Purpose |
|------|---------|
| `.cursor/agents/*.md` | Role-specific AI agent prompts |
| `.cursor/rules/*.mdc` | Cursor rules (always-apply / scoped) |
