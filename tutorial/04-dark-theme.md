# 04 — Dark theme

Design tokens live in `styles/styles.css` under `:root`.

## Key tokens

| Token | Role |
|-------|------|
| `--background-color` | Page background (#0d1117) |
| `--surface-color` | Cards / alternate sections |
| `--accent-color` | Cyan CTAs and highlights (#00d4aa) |
| `--text-color` / `--text-muted` | Body text |
| `--nav-height` | Fixed header height |

## Section helpers

Add classes on a section (drafts) or via Section Metadata (da.live):

- `surface` — alternate background
- `pixel-divider` — geometric accent line
- `accent-border` — cyan top border

## Fonts

Self-hosted Roboto in `fonts/` + `styles/fonts.css` (loaded after LCP).

## Buttons

- Primary: filled accent
- Secondary / accent: outline cyan (used for “Download Resume”, “View Project”)

## Next

[05-hero-block.md](05-hero-block.md)
