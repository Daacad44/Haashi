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

## Deploy

Deploy to [Vercel](https://vercel.com) (recommended for Next.js) or any Node host that supports `next start`.
