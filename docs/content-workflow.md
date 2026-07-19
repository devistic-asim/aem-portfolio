# Content workflow — Git files + da.live upload

Two ways to manage production content. **Recommended: edit `content/` in Git and run the upload script.**

## Architecture

```
content/*.html  (Git)  ──npm run content:push──►  da.live  ──preview/publish──►  *.aem.page / *.aem.live
blocks/, styles/ (Git) ──git push / Code Sync──►  AEM code bus ─────────────────►  same URLs (theme + blocks)
drafts/*.plain.html    ──npm run dev──────────►  localhost:3000/drafts/  (local only)
```

AEM does **not** serve `content/` from Git automatically. The upload script pushes files to `content.da.live`, then preview/publish makes them visible.

## 1. Edit content in Git

| File | Site path |
|------|-----------|
| `content/index.html` | `/` |
| `content/nav.html` | `/nav` |
| `content/footer.html` | `/footer` |

Tables only — first row = block name (`hero`, `about`, …). No `========` notes, no full `<html>` wrapper.

## 2. One-time token setup

```sh
cp .env.example .env
```

### AEM_IMS_TOKEN (upload)

1. Sign in at https://da.live/
2. Open DevTools → Network
3. Click any request to `admin.da.live`
4. Copy the `Authorization: Bearer …` token (without the word Bearer)
5. Paste into `.env` as `AEM_IMS_TOKEN=…`

Tokens expire — refresh when upload returns 401.

### HLX_AUTH_TOKEN (preview / publish)

1. Open https://tools.aem.live/
2. Site Admin → API keys → create key
3. Paste into `.env` as `HLX_AUTH_TOKEN=…`

## 3. Commands

```sh
npm run content:upload    # push content/*.html to da.live
npm run content:preview   # refresh *.aem.page
npm run content:publish   # publish to *.aem.live
npm run content:push      # upload + preview  ← usual workflow
npm run content:live      # upload + preview + publish
```

Single file:

```sh
node scripts/content-push.mjs upload nav.html
```

## 4. fstab / Config Service

| File | Purpose |
|------|---------|
| `fstab.yaml` | Documents content bus URL (`content.da.live`) |
| `config/helix-site.json` | Helix 5 site config template |

Apply site config once (if site not registered):

```sh
curl -X PUT "https://admin.hlx.page/config/devistic-asim/sites/aem-portfolio.json" \
  -H "content-type: application/json" \
  -H "x-auth-token: YOUR_HLX_AUTH_TOKEN" \
  --data @config/helix-site.json
```

## 5. Manual da.live (fallback)

If you prefer the UI: `dalive/STEPS-*.txt` — build tables by hand. **Do not paste HTML source.**

## URLs

- Preview: https://main--aem-portfolio--devistic-asim.aem.page/
- Live: https://main--aem-portfolio--devistic-asim.aem.live/
- Local: http://localhost:3000/drafts/

## References

- [DA Source API](https://docs.da.live/developers/api/source)
- [AEM Admin API](https://www.aem.live/docs/admin.html)
- [Config Service](https://www.aem.live/docs/config-service-setup)
