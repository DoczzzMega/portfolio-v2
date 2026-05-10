# Portfolio v2

Personal portfolio for **Roman (DoczzzMega)** — a fullstack developer working across PHP/Laravel and the modern JS ecosystem.

**[Live demo →](https://potfolio-v2-phi.vercel.app)**

A rewrite of [v1](https://portfolio-v1-topaz-nu.vercel.app/) with a Matrix-inspired 3D aesthetic in a sea-wave teal palette: digital rain canvas, Tron-style perspective grid, glitch typography, glass cards with neon glow, and a custom cursor.

## Stack

- **Next.js 16** (App Router · Turbopack) + React 19
- **TypeScript** strict
- **SCSS modules** — no Tailwind
- **Framer Motion** — entrance reveals + mobile-menu transitions
- **next/font/google** — Space Grotesk (display) + JetBrains Mono (mono)

## Highlights

- **MatrixRain** — canvas digital rain (katakana + binary) with viewport-aware font size (13–36px from phone to 8K)
- **PerspectiveGrid** — pure-CSS Tron 3D floor with glowing horizon and radial sun
- **Custom cursor** — lerp-followed ring + dot, expands on `[data-cursor="hover"]`
- **Hero glitch** — RGB-split via `::before` magenta + `::after` yellow with clip-path
- **Bento Projects grid** — 6 real projects with `live ↗` / `source ↗` buttons; cards lift and glow in their accent color on hover
- **Conic-gradient border** on Contact card animated via `@property --angle`
- **Scanline + noise + vignette** CRT overlay on top
- **Fully responsive 320px → 8K** with a complete breakpoint ladder, root-font-size scaling on ≥2560px, a progressive desktop navbar that reveals more detail as the viewport grows, and a hamburger overlay under 900px

## Featured projects

| Project | Stack | Live | Source |
|---|---|---|---|
| **Cookforia** — culinary studio in Saint Petersburg | Laravel · Blade · MySQL | [cookforia.ru](https://cookforia.ru/) | [github](https://github.com/DoczzzMega/cookforia-new) |
| **Bumwerk** — BMW & MINI service center | Laravel · PHP · SCSS | [bumwerk.ru](https://bumwerk.ru/) | — |
| **AI Secretary System** — voice agent w/ XTTS v2 + Whisper + vLLM | Python · Vue 3 · vLLM · XTTS v2 | [shaerware.digital](https://shaerware.digital/) | [github](https://github.com/DoczzzMega/AI_Secretary_System) |
| **Suno Cleaner** — local AI watermark remover | Laravel · Next.js · Demucs · Encodec | — | [github](https://github.com/DoczzzMega/suno-cleaner) |
| **React Pizza v2** — Redux Toolkit storefront | React · Redux Toolkit · TS | [demo](https://react-pizza-v2-livid.vercel.app) | [github](https://github.com/DoczzzMega/react-pizza-v2) |
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
src/
  app/
    layout.tsx        # font loaders, metadata
    page.tsx          # composes all sections
    globals.scss      # resets, html font-size scaling, scrollbar
  components/
    MatrixRain/       # canvas digital rain
    PerspectiveGrid/  # 3D Tron floor
    Cursor/           # custom cursor follower
    Scanlines/        # CRT overlay
    Navbar/           # pill nav + hamburger
    Hero/             # glitch hero
    About/            # bio + stats
    Skills/           # 3D-tilt skill cards
    Projects/         # bento project grid
    Contact/          # contact card with animated border
    Reveal/           # framer-motion scroll reveal helper
  data/
    portfolio.ts      # single source of truth for all copy
  styles/
    _variables.scss   # tokens, breakpoints, glow shadows
    _mixins.scss      # @container, @glass, @section-spacing, @mono, @display
```

All content (skills, projects, contact links, nav items) is centralised in `src/data/portfolio.ts` — change copy there, not in components.

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
