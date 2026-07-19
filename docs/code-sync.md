# AEM Code Sync

Code Sync pushes GitHub commits to the Adobe code bus so preview and live sites update.

## Install

1. Open https://github.com/apps/aem-code-sync/installations/new
2. Choose **Only select repositories**
3. Select `devistic-asim/aem-portfolio`
4. Save

## After install

Push to `main` (or any branch). Within a short time:

- Preview: `https://{branch}--aem-portfolio--devistic-asim.aem.page/`
- Live (after publish): `https://{branch}--aem-portfolio--devistic-asim.aem.live/`

## Tips

- Repo name should match the site slug (`aem-portfolio`)
- Keep the repo public for the simplest setup
- If using GitHub Enterprise IP filtering, allow `3.227.118.73`

## Related

- [environments.md](environments.md)
- Tutorial: [01-github-and-aem-setup.md](../tutorial/01-github-and-aem-setup.md)
