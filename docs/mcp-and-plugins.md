# MCP servers and Cursor plugins

Tools that help you build and maintain this AEM portfolio in Cursor.

## Recommended MCP servers

### context7

Fetches up-to-date library and framework docs (useful for AEM EDS patterns, CSS, JS APIs).

- Use when asking about Edge Delivery Services, block decoration, or web platform APIs
- Prefer over guessing from outdated training data

### GitKraken / GitLens MCP

Git status, commits, branches, and PRs from the editor.

- Use for reviewing diffs before push
- Helps keep preview URLs and PR descriptions accurate

## Recommended Cursor setup

| Item | Why |
|------|-----|
| Project rules in `.cursor/rules/` | Keeps AI on EDS conventions |
| Agents in `.cursor/agents/` | Role-specialized helpers |
| `instructions.md` + `AGENTS.md` | Single source of truth |
| AEM Sidekick (Chrome) | Preview/publish content (outside Cursor) |

## Skills (optional)

If you use Compound Engineering skills:

- `ce-work` — execute implementation plans
- `ce-debug` — diagnose runtime issues

## What not to add

- Heavy React/Vue app frameworks inside blocks (breaks PageSpeed targets)
- Bundlers/transpilers for block JS (EDS serves files as-is)
- Secrets in the repo (`.env`, tokens) — never commit them
