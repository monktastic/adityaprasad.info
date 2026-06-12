# Site Brief — adityaprasad.info

## Concept

Personal website for Aditya Prasad. Black background, contemplative aesthetic with gravitas and depth — a serious essayist's personal brand, not a developer blog. Restrained "trippy" visual elements (subtle gradients, atmospheric imagery, slow ambient motion) that signal an interest in consciousness and contemplative practice without reading as "woo." The design should appeal to analytical readers as much as spiritual ones.

## Typography

- **Body**: Cormorant Garamond (serif) — for essays and prose
- **UI / Navigation**: Inter (sans-serif) — for nav, dates, labels
- **Wordmark/Headings**: Cormorant Garamond at heavy weight with gradient treatment
- Generous whitespace, narrow reading column (~65ch) for essays

## Structure

- **Homepage**: Introduces Aditya Prasad — interests in contemplative practice, philosophy, mathematics. Shows recent essays.
- **Essays**: Index page listing all published essays. Individual essay pages with clean reading layout.
- **About**: Background and approach.
- **Contact**: Email and an invitation for correspondence.

## Content

Essays live in `src/content/essays/` as `.md` files with frontmatter:

```yaml
---
title: "Essay Title"
description: "A one-line description for listings and meta tags."
date: 2025-01-15
updated: 2025-02-01  # optional
draft: true          # set to true to exclude from build
---
```

Drafts (`draft: true`) are excluded from all listings and pages.

## Stack

- **Framework**: Astro (static output, no heavy JavaScript)
- **Deploy target**: Cloudflare Pages (from GitHub repo)
- **Domain**: adityaprasad.info (registered at Squarespace, DNS to be pointed at Cloudflare)
- **Workflow**: Edit markdown in GitHub's web editor → auto-deploy via Cloudflare Pages

## Design Details

- Dark background (`#0a0a0a`) with subtle warm radial gradients
- Ambient floating orb element (60s drift animation, respects `prefers-reduced-motion`)
- Gold accent color (`#c9a87c`) used sparingly for links and the hero gradient
- No tracking, no analytics, no newsletter. Just writing.
