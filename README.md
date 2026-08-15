# Portfolio

Next.js 15 (App Router) + TypeScript + Tailwind CSS + GSAP + Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before you ship this

1. **Replace the content in `lib/data.ts`.** Every piece of copy — name,
   projects, stack, testimonials, email — lives in that one file.
   Nothing else needs to change.
2. **Add real images.** `app/layout.tsx` references `/og.png` (1200×630,
   for social share previews) and `/favicon.ico` — neither exists yet in
   `public/`. Add them or the build will still succeed but those requests
   will 404.
3. **Update the site URL in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` when deploying to your production domain.
4. **Project screenshots/video.** The case-study cards are text-only
   right now by design (keeps the first version fast and honest about
   placeholder content) — add an image or looping video per project in
   `components/ProjectCard.tsx` once you have real assets, using
   `next/image` with explicit width/height so layout doesn't shift.

## Design system

The visual direction is a "technical blueprint" aesthetic — an ink-navy
base, a brass/amber interactive accent, and a cyan accent reserved for
structural/annotation elements — rather than a generic dark-mode-agency
look. All color and type tokens are defined once in `tailwind.config.ts`
and `app/globals.css`; every component consumes them, so retheming means
editing those two files, not hunting through components.

Dark/light mode is driven by a `data-theme` attribute on `<html>`,
flipped by `components/ThemeToggle.tsx` and persisted to
`localStorage`. Tailwind's color tokens resolve through CSS custom
properties (see `:root` and `[data-theme="light"]` in `globals.css`),
so a class like `bg-ink` or `text-brass` is theme-aware automatically —
no `dark:` variants needed throughout the component tree.

## Motion

- **GSAP + ScrollTrigger** — scroll-driven reveals (`components/Reveal.tsx`)
  and the hero's word-stagger entrance.
- **Lenis** — smooth scroll, synced to ScrollTrigger each frame in
  `components/SmoothScroll.tsx`.
- **Framer Motion** — component-state-driven motion: the preloader, the
  mobile nav overlay, and the magnetic-button spring physics.

`prefers-reduced-motion` is respected at the source: Lenis simply
doesn't initialize, the preloader skips itself, and the custom cursor
never attaches its listeners — so reduced-motion users get instant,
native scroll rather than a "same animation, but faster" compromise.

## Performance

- Fonts load via `next/font/google` (self-hosted, no render-blocking
  request, `display: swap`).
- All animation targets `transform`/`opacity` only — nothing triggers
  layout or paint on scroll.
- No client-side data fetching; the whole site is static — deploy as-is
  to Vercel, Netlify, or any static/Node host.

## A note on how this was built

This project was generated in an environment with no network access, so
none of it could be `npm install`-ed or run in a real browser to verify
visually. Every file was hand-written and reviewed line-by-line for
correctness (hydration safety, Tailwind class validity, accessibility
attributes, TypeScript types), but you should still do a first
`npm run dev` pass yourself before treating it as final — normal
practice for any handoff, doubly so here.
