# Session Progress Log

## Current State

**Last Updated:** 2026-06-29
**Active Feature:** Session complete

## Status

### What's Done

- [x] Migrated to Next.js 16 + React 19 + Tailwind v4
- [x] Upgraded all dependencies (next-mdx-remote 4→6, framer-motion 11→12, tailwindcss 3→4, etc.)
- [x] Removed next-seo (replaced with native JSON-LD script tags)
- [x] Removed remark-code-title (incompatible with MDX v3, causes runtime crash)
- [x] Removed @plaiceholder/next (unnecessary with Turbopack)
- [x] Migrated tailwind.config.ts → CSS-first config in global.css
- [x] Fixed all TypeScript errors (removed @ts-ignore, any types, async-in-map anti-pattern)
- [x] Fixed MDX Img component (string→number dimension coercion, fallback defaults)
- [x] Fixed Gist SSR crash (mounted guard with useEffect)
- [x] Fixed incomplete LaTeX expression in sgd-svr.mdx

### What's In Progress

- (none)

### What's Next

- All planned features are complete — no pending work

## Blockers / Risks

- (none)

## Decisions Made

- **Removed remark-code-title**: Incompatible with MDX v3 / remark v11. The plugin crashes with "Cannot set properties of undefined (setting 'value')" because `parent` can be undefined for code nodes in math blocks.
- **Removed @plaiceholder/next**: Only added webpack externals for sharp, unnecessary with Turbopack. The base `plaiceholder` package still works for base64 generation.
- **Coerced string dimensions in Img**: MDX passes `width="768"` as string; Next.js 16 requires numbers.

## Files Modified This Session (2026-06-28 → 2026-06-29)

- `package.json` — Dependency upgrades, removed next-seo/remark-code-title/@plaiceholder/next, removed react-embed-gist, added build script
- `next.config.mjs` — Removed @plaiceholder/next wrapper
- `postcss.config.mjs` — Changed to @tailwindcss/postcss
- `tailwind.config.ts` — Deleted (v4 is CSS-first)
- `styles/global.css` — Complete rewrite with @import/@theme/@layer
- `components.json` — Removed tailwind.config reference
- `components/mdx-components.tsx` — Fixed Img dimension handling
- `components/code-block.tsx` — Added mounted guard for Gist SSR fix
- `components/canvas.tsx` — Removed @ts-ignore, proper ref typing
- `components/spotify/top-tracks.tsx` — Replaced any with Track interface
- `app/layout.tsx` — Removed next-seo, added native JSON-LD
- `app/(content)/blog/page.tsx` — Fixed async-in-map, extracted PostCard
- `app/(content)/blog/[slug]/page.tsx` — Removed next-seo, added native JSON-LD
- `app/(content)/projects/page.tsx` — Fixed async-in-map, extracted ProjectCard
- `app/api/now-playing/route.ts` — Replaced any with interfaces
- `app/api/top-tracks/route.ts` — Replaced any with interfaces
- `lib/hooks/use-postlib.ts` — Fixed types, removed @ts-ignore, static plugin imports, added rehypeCodeTitle
- `data/blog/sgd-svr.mdx` — Fixed incomplete LaTeX expression
- `lib/rehype-code-title.ts` — New custom rehype plugin for code block titles
- `styles/global.css` — Added .code-title styling, converted KaTeX @apply to pure CSS

## Evidence of Completion

- ✅ npm install — clean, no peer dep errors
- ✅ npx eslint . — no errors
- ✅ npx tsc --noEmit — no errors
- ✅ npx next build — all 19 pages generated successfully

## Notes for Next Session

- All 3 planned features are complete. The project is fully migrated and verified.
- Code block titles re-implemented: custom `rehype-code-title` plugin in `lib/rehype-code-title.ts`. Usage: ` ```js title="filename.js" ` in MDX.
- `react-embed-gist` replaced with vanilla GitHub gist script injection (iframe incompatible with GitHub's X-Frame-Options).
- KaTeX styles converted from `@apply` to pure CSS for Tailwind v4 compatibility.
- Pre-existing lint error in `code-block.tsx` (setState-in-effect) resolved via `useSyncExternalStore`.
