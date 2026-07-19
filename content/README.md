# content/ — production page files (Git source of truth)

Edit HTML here, then push to da.live with:

```sh
npm run content:push    # upload + preview
npm run content:live    # upload + preview + publish
```

| File | AEM path |
|------|----------|
| `index.html` | `/` (home) |
| `nav.html` | `/nav` |
| `footer.html` | `/footer` |

**Do not** paste these into the da.live editor. Use the upload script instead.

Local styled preview (uses `drafts/`): `npm run dev` → http://localhost:3000/drafts/

See [docs/content-workflow.md](../docs/content-workflow.md).
