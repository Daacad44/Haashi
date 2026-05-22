# HashiTech Portfolio (Next.js Clone)

Modern rebuild of [hashitech.great-site.net](https://hashitech.great-site.net/) — migrated from WordPress to **Next.js 16 + TypeScript + Tailwind CSS**.

## Why this stack is faster & more modern

| WordPress | Next.js + TypeScript |
|-----------|----------------------|
| PHP + database on every page load | Static/SSR pages — minimal server work |
| Heavy plugins & themes | Lean React components only |
| No built-in image optimization | Automatic WebP/AVIF & lazy loading |
| Slower Time to Interactive | Code splitting & prefetching |
| Manual caching setup | Edge-ready on Vercel/CDN |

**TypeScript** catches bugs before deploy. **React** gives reusable UI. **Tailwind** keeps styles consistent without bloated CSS files.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm start
```

## Customize

- Content: `src/lib/data.ts`
- Colors & fonts: `src/app/globals.css`, `src/app/layout.tsx`
- Add real project images in `public/` and update `Projects.tsx`

## Deploy on Vercel

This app is a standard **Next.js** project — Vercel runs `npm run build` and serves it on the edge CDN (same idea as the original WordPress host, but faster).

### Option A — GitHub (recommended)

1. Sign in at [vercel.com](https://vercel.com) with GitHub.
2. **Add New Project** → import [Daacad44/Haashi](https://github.com/Daacad44/Haashi).
3. Leave defaults: **Framework** Next.js, **Build Command** `npm run build`, **Output** automatic.
4. Click **Deploy**. Every push to `main` redeploys.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
vercel --prod
```

No environment variables are required for this static portfolio.

### Local scrape scripts (optional)

Scraping uses Playwright and is **not** installed for production builds. To re-scrape the WordPress site locally:

```bash
npm install -D playwright
npx playwright install chromium
npm run scrape
```

### Other hosts

Any Node host that runs `npm run build` and `npm start` works the same way.
