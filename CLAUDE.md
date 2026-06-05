# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
pnpm dev        # dev server at localhost:4321
pnpm build      # production build to ./dist/
pnpm preview    # preview the built site locally
pnpm astro check  # TypeScript type-check
```

## Architecture

**Stack**: Astro 6 + React 19 + Tailwind CSS v4 (via `@tailwindcss/vite` plugin). Package manager: pnpm.

**Routing**: File-based via `src/pages/*.astro`. Current routes: `/`, `/ahorro`, `/beneficios`, `/credito`, `/inversiones`, `/nosotros`, `/tienda`.

**Layout shell**: `src/layouts/Layout.astro` wraps every page with `<Header>`, `<Footer>`, global CSS, and SEO meta tags. It accepts optional `title`, `description`, and `image` props.

**Component split**:
- Static/server-rendered sections → `.astro` components
- Interactive or animated sections → `.tsx` React components with a hydration directive (`client:load` or `client:visible`)

**Component hierarchy**:
- `src/components/sections/` — reusable full-width section blocks: `PageHero.astro`, `CTABanner.astro`, `BlockImageText.astro`. Inner pages open with `PageHero` and close with `CTABanner`.
- `src/components/ui/` — primitive atoms: `SectionHeading.astro` (handles mixed Poppins/Baskervville headings), `SectionLabel.astro` (small uppercase label above headings).
- `src/components/` — page-section components consumed by pages.

## Styling

All custom tokens live in `src/styles/global.css` inside the `@theme {}` block. Key tokens:

| Token | Value |
|---|---|
| `--color-brand-red` | `#980025` |
| `--color-gold` | `#CEA24A` |
| `--color-ucm-dark` | `#0A0B1E` |
| `--font-sans` | Poppins |
| `--font-serif` | Baskervville |

Key utility classes defined in `@layer utilities`:
- `.container-ucm` — max-width 1280px centered container
- `.section-white / .section-surface / .section-dark / .section-red` — background variants
- `.btn-primary / .btn-secondary / .btn-outline` — button styles
- `.eyebrow` — small all-caps label (red by default; `.eyebrow--gold`, `.eyebrow--muted` variants)
- `.serif-italic` — Baskervville italic span (used for decorative heading words)
- `.card / .card-dark`, `.pricing-card / .pricing-card--featured` — card variants
- `.reveal-up / .reveal-left / .reveal-right` — scroll-reveal classes animated via `IntersectionObserver` in per-page `<script>` blocks

## Path aliases

Configured in `tsconfig.json`:
- `@/*` → `src/*`
- `@/components/*`, `@/layouts/*`, `@/assets/*`, `@/styles/*`
