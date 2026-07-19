# Project Instructions — AEM Portfolio

Single source of truth for humans and AI agents. Read this first, then use topic files under `docs/` or specialized agents under `.cursor/agents/`.

---

## 1. Project identity

| Item | Value |
|------|--------|
| **Project name** | AEM Portfolio |
| **Person** | Muhammad Asim |
| **GitHub org** | `devistic-asim` |
| **GitHub repo** | `aem-portfolio` |
| **Clone URL** | `https://github.com/devistic-asim/aem-portfolio.git` |
| **Default branch** | `main` |
| **AEM org** | `devistic-asim` |
| **Site slug** | `aem-portfolio` (must match repo name) |
| **Admin email** | `asim.devistic@gmail.com` |
| **Boilerplate base** | [adobe/aem-boilerplate](https://github.com/adobe/aem-boilerplate) |
| **Stack** | Edge Delivery Services (EDS), vanilla JS, CSS3, Node tooling |
| **Content language** | English |
| **Content source** | da.live + Sidekick (production); `drafts/` (local) |

### URL pattern

```
https://{branch}--{site-slug}--{org}.aem.page/   → preview
https://{branch}--{site-slug}--{org}.aem.live/   → live
```

**Target URLs:**

- Preview: https://main--aem-portfolio--devistic-asim.aem.page/
- Live: https://main--aem-portfolio--devistic-asim.aem.live/
- Local (drafts): http://localhost:3000/drafts/

---

## 2. Repository layout

```
aem-portfolio/
├── blocks/{name}/          # Block JS + CSS
├── styles/                 # Global CSS (dark theme)
├── scripts/                # aem.js (DO NOT EDIT), scripts.js, delayed.js
├── drafts/                 # Local test HTML (.plain.html)
├── docs/                   # Topic guides
├── tutorial/               # Step-by-step learning path
├── icons/ fonts/           # Static assets
├── head.html 404.html      # Global HTML fragments
├── instructions.md         # This file
├── AGENTS.md               # AI agent entry point
└── .cursor/
    ├── agents/             # Role-specific agent prompts
    └── rules/              # Cursor rules (.mdc)
```

### Blocks in this repo

`header`, `footer`, `fragment`, `columns`, `hero`, `about`, `skills`, `projects`, `contact`

### Draft content

- `drafts/index.plain.html` → http://localhost:3000/drafts/
- `drafts/portfolio.plain.html` → http://localhost:3000/drafts/portfolio
- `drafts/nav.plain.html` / `drafts/footer.plain.html` → fragments (`/drafts/nav`, `/drafts/footer` on localhost)
- Run with: `npm run dev`

---

## 3. Git workflow

```sh
git clone https://github.com/devistic-asim/aem-portfolio.git
cd aem-portfolio
npm i
npm run dev
```

### Daily commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Local server with drafts |
| `npm run lint` | ESLint + Stylelint |
| `npm run lint:fix` | Auto-fix lint issues |

### PR requirements

- Preview URL in the PR body
- Lint must pass
- Test mobile + desktop portfolio sections

---

## 4. AEM setup checklist (manual, once)

Follow [`tutorial/01-github-and-aem-setup.md`](tutorial/01-github-and-aem-setup.md):

1. Create GitHub repo `devistic-asim/aem-portfolio`
2. Install [AEM Code Sync](https://github.com/apps/aem-code-sync) on that repo
3. Sign in to [da.live](https://da.live/) with Adobe ID and connect the site
4. Install AEM Sidekick Chrome extension
5. Author `/`, `/nav`, `/footer` in da.live
6. Preview → Publish via Sidekick

Official tutorial: https://www.aem.live/developer/tutorial

---

## 5. Coding rules

- **Never modify** `scripts/aem.js`
- Vanilla ES6+ JS only; import with `.js` extensions
- Block CSS scoped under `.{blockname}`; mobile-first (600/900/1200)
- Dark theme tokens in `styles/styles.css` — reuse `--accent-color`, etc.
- Code in Git; content in da.live (or drafts for local)
- Target PageSpeed 100 on preview

---

## 6. Documentation map

| Path | Use |
|------|-----|
| `dalive/` | Manual da.live UI steps (fallback) |
| `content/` | Production HTML in Git — upload via `npm run content:push` |
| `config/helix-site.json` | Helix site config |
| `fstab.yaml` | Content mount reference |
| `docs/overview.md` | Docs index |
| `docs/file-map.md` | Every file explained |
| `docs/portfolio-blocks.md` | Authoring tables |
| `docs/mcp-and-plugins.md` | Cursor MCP / plugins |
| `tutorial/README.md` | Learning path index |

---

## 7. Portfolio content defaults

Sourced from [FlowCV profile](https://flowcv.me/devistic) and [online resume](https://flowcv.com/resume/bi3n0fepke).

- Role: Senior Software Engineer / Full-Stack .NET Developer (5+ years)
- Location: Karachi, Pakistan
- Phone: 0320-0279291
- Email: `asim.devistic@gmail.com`
- Resume CTA: https://flowcv.com/resume/bi3n0fepke
- Skills: .NET Core, C#, ASP.NET MVC, React, Blazor, Angular, SQL Server, Dapper, JS, HTML/CSS, Bootstrap, Tailwind, SharePoint, Azure DevOps, AEM/EDS, Git
- Highlight projects: Fougito, BankIslami Mobile Banking, KE New Connections Suite, Tanjim Dubai, Tristate Health, On My Way
- Social:
  - LinkedIn: https://www.linkedin.com/in/devistic-asim
  - GitHub: https://github.com/devistic-asim
  - X: https://x.com/devistic_asim
  - dev.to: https://dev.to/devistic
  - Profile: https://flowcv.me/devistic

---

## 8. Design references

- Dribbble: https://dribbble.com/shots/14125478-Developer-Personal-Portifolio-Website
- Theme: dark charcoal + cyan accent
- GitHub profile source: https://github.com/devistic-asim/devistic-asim
