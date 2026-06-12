# adityaprasad.info

Personal site. Astro, static, deployed to Cloudflare Pages.

## Local development

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # production build → ./dist/
```

## Writing essays

Add a `.md` file to `src/content/essays/`:

```yaml
---
title: "Essay Title"
description: "One-line description."
date: 2025-01-15
draft: false
---

Essay body in markdown.
```

Set `draft: true` to keep it out of the published site.

## Deployment

Cloudflare Pages, auto-deploying from the `main` branch.

- **Build command**: `npm run build`
- **Output directory**: `dist`
- **Node version**: 22

## Domain setup (adityaprasad.info)

The domain is registered at Squarespace. To connect it to Cloudflare Pages:

1. **Create the Cloudflare Pages project**:
   - Go to Cloudflare dashboard → Pages → Create a project → Connect to Git
   - Select this repo, set build command `npm run build`, output dir `dist`
   - Under Environment variables, set `NODE_VERSION` to `22`

2. **Add custom domain in Cloudflare Pages**:
   - In the Pages project settings → Custom domains → Add `adityaprasad.info`
   - Cloudflare will tell you to add a CNAME record

3. **Update DNS at Squarespace** (or transfer DNS to Cloudflare):

   **Option A — Keep DNS at Squarespace:**
   - In Squarespace Domains → DNS Settings, remove existing records
   - Add a CNAME record: `@` → `adityaprasad-info.pages.dev`
   - Add a CNAME record: `www` → `adityaprasad-info.pages.dev`
   - Note: Squarespace may not support CNAME flattening for root domains. If `@` CNAME doesn't work, use Option B.

   **Option B — Transfer DNS to Cloudflare (recommended):**
   - In Cloudflare, add `adityaprasad.info` as a site (free plan)
   - Cloudflare gives you two nameservers (e.g., `ada.ns.cloudflare.com`)
   - In Squarespace Domains → Nameservers, switch to custom and enter the Cloudflare nameservers
   - Back in Cloudflare DNS, add:
     - `CNAME @ adityaprasad-info.pages.dev` (proxied)
     - `CNAME www adityaprasad-info.pages.dev` (proxied)
   - SSL/TLS → set to Full

4. Wait for DNS propagation (minutes to hours). Cloudflare handles HTTPS automatically.
