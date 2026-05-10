@AGENTS.md

# Portfolio v2 — Project Guide

Personal portfolio for Roman (DoczzzMega) — Matrix-inspired 3D aesthetic in a sea-wave teal palette.
Rewrite of v1 (https://portfolio-v1-topaz-nu.vercel.app/) with motion-rich UX.

## Stack

- **Next.js 16** (App Router, Turbopack) + React 19
- **TypeScript** (strict)
- **SCSS modules** — no Tailwind, no CSS-in-JS
- **Framer Motion** — animations
- Fonts via `next/font/google`: **Space Grotesk** (display) + **JetBrains Mono** (code/UI)

## Commands

```bash
npm run dev      # dev server (port 3000, falls back if busy)
npm run build    # prod build — must stay clean
npm run start    # serve prod build
npx tsc --noEmit # standalone typecheck
```

## Directory layout

```
src/
  app/
    layout.tsx        # font loaders, metadata, html shell
    page.tsx          # composes all sections
    globals.scss      # resets + scrollbar + html font-size scaling
  components/
    <Name>/<Name>.tsx + <Name>.module.scss   # one folder per component
  data/
    portfolio.ts      # SINGLE source of truth for content
  styles/
    _variables.scss   # color tokens, breakpoints, glow shadows
    _mixins.scss      # @container, @glass, @section-spacing, @mono, @display
```

## Content

**All copy, projects, skills, contacts, nav items live in `src/data/portfolio.ts`** — never hard-code in components. Exports: `profile`, `skillGroups`, `projects`, `navItems`.

## Design system

### Palette (`src/styles/_variables.scss`)
- Primary sea-wave teal: `$color-teal #00e0d0` / bright `$color-teal-bright #00ffe5`
- Accents: magenta `#ff2e88`, yellow `#f5ff00`, green `#39ff14`
- Bg: `$color-bg-deep #000814`, glass `$color-bg-glass`
- Text: `$color-text #e0fffa`, dim `$color-text-dim`, muted `$color-text-muted`
- Glow shadows: `$glow-teal-sm/md/lg`, `$glow-magenta`

### Responsive ladder (mobile-first; full chain to 8K)

| Token | px | use |
|---|---|---|
| `$bp-xs` | 360 | very small phones |
| `$bp-sm` | 480 | small phones |
| `$bp-md` | 640 | large phones |
| `$bp-tablet` | 768 | iPad portrait |
| `$bp-tablet-lg` | 900 | iPad landscape / hamburger threshold |
| `$bp-lg` | 1200 | laptop |
| `$bp-xl` | 1440 | desktop |
| `$bp-2xl` | 1920 | 1080p |
| `$bp-3xl` | 2560 | 1440p / wide |
| `$bp-4xl` | 3840 | 4K |
| `$bp-5xl` | 5120 | 5K |
| `$bp-8k` | 7680 | 8K |

- `body { min-width: 320px }` is the lower bound.
- `html { font-size }` scales for ≥2560 (16→18→22→26→32px) so rem-based sizes grow on huge screens.
- `@mixin container` raises `max-width` per breakpoint up to 4600px on 8K.

### Fluid sizing

Every type/padding uses `clamp(min, vw, max)` with min lowered for tiny phones and an extra `min-width` query for ≥1920 to bump the upper bound. When adding a new component, follow the same pattern.

## Conventions

- **Custom cursor**: `body { cursor: none }` — every interactive element must include `data-cursor="hover"` so the cursor ring expands. Cursor auto-hides on `(pointer: coarse)` or ≤900px.
- **Mobile menu**: Navbar shows hamburger below `$bp-tablet-lg` (900). Overlay uses `AnimatePresence` and locks body scroll while open.
- **Scroll reveal**: wrap content in `<Reveal delay={...}>` (`src/components/Reveal/`). It uses framer-motion `whileInView` + `once: true`.
- **3D card tilt**: see `Skills.tsx` — mousemove computes rotateX/Y from cursor offset, reset on mouseleave.
- **SCSS naming**: kebab-case classes via `.module.scss`, accessed as `styles.camelCase` from TS. State variants use single-word modifiers (`.active`, `.scrolled`, `.open`, `.feature`).
- **No comments unless non-obvious.** Prefer expressive names.

## Visual signature components

- `MatrixRain` — canvas digital rain (katakana + binary) in teal with bright lead char + soft trail. Font size scales with viewport (13–36px). Mask softens edges.
- `PerspectiveGrid` — Tron-style 3D floor (CSS `rotateX(72deg)`) + glowing horizon line + radial "sun". Grid size scales 56→160px across breakpoints.
- `Cursor` — lerp-followed ring + dot. Hover state via `data-cursor="hover"` attr lookup.
- `Scanlines` — fixed CRT scanline overlay + SVG fractal noise + radial vignette.
- `Hero` — glitch text effect on name (RGB-split via `::before` magenta, `::after` yellow with clip-path).
- `Contact.shell` — animated conic-gradient border via `@property --angle` rotation.

## Section order in `app/page.tsx`

`MatrixRain` → `Cursor` → `Navbar` → `<main>` { Hero · About · Skills · Projects · Contact } → `Scanlines`.

## Source content reference

Pulled from v1 site (https://portfolio-v1-topaz-nu.vercel.app/):
- Skills: Frontend (React/Next, Vue 3, GSAP, SCSS), Backend (Laravel 10/11, Livewire/MoonShine, MySQL/Postgres, Auth), AI & Tools (vLLM/Whisper/XTTS v2/Vosk, Docker, Git, Web Security)
- Contacts: doczzzmega@gmail.com · t.me/rommega · github.com/DoczzzMega

## Adding a new section

1. Add data to `src/data/portfolio.ts`.
2. Create `src/components/<Name>/<Name>.tsx` + `.module.scss` with `@use "../../styles/variables" as *; @use "../../styles/mixins" as *;`.
3. Use `@include section-spacing; position: relative; z-index: 2;` on the outer `section` so it sits above `MatrixRain` (z:0) and below `Scanlines` (z:80).
4. Wrap content in `<Reveal>` for scroll-in animation.
5. Add an `id` matching a `navItems` entry if it should appear in the navbar.
6. Compose in `src/app/page.tsx`.

## Don't

- Don't hard-code copy in components — go through `src/data/portfolio.ts`.
- Don't introduce Tailwind/styled-components — SCSS modules only.
- Don't use raw px for fonts/spacing in components — use `clamp()` or rem.
- Don't forget `data-cursor="hover"` on new clickable elements.
- Don't use `100vh` for full-viewport sections — prefer `100svh` to avoid mobile address-bar overflow.
