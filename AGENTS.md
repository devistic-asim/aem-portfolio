# AGENTS.md

AI agents: read **`instructions.md`** first — it contains all AEM, Git, and docs facts for this project.

## Quick reference

| Item | Value |
|------|--------|
| Repo | `devistic-asim/aem-portfolio` |
| Site slug | `aem-portfolio` |
| Preview | https://main--aem-portfolio--devistic-asim.aem.page/ |
| Live | https://main--aem-portfolio--devistic-asim.aem.live/ |
| Local | http://localhost:3000/ |

## Setup

```sh
npm install
npm run dev
```

Fresh AEM cloud setup: follow [Developer Tutorial](https://www.aem.live/developer/tutorial) — see `instructions.md` §4 and `tutorial/01-github-and-aem-setup.md`.

## Specialized agents

| Agent | Path |
|-------|------|
| Block developer | `.cursor/agents/aem-block-developer.md` |
| Content author | `.cursor/agents/aem-content-author.md` |
| Site admin | `.cursor/agents/aem-site-admin.md` |
| Git / release | `.cursor/agents/git-release-agent.md` |
| Docs | `.cursor/agents/docs-maintainer.md` |

## Code rules (summary)

- **Stack:** Edge Delivery Services, vanilla JS/CSS, no transpiling
- **Never edit** `scripts/aem.js`
- **Blocks:** `blocks/{name}/{name}.js` + `.css`, scoped CSS, mobile-first
- **Theme:** dark portfolio tokens in `styles/styles.css`
- **Lint:** `npm run lint` before commit
- **PRs:** must include preview URL; target PageSpeed 100

Full detail: `instructions.md` and `.cursor/rules/`.

## Project structure

```
blocks/   styles/   scripts/   drafts/   docs/   tutorial/   instructions.md
```

Based on [adobe/aem-boilerplate](https://github.com/adobe/aem-boilerplate). Official docs: https://www.aem.live/docs/
