# Sections and markup

## Sections

Top-level `<div>` children of `<main>` become `.section` elements.

Section metadata classes used in this project:

| Class | Effect |
|-------|--------|
| `surface` | Slightly lighter background (`--surface-color`) |
| `dark` | Darker background |
| `accent-border` | Cyan top border |
| `pixel-divider` | Geometric accent line above content |
| `light` / `highlight` | Alternate background (boilerplate) |

In da.live, set section styles via a Section Metadata table. In local drafts, put classes on the section `<div>`.

## Blocks inside sections

After decoration:

```
main
  div.section.hero-container
    div.hero-wrapper
      div.hero.block
```

## Buttons

In content, wrap a link in **bold** for primary, *italic* for secondary, or both for accent. `decorateButtons()` in `scripts/scripts.js` converts them.

## Anchors

Use ids on sections (`#about`, `#skills`, `#projects`, `#contact`) so the nav can scroll to them.

## Official docs

https://www.aem.live/developer/markup-sections-blocks
