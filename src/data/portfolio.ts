export const profile = {
  name: "Roman",
  alias: "DoczzzMega",
  title: "Fullstack Developer",
  tagline: "Interfaces that feel alive. Systems that stay quiet.",
  description:
    "I work across PHP/Laravel and modern JavaScript (React, Vue), combining expressive, motion-rich frontends with resilient backends. Recently focused on AI-integrated Laravel products, cinematic landing pages, voice/LLM pipelines, and type-safe APIs.",
  stats: [
    { value: "5+", label: "years shipping code" },
    { value: "30+", label: "public repositories" },
    { value: "AI", label: "integration focus" },
    { value: "∞", label: "between Laravel & browser" },
  ],
  contacts: {
    email: "doczzzmega@gmail.com",
    telegram: "https://t.me/rommega",
    telegramHandle: "@rommega",
    github: "https://github.com/DoczzzMega",
    githubHandle: "DoczzzMega",
  },
} as const;

export type SkillGroup = {
  id: string;
  title: string;
  glyph: string;
  accent: "teal" | "magenta" | "yellow";
  items: { name: string; detail: string }[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    glyph: "01",
    accent: "teal",
    items: [
      { name: "React & Next.js", detail: "App Router · hooks · SSR" },
      { name: "Vue 3", detail: "Composition API · Pinia · Vite" },
      { name: "GSAP & Animation", detail: "ScrollTrigger · timelines · canvas" },
      { name: "SCSS & Tailwind", detail: "BEM · modules · design tokens" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    glyph: "02",
    accent: "magenta",
    items: [
      { name: "PHP & Laravel", detail: "v10/11 · Eloquent · APIs" },
      { name: "Livewire & MoonShine", detail: "admin panels · DataTables" },
      { name: "MySQL / PostgreSQL", detail: "migrations · indexing · tuning" },
      { name: "REST & Auth", detail: "Sanctum · JWT · webhooks" },
    ],
  },
  {
    id: "ai-tools",
    title: "AI & Tools",
    glyph: "03",
    accent: "yellow",
    items: [
      { name: "AI Integration", detail: "vLLM · Whisper · XTTS v2 · Vosk" },
      { name: "Docker & Linux", detail: "self-hosted · VPS · nginx" },
      { name: "Git & code reviews", detail: "conventional commits" },
      { name: "Web Security", detail: "auth · hardening · rate limits" },
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  category: "Client" | "AI" | "Frontend" | "Tool";
  description: string;
  stack: string[];
  accent: "teal" | "magenta" | "yellow" | "green";
  live?: string;
  source?: string;
};

export const projects: Project[] = [
  {
    id: "cookforia",
    title: "Cookforia",
    category: "Client",
    description:
      "Culinary studio in Saint Petersburg — master-classes, corporate events, weddings, catering. Three studios, full booking flow, gift certificates, multi-cuisine catalog with chef bios.",
    stack: ["Laravel", "Blade", "MySQL", "JS"],
    accent: "magenta",
    live: "https://cookforia.ru/",
    source: "https://github.com/DoczzzMega/cookforia-new",
  },
  {
    id: "bumwerk",
    title: "Bumwerk",
    category: "Client",
    description:
      "Specialised BMW & MINI service center — diagnostics, engine repair, chip tuning for 2018+ models. In-house parts catalog, daily-hour appointment booking, certified-master profiles.",
    stack: ["Laravel", "PHP", "SCSS", "JS"],
    accent: "teal",
    live: "https://bumwerk.ru/",
  },
  {
    id: "suno-cleaner",
    title: "Suno Cleaner",
    category: "AI",
    description:
      "Local AI watermark remover for Suno / Sonauto tracks. Laravel API + Next.js dashboard wired to a Demucs / Encodec / mmm DSP pipeline. Self-hosted, batch processing, queued jobs.",
    stack: ["Laravel", "Next.js", "Demucs", "Encodec"],
    accent: "green",
    source: "https://github.com/DoczzzMega/suno-cleaner",
  },
  {
    id: "ai-secretary",
    title: "AI Secretary System",
    category: "AI",
    description:
      "Local AI secretary, tech support & sales manager. XTTS v2 voice cloning, real-time recognition (Vosk / Whisper), offline LLM (vLLM + Qwen / Llama). Vue 3 admin panel, Telegram bot, site widget, fine-tuning pipeline.",
    stack: ["Python", "Vue 3", "vLLM", "XTTS v2", "Whisper"],
    accent: "yellow",
    live: "https://shaerware.digital/",
    source: "https://github.com/DoczzzMega/AI_Secretary_System",
  },
  {
    id: "react-pizza",
    title: "React Pizza v2",
    category: "Frontend",
    description:
      "Pizza delivery storefront — Redux Toolkit + RTK Query, debounced search, category filters, sort, pagination, persistent cart with skeleton-loaders during fetch.",
    stack: ["React", "Redux Toolkit", "TypeScript", "SCSS"],
    accent: "teal",
    live: "https://react-pizza-v2-items-by-id.vercel.app/",
    source: "https://github.com/DoczzzMega/react-pizza-v2",
  },
  {
    id: "vue-sneakers",
    title: "Vue Sneakers",
    category: "Frontend",
    description:
      "Vue 3 sneaker storefront — Composition API, reactive cart drawer, favourites, order history, debounced search, persisted state. Built on Vite with Tailwind utility styling.",
    stack: ["Vue 3", "Vite", "Tailwind", "Pinia"],
    accent: "magenta",
    live: "https://vue-sneakers-jet.vercel.app",
    source: "https://github.com/DoczzzMega/vue_sneakers",
  },
  {
    id: "hotel-booking",
    title: "Hotel Booking",
    category: "Frontend",
    description:
      "Hand-coded SCSS / BEM hotel landing — typographic hero, responsive grid, animated booking widget. Pure HTML / CSS / JS — a study in CSS architecture.",
    stack: ["SCSS", "BEM", "HTML", "JS"],
    accent: "yellow",
    live: "https://hotel-booking-delta.vercel.app",
    source: "https://github.com/DoczzzMega/Hotel-Booking",
  },
  {
    id: "video-player",
    title: "Custom Video Player",
    category: "Frontend",
    description:
      "Custom HTML5 video controls — play / pause, volume, scrub, fullscreen, keyboard shortcuts. Vanilla JS, no libraries. Themable via CSS variables.",
    stack: ["HTML5", "JS", "CSS"],
    accent: "green",
    live: "https://custom-video-player-sandy-xi.vercel.app",
    source: "https://github.com/DoczzzMega/custom_video-player",
  },
  {
    id: "claude-progressline",
    title: "Claude Progressline",
    category: "Tool",
    description:
      "Open-source statusline for Claude Code CLI — model badge, context window usage, rate limits, project folder. Cross-platform PowerShell core.",
    stack: ["PowerShell", "Claude Code", "CLI"],
    accent: "magenta",
    source: "https://github.com/DoczzzMega/claude-progressline",
  },
];

export const navItems = [
  { id: "home", label: "home", glyph: "00" },
  { id: "about", label: "about", glyph: "01" },
  { id: "skills", label: "skills", glyph: "02" },
  { id: "projects", label: "projects", glyph: "03" },
  { id: "contact", label: "contact", glyph: "04" },
] as const;
