# Session Progress Log

## Current State

**Last Updated:** 2026-06-28
**Active Feature:** feat-002 — Runtime Error Fixes (completed)

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

1. Add `build` script to package.json (`"build": "next build"`) for convenience
2. Consider re-implementing code block titles (remark-code-title was removed)
3. Verify cursor-pencil custom utilities work with Tailwind v4

## Blockers / Risks

- (none)

## Decisions Made

- **Removed remark-code-title**: Incompatible with MDX v3 / remark v11. The plugin crashes with "Cannot set properties of undefined (setting 'value')" because `parent` can be undefined for code nodes in math blocks.
- **Removed @plaiceholder/next**: Only added webpack externals for sharp, unnecessary with Turbopack. The base `plaiceholder` package still works for base64 generation.
- **Coerced string dimensions in Img**: MDX passes `width="768"` as string; Next.js 16 requires numbers.

## Files Modified This Session

- `package.json` — Dependency upgrades, removed next-seo/remark-code-title/@plaiceholder/next
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
- `lib/hooks/use-postlib.ts` — Fixed types, removed @ts-ignore, static plugin imports
- `data/blog/sgd-svr.mdx` — Fixed incomplete LaTeX expression

## Evidence of Completion

- ✅ npm install — clean, no peer dep errors
- ✅ npx eslint . — no errors
- ✅ npx tsc --noEmit — no errors
- ✅ npx next build — all 19 pages generated successfully

## Notes for Next Session

- The `init.sh` script only runs `npm install`. Consider adding lint/typecheck/build to it.
- The `prev` script runs `next build && next start` — port 3000 may be in use from previous runs.
- `remark-code-title` was removed — if code block titles are needed, implement a custom rehype plugin.
