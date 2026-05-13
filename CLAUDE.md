@AGENTS.md

# Portfolio v2 — Project Guide

Personal portfolio for Roman (DoczzzMega) — Matrix-inspired 3D aesthetic in a sea-wave teal palette.
Rewrite of v1 (https://portfolio-v1-topaz-nu.vercel.app/) with motion-rich UX.

- **Live**: https://potfolio-v2-phi.vercel.app
- **Repo**: https://github.com/DoczzzMega/portfolio-v2

## Stack

- **Next.js 16** (App Router, Turbopack) + React 19
- **TypeScript** (strict)
- **SCSS modules** — no Tailwind, no CSS-in-JS
- **Framer Motion** — animations
- **next-intl v4** — i18n with `[locale]` segment, middleware-driven routing
- Fonts via `next/font/google`: **Manrope** (display) + **JetBrains Mono** (mono). Manrope ships Cyrillic glyphs — required for `ru` default. Don't swap back to Space Grotesk: it has no Cyrillic subset.

## Commands

```bash
npm run dev      # dev server (port 3000, falls back if busy)
npm run build    # prod build — must stay clean
npm run start    # serve prod build
npx tsc --noEmit # standalone typecheck
```

## Directory layout

```
messages/
  ru.json en.json de.json es.json fr.json zh.json   # all translatable copy
src/
  app/
    layout.tsx                  # minimal root (returns children)
    globals.scss                # resets + scrollbar + html font-size scaling
    [locale]/
      layout.tsx                # html shell, fonts, NextIntlClientProvider
      page.tsx                  # composes all sections (awaits params, sets locale)
  components/
    <Name>/<Name>.tsx + <Name>.module.scss   # one folder per component
    LangSwitcher/               # desktop dropdown + mobile pill grid
  data/
    portfolio.ts                # STRUCTURAL data only (ids, stack, accents, URLs)
  i18n/
    routing.ts                  # locales list, defaultLocale, label metadata
    navigation.ts               # localised Link/redirect/usePathname/useRouter
    request.ts                  # getRequestConfig — loads messages by locale
  middleware.ts                 # next-intl locale middleware
  styles/
    _variables.scss             # color tokens, breakpoints, glow shadows
    _mixins.scss                # @container, @glass, @section-spacing, @mono, @display
```

## Content & i18n

**Split between two source-of-truth files:**

1. **`messages/<locale>.json`** — all translatable copy: nav labels, section eyebrows/titles/bodies, project titles + descriptions, skill group titles + item names/details, stat labels, contact body, status text. Each locale file has identical key structure; missing keys at runtime fall back to the default locale. Namespaces match component names: `Nav`, `Hero`, `About`, `Skills`, `Projects`, `Contact`.

2. **`src/data/portfolio.ts`** — structural / non-translatable data only:
   - `profile` — alias, contact handles, URLs
   - `statKeys`, `statValues` — stat metric values (numbers + symbols)
   - `skillGroupKeys`, `skillGroupMeta` — group keys, glyphs, accents, ordered item-keys
   - `projectMetas` — array of `{ id, category, stack, accent, live?, source? }` (no copy)
   - `navItemKeys`, `navItemGlyphs` — nav-item ids + their `00`/`01` glyph prefixes

**Components** import `useTranslations("Namespace")` from `next-intl` and look up by key. Stack chip names (React, Laravel, etc.) stay in English across all locales — they're brand names, not translated.

### Supported locales

| Locale | Code | Native name | Notes |
|--------|------|-------------|-------|
| `ru`   | RU   | Русский     | **default** — lives at `/` (no prefix) |
| `en`   | EN   | English     | `/en` |
| `de`   | DE   | Deutsch     | `/de` |
| `es`   | ES   | Español     | `/es` |
| `fr`   | FR   | Français    | `/fr` |
| `zh`   | ZH   | 中文         | `/zh` |

Routing uses `localePrefix: 'as-needed'` so the default locale (`ru`) has no URL prefix.

### Adding a new locale

1. Add the locale string to `routing.locales` in `src/i18n/routing.ts` and to `localeLabels`.
2. Copy `messages/en.json` to `messages/<new>.json` and translate the values (keep keys identical).
3. Add the locale to the middleware matcher pattern in `src/middleware.ts`.
4. Update the `Manrope` / `JetBrains_Mono` subsets in `src/app/[locale]/layout.tsx` if the new locale needs a non-Latin/Cyrillic script.

### Translation rule

- Translate all prose, headings, CTAs, eyebrows, status text, project descriptions, skill detail strings.
- **Do not translate**: stack chip names (React, Laravel...), brand titles (Cookforia, Bumwerk...), `loading_identity.exe`, the `[00]` glyph prefixes, the alias `DoczzzMega::v2`, version markers like `v10/11`, technology names (`vLLM`, `XTTS v2`, `App Router`, etc.).

### Project schema

```ts
// src/data/portfolio.ts — structural only
type ProjectMeta = {
  id: string;            // matches messages/<locale>.json → Projects.items.<id>
  category: "Client" | "AI" | "Frontend" | "Tool";
  stack: string[];       // stack chip labels — universal, not translated
  accent: "teal" | "magenta" | "yellow" | "green";
  live?: string;         // OPTIONAL — only set when there is a real published demo
  source?: string;       // OPTIONAL — public GitHub URL
};

// messages/<locale>.json — translatable copy
"Projects": {
  "items": {
    "<id>": { "title": "...", "description": "..." }
  },
  "categories": { "Client": "...", "AI": "...", ... }
}
```

**Link rule (strict):** `live` is set ONLY when a real demo is reachable. For repos without `homepageUrl` (verified via `gh repo list DoczzzMega --json name,homepageUrl`), do NOT invent a URL — set just `source`. Client projects (Cookforia, Bumwerk) may have `live` but no public `source`. Cards skip the link row entirely when both fields are absent.

**Adding a project** requires:
1. Append an entry to `projectMetas` in `src/data/portfolio.ts` with id, category, stack, accent, optional live/source.
2. Add a matching `items.<id>` block in **every** locale file under `Projects` namespace.

Cards layout uses index-driven `featured` slots — indexes `0` and `3` get `grid-column: span 4` (large bento tiles). Reorder the `projects` array to change which entries are featured. Current 9 real projects in order:

| idx | id                  | feat | live | source |
|----:|---------------------|:----:|:----:|:------:|
|   0 | `cookforia`         |  ⭐  |  ✓   |   ✓    |
|   1 | `bumwerk`           |      |  ✓   |        |
|   2 | `suno-cleaner`      |      |      |   ✓    |
|   3 | `ai-secretary`      |  ⭐  |  ✓   |   ✓    |
|   4 | `react-pizza`       |      |  ✓   |   ✓    |
|   5 | `vue-sneakers`      |      |  ✓   |   ✓    |
|   6 | `hotel-booking`     |      |  ✓   |   ✓    |
|   7 | `video-player`      |      |  ✓   |   ✓    |
|   8 | `claude-progressline`|      |      |   ✓    |

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
- **Progressive nav reveal**: navbar uses `width: max-content` capped to viewport. Two main desktop tiers:
  - **900–1439** (laptop): brand + 5 ultra-compact links (no glyphs, no CTA). The `ping →` button is hidden in this range — the brand suffix `::v2` hides under 768px.
  - **1440+** (desktop): full layout — glyph numbers (`00`, `01`...) reappear, CTA reappears, comfortable padding/letter-spacing.
  - **1920+**: largest, most generous spacing.

  When adding/removing nav items, the 900-1439 base styles must keep total width tight enough that 5 links + brand fit on a 13" laptop (~1280px effective viewport). Don't trust theoretical sums — verify on a real laptop screenshot.
- **Scroll reveal**: wrap content in `<Reveal delay={...}>` (`src/components/Reveal/`). It uses framer-motion `whileInView` + `once: true`.
- **3D card tilt**: see `Skills.tsx` — mousemove computes rotateX/Y from cursor offset, reset on mouseleave.
- **External link buttons**: `Projects.tsx` renders `live ↗` / `source ↗` buttons under the description, separated by a dashed top border. Hover color matches the card's accent (`tealCard`/`magentaCard`/`yellowCard`/`greenCard`). Always pass `target="_blank" rel="noopener noreferrer" data-cursor="hover"` for outbound links.
- **SCSS naming**: kebab-case classes via `.module.scss`, accessed as `styles.camelCase` from TS. State variants use single-word modifiers (`.active`, `.scrolled`, `.open`, `.feature`). Prefer explicit class names over `:not()`/positional selectors — CSS-modules hashing makes structural selectors brittle.
- **No comments unless non-obvious.** Prefer expressive names.

## Visual signature components

- `MatrixRain` — canvas digital rain (katakana + binary) in teal with bright lead char + soft trail. Font size scales with viewport (13–36px). Mask softens edges.
- `PerspectiveGrid` — Tron-style 3D floor (CSS `rotateX(72deg)`) + glowing horizon line + radial "sun". Grid size scales 56→160px across breakpoints.
- `Cursor` — lerp-followed ring + dot. Hover state via `data-cursor="hover"` attr lookup.
- `Scanlines` — fixed CRT scanline overlay + SVG fractal noise + radial vignette.
- `Hero` — glitch text effect on name (RGB-split via `::before` magenta, `::after` yellow with clip-path).
- `Projects` — bento grid (6-column on desktop, indexes 0 and 3 span 4 cols). Each card has accent-colored radial background, dashed-border `live ↗` / `source ↗` link row above stack chips, hover lift with accent-colored glow.
- `Contact.shell` — animated conic-gradient border via `@property --angle` rotation.

## Section order in `app/page.tsx`

`MatrixRain` → `Cursor` → `Navbar` → `<main>` { Hero · About · Skills · Projects · Contact } → `Scanlines`.

## Source content reference

Skills + bio + contacts pulled from v1 (https://portfolio-v1-topaz-nu.vercel.app/):
- Frontend: React/Next, Vue 3, GSAP, SCSS
- Backend: Laravel 10/11, Livewire/MoonShine, MySQL/Postgres, Sanctum/JWT
- AI & Tools: vLLM/Whisper/XTTS v2/Vosk, Docker, Git, Web Security
- Contacts: doczzzmega@gmail.com · t.me/rommega · github.com/DoczzzMega

Projects sourced from real work:
- **Cookforia** (https://cookforia.ru/) — culinary studio in Saint Petersburg (Laravel client work)
- **Bumwerk** (https://bumwerk.ru/) — BMW & MINI service center (Laravel client work, no public source)
- **Suno Cleaner** (https://github.com/DoczzzMega/suno-cleaner) — local AI watermark remover (source-only)
- **AI Secretary System** (https://shaerware.digital/) — XTTS v2 + Whisper + vLLM voice agent
- **React Pizza v2** (https://react-pizza-v2-items-by-id.vercel.app/) — Redux Toolkit storefront
- **Vue Sneakers** (https://vue-sneakers-jet.vercel.app) — Vue 3 Composition API storefront
- **Hotel Booking** (https://hotel-booking-delta.vercel.app) — SCSS/BEM landing study
- **Custom Video Player** (https://custom-video-player-sandy-xi.vercel.app) — vanilla JS HTML5 controls
- **Claude Progressline** (https://github.com/DoczzzMega/claude-progressline) — Claude Code statusline (source-only)

## Deployment

- **Production**: https://potfolio-v2-phi.vercel.app (Vercel project `potfolio-v2`, scope `doczzzmegas-projects`)
- **Manual deploy**: `vercel --prod` from project root (project already linked via `.vercel/`)
- **Auto-deploy**: NOT yet active. The Vercel GitHub App needs to be installed for the `DoczzzMega/portfolio-v2` repo (https://github.com/apps/vercel/installations/new) — once installed, run `vercel git connect` to link, after which every push to `main` triggers prod deploy and other branches/PRs get preview URLs.
- **Vercel CLI version**: must be ≥53.x. Older 52.0.0 had an SSL cert validation bug ("unable to get local issuer certificate") — `npm i -g vercel@latest` resolves it.

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
