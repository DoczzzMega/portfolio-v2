# Portfolio v2

Personal portfolio for **Roman (DoczzzMega)** — a fullstack developer working across PHP/Laravel and the modern JS ecosystem.

**[Live demo →](https://potfolio-v2-phi.vercel.app)**

A rewrite of [v1](https://portfolio-v1-topaz-nu.vercel.app/) with a Matrix-inspired 3D aesthetic in a sea-wave teal palette: digital rain canvas, Tron-style perspective grid, glitch typography, glass cards with neon glow, and a custom cursor.

## Stack

- **Next.js 16** (App Router · Turbopack) + React 19
- **TypeScript** strict
- **SCSS modules** — no Tailwind
- **Framer Motion** — entrance reveals + mobile-menu transitions
- **next-intl v4** — i18n with `[locale]` segment, 6 languages
- **next/font/google** — Manrope (display) + JetBrains Mono (mono), both with Cyrillic subset

## Highlights

- **MatrixRain** — canvas digital rain (katakana + binary) with viewport-aware font size (13–36px from phone to 8K)
- **PerspectiveGrid** — pure-CSS Tron 3D floor with glowing horizon and radial sun
- **Custom cursor** — lerp-followed ring + dot, expands on `[data-cursor="hover"]`
- **Hero glitch** — RGB-split via `::before` magenta + `::after` yellow with clip-path
- **Bento Projects grid** — 6 real projects with `live ↗` / `source ↗` buttons; cards lift and glow in their accent color on hover
- **Conic-gradient border** on Contact card animated via `@property --angle`
- **Scanline + noise + vignette** CRT overlay on top
- **Fully responsive 320px → 8K** with a complete breakpoint ladder, root-font-size scaling on ≥2560px, a progressive desktop navbar that reveals more detail as the viewport grows, and a hamburger overlay under 900px
- **6 languages** — Russian (default), English, German, Spanish, French, Chinese. Switcher dropdown on desktop, pill grid in the mobile menu. Default locale lives at `/`, others at `/en`, `/de`, `/es`, `/fr`, `/zh`

## Featured projects

| Project | Stack | Live | Source |
|---|---|---|---|
| **Cookforia** — culinary studio in Saint Petersburg | Laravel · Blade · MySQL | [cookforia.ru](https://cookforia.ru/) | [github](https://github.com/DoczzzMega/cookforia-new) |
| **Bumwerk** — BMW & MINI service center | Laravel · PHP · SCSS | [bumwerk.ru](https://bumwerk.ru/) | — |
| **Suno Cleaner** — local AI watermark remover | Laravel · Next.js · Demucs · Encodec | — | [github](https://github.com/DoczzzMega/suno-cleaner) |
| **AI Secretary System** — voice agent w/ XTTS v2 + Whisper + vLLM | Python · Vue 3 · vLLM · XTTS v2 | [shaerware.digital](https://shaerware.digital/) | [github](https://github.com/DoczzzMega/AI_Secretary_System) |
| **React Pizza v2** — Redux Toolkit storefront | React · Redux Toolkit · TS | [demo](https://react-pizza-v2-items-by-id.vercel.app/) | [github](https://github.com/DoczzzMega/react-pizza-v2) |
| **Vue Sneakers** — Vue 3 Composition API storefront | Vue 3 · Vite · Tailwind · Pinia | [demo](https://vue-sneakers-jet.vercel.app) | [github](https://github.com/DoczzzMega/vue_sneakers) |
| **Hotel Booking** — hand-coded SCSS / BEM landing study | SCSS · BEM · HTML · JS | [demo](https://hotel-booking-delta.vercel.app) | [github](https://github.com/DoczzzMega/Hotel-Booking) |
| **Custom Video Player** — vanilla JS HTML5 controls | HTML5 · JS · CSS | [demo](https://custom-video-player-sandy-xi.vercel.app) | [github](https://github.com/DoczzzMega/custom_video-player) |
| **Claude Progressline** — Claude Code statusline | PowerShell · Claude Code | — | [github](https://github.com/DoczzzMega/claude-progressline) |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve prod build
```

## Project structure

```
messages/
  ru.json en.json de.json es.json fr.json zh.json   # all translatable copy
src/
  app/
    layout.tsx              # minimal root
    globals.scss            # resets, html font-size scaling
    [locale]/
      layout.tsx            # html shell, fonts, i18n provider
      page.tsx              # composes all sections
  components/
    MatrixRain/             # canvas digital rain
    PerspectiveGrid/        # 3D Tron floor
    Cursor/                 # custom cursor follower
    Scanlines/              # CRT overlay
    Navbar/                 # pill nav + hamburger
    LangSwitcher/           # locale dropdown + mobile pill grid
    Hero/About/Skills/Projects/Contact/
    Reveal/                 # framer-motion scroll reveal helper
  data/
    portfolio.ts            # structural data (ids, stack, accents, URLs)
  i18n/
    routing.ts              # locales + labels
    navigation.ts           # localised Link/redirect/usePathname/useRouter
    request.ts              # message loader
  middleware.ts             # next-intl locale middleware
  styles/
    _variables.scss
    _mixins.scss
```

Copy lives in `messages/<locale>.json`; structural project data lives in `src/data/portfolio.ts`. To add a project, append to `projectMetas` and add an `items.<id>` entry to **every** locale file.

## Responsive ladder

| Token         | px   | use                       |
|---------------|------|---------------------------|
| `$bp-xs`      | 360  | very small phones         |
| `$bp-sm`      | 480  | small phones              |
| `$bp-md`      | 640  | large phones              |
| `$bp-tablet`  | 768  | iPad portrait             |
| `$bp-tablet-lg`| 900 | iPad landscape · burger   |
| `$bp-lg`      | 1200 | laptop                    |
| `$bp-xl`      | 1440 | desktop                   |
| `$bp-2xl`     | 1920 | 1080p                     |
| `$bp-3xl`     | 2560 | 1440p / wide              |
| `$bp-4xl`     | 3840 | 4K                        |
| `$bp-5xl`     | 5120 | 5K                        |
| `$bp-8k`      | 7680 | 8K                        |

`html { font-size }` scales 16 → 32px from 1440p to 8K and `@mixin container` raises max-width up to 4600px so the layout breathes on huge displays.

The desktop navbar reveals detail progressively: compact links 900–1099 → `ping →` CTA appears at 1100 → wider gaps at 1200 → glyph numbers (`00`, `01`...) reappear at 1440 → most generous spacing at 1920+.

## Languages

| Locale | Code | URL prefix | Native name |
|--------|------|------------|-------------|
| Russian (default) | `ru` | `/` | Русский |
| English | `en` | `/en` | English |
| German | `de` | `/de` | Deutsch |
| Spanish | `es` | `/es` | Español |
| French | `fr` | `/fr` | Français |
| Chinese | `zh` | `/zh` | 中文 |

## Deployment

Currently deployed manually via the Vercel CLI. To redeploy:

```bash
vercel --prod
```

To enable automatic deploys on every push to `main`, install the [Vercel GitHub App](https://github.com/apps/vercel/installations/new) for this repo, then run `vercel git connect` once.

## Contacts

- Email — [doczzzmega@gmail.com](mailto:doczzzmega@gmail.com)
- Telegram — [@rommega](https://t.me/rommega)
- GitHub — [DoczzzMega](https://github.com/DoczzzMega)

## License

Personal project — code is shared for reference; copy and assets are mine.
