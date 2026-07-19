# 01 — GitHub and AEM setup

One-time setup so code and content connect to Adobe Edge Delivery Services.

## What you need

- GitHub account: `devistic-asim`
- Adobe ID (for da.live)
- Chrome (for Sidekick)

## Steps

### 1. Create the GitHub repository

Option A — from Adobe template:

1. Open https://github.com/adobe/aem-boilerplate
2. Click **Use this template** → create `devistic-asim/aem-portfolio` (public)
3. Replace boilerplate files with this project’s code (or push this folder to that remote)

Option B — push this folder as a new repo:

```sh
cd aem-portfolio
git init
git add .
git commit -m "Initial AEM portfolio site"
git branch -M main
git remote add origin https://github.com/devistic-asim/aem-portfolio.git
git push -u origin main
```

### 2. Install AEM Code Sync

1. https://github.com/apps/aem-code-sync/installations/new
2. **Only select repositories** → `aem-portfolio`
3. Save

### 3. Connect da.live

1. Sign in at https://da.live/ with your Adobe ID
2. Open or create the site tied to `devistic-asim/aem-portfolio`
3. Confirm you can create documents

### 4. Install Sidekick

1. Install AEM Sidekick from the Chrome Web Store
2. Pin it
3. Later you will Preview/Publish from da.live documents

## Success check

After the first push with Code Sync installed, this URL should respond (may take a minute):

https://main--aem-portfolio--devistic-asim.aem.page/

## Next

[02-clone-and-local-dev.md](02-clone-and-local-dev.md)
