# 12 — Cursor AI setup

This repo is wired for Cursor agents and rules.

## Read first

1. `instructions.md` — project facts and workflows
2. `AGENTS.md` — which agent to use
3. `docs/file-map.md` — where files live

## Agents (`.cursor/agents/`)

| Agent | Use for |
|-------|---------|
| `aem-block-developer` | Blocks, CSS, scripts |
| `aem-content-author` | da.live tables, drafts content |
| `aem-site-admin` | Code Sync, environments |
| `git-release-agent` | Commits and PRs |
| `docs-maintainer` | docs/ and tutorial/ updates |

## Rules (`.cursor/rules/`)

| Rule | Scope |
|------|-------|
| `project-core.mdc` | Always on |
| `aem-blocks.mdc` | Block JS |
| `aem-block-styles.mdc` | Block CSS |
| `aem-global-styles.mdc` | Global CSS |
| `aem-scripts.mdc` | scripts.js |
| `git-and-pr.mdc` | Git / PRs |

## MCP

See `docs/mcp-and-plugins.md` for context7 and Git MCP usage.

## Good prompts

- “Add a new skill row to the skills block and drafts”
- “Update hero CTA to link to my resume PDF”
- “Fix mobile nav styles in header.css”

Always ask the agent to run `npm run lint` before finishing code changes.
