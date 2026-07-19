# 00 — Manual checklist (you must do these)

Code is ready in this repo. Adobe + GitHub wiring needs your accounts.

## Checklist

1. [ ] Create GitHub repo `devistic-asim/aem-portfolio` (empty or from boilerplate)
2. [ ] Push this project: `git push -u origin main`
3. [ ] Install [AEM Code Sync](https://github.com/apps/aem-code-sync) on that repo only
4. [ ] Wait for preview: https://main--aem-portfolio--devistic-asim.aem.page/
5. [ ] Sign in to [da.live](https://da.live/) with your Adobe ID
6. [ ] Connect/create the site for `aem-portfolio`
7. [ ] Install [AEM Sidekick](https://chromewebstore.google.com) (search “AEM Sidekick”) and pin it
8. [ ] Copy `.env.example` → `.env`, add tokens (see `docs/content-workflow.md`)
9. [ ] Run `npm run content:push` to upload `content/` and preview
10. [ ] Run `npm run content:live` to publish

**Or manual fallback:** `dalive/STEPS-*.txt` in da.live UI.

**Note:** Git push updates **code** (blocks/theme). Page **copy** is in `content/` → uploaded to da.live via script.

## Local (already works)

```sh
npm i
npm run dev
```

Open http://localhost:3000/drafts/

## Full steps

See [01-github-and-aem-setup.md](01-github-and-aem-setup.md) and the [official tutorial](https://www.aem.live/developer/tutorial).
