# HashiTech Portfolio (Vite + React)

Modern rebuild of [hashitech.great-site.net](https://hashitech.great-site.net/) — **Vite 6**, **React 19**, **TypeScript**, **React Router**, and **Tailwind CSS 4**.

## Why Vite

| | Vite |
|---|------|
| Dev server | Instant HMR, no full-app rebuild |
| Production | Rollup bundle — small, fast static `dist/` |
| Deploy | Works on Vercel, Netlify, GitHub Pages, any static host |

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

Output is in `dist/`.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home bento grid |
| `/about` | About, stats, testimonials |
| `/services` | Service cards |
| `/service-details` | Webflow service detail & pricing |
| `/works` | Project grid |
| `/contact` | Contact form & map |

## Customize

- Content: `src/lib/data.ts`
- Styles: `src/styles/hashitech.css`, `src/globals.css`
- Routes: `src/App.tsx`

## Deploy on Vercel

1. Import [Daacad44/Haashi](https://github.com/Daacad44/Haashi) on [vercel.com](https://vercel.com).
2. Framework preset: **Vite** (or Other — `npm run build`, output `dist`).
3. Deploy. SPA rewrites are in `vercel.json`.

## Local scrape scripts (optional)

```bash
npm install -D playwright
npx playwright install chromium
npm run scrape
```
