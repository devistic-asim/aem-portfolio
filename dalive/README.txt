STOP — use content/ folder + npm scripts instead
=================================================

RECOMMENDED (edit files, upload automatically):

  1. Edit:  content/index.html  content/nav.html  content/footer.html
  2. Setup: cp .env.example .env  (add tokens — see docs/content-workflow.md)
  3. Run:   npm run content:push   (upload + preview)
  4. Live:  npm run content:live   (upload + preview + publish)

MANUAL FALLBACK (if no tokens):

  STEPS-nav.txt      → build /nav in da.live UI
  STEPS-footer.txt   → build /footer
  STEPS-home.txt     → build home page

Do NOT paste .html files into da.live editor.

Local preview: http://localhost:3000/drafts/
