# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # start Next.js dev server (localhost:3000)
pnpm build      # production build
pnpm lint       # ESLint
```

This project uses `pnpm`. There are no tests.

## Architecture

Single-page marketing site for Manor View Care Home, built with Next.js 15 App Router. The entire site is one route: `app/page.tsx` composed of four section components rendered top-to-bottom.

**Page structure (`app/page.tsx`):**
1. `<Hero>` — full-bleed hero with nav, headline, and CTAs
2. `<AwardMarquee>` — infinite-scrolling award strip
3. `<Locations>` — three care home listing cards
4. `<Testimonials>` — three resident/family quote cards
5. Inline `<footer>`

**Scroll animation system:**
- `hooks/use-in-view.ts` — thin `IntersectionObserver` hook that fires once when an element enters the viewport (threshold 15%, root margin −10% bottom)
- `components/reveal.tsx` — client component wrapping content in `.reveal` / `.is-visible` CSS classes with a staggered delay via the `index` prop (120ms per step)
- The `.reveal` / `.is-visible` transitions are defined in `app/globals.css` (not Tailwind utilities) and are disabled under `prefers-reduced-motion`

**Styling:**
- Tailwind CSS v4 with the `@theme inline` block in `globals.css` — design tokens live there, not in a `tailwind.config`
- Color palette is warm editorial (creams, soft pinks, muted greens) expressed in `oklch()`. All semantic colors (`--background`, `--primary`, etc.) are defined in `:root` inside `globals.css`
- Fonts: `Geist Sans` (body), `Geist Mono` (mono), `Fraunces` (headings/serif) — loaded via `next/font/google` in `app/layout.tsx`; accessed in CSS as `font-sans`, `font-mono`, `font-serif`, `font-heading`
- Two custom CSS animations: `animate-ken-burns` (slow zoom on hero image) and `animate-marquee` (infinite horizontal scroll on award strip)

**Component library:**
- `components/ui/button.tsx` — built on `@base-ui/react` (not Radix), styled with `cva`. This is the only UI primitive component; shadcn is present as a dev dependency but only its CSS layer (`shadcn/tailwind.css`) is imported
- `lib/utils.ts` — standard `cn()` helper (`clsx` + `tailwind-merge`)

**Next.js config (`next.config.mjs`):**
- TypeScript build errors are ignored (`ignoreBuildErrors: true`)
- Images are unoptimized (no Next.js image optimization pipeline)

**Data:** All content (care home names/locations, testimonials, awards) is hardcoded as constants at the top of each component file — there is no CMS, API, or database.

**Analytics:** `@vercel/analytics` injected in the root layout, production-only.
