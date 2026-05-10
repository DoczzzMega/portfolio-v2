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
  category: "Frontend" | "Backend" | "AI";
  description: string;
  stack: string[];
  accent: "teal" | "magenta" | "yellow" | "green";
};

export const projects: Project[] = [
  {
    id: "motion-ui",
    title: "Motion-Driven UIs",
    category: "Frontend",
    description:
      "Cinematic landing pages with scroll-driven storytelling, GSAP timelines and canvas-based hero scenes.",
    stack: ["Next.js", "GSAP", "ScrollTrigger", "SCSS"],
    accent: "teal",
  },
  {
    id: "vue-apps",
    title: "Vue 3 Apps",
    category: "Frontend",
    description:
      "Reactive dashboards and product UIs built on Composition API with Pinia state and Vite tooling.",
    stack: ["Vue 3", "Pinia", "Vite", "TypeScript"],
    accent: "teal",
  },
  {
    id: "laravel-api",
    title: "Laravel APIs",
    category: "Backend",
    description:
      "Type-safe REST APIs with Sanctum/JWT auth, Eloquent relations, queues, and webhook integrations.",
    stack: ["Laravel 11", "Eloquent", "Sanctum", "PostgreSQL"],
    accent: "magenta",
  },
  {
    id: "admin-panels",
    title: "Admin Panels",
    category: "Backend",
    description:
      "Internal tools and CRMs powered by MoonShine and Livewire — DataTables, role-based access, audit logs.",
    stack: ["MoonShine", "Livewire", "MySQL", "PHP"],
    accent: "magenta",
  },
  {
    id: "ai-services",
    title: "AI-Driven Services",
    category: "AI",
    description:
      "Voice + LLM pipelines: Whisper transcription, vLLM inference, XTTS v2 synthesis. Self-hosted on VPS.",
    stack: ["vLLM", "Whisper", "XTTS v2", "Docker"],
    accent: "yellow",
  },
  {
    id: "self-hosted",
    title: "Self-Hosted Infra",
    category: "AI",
    description:
      "Dockerised stacks behind nginx with hardened auth, rate limits, and observability for hobby & client work.",
    stack: ["Docker", "nginx", "Linux", "VPS"],
    accent: "green",
  },
];

export const navItems = [
  { id: "home", label: "home", glyph: "00" },
  { id: "about", label: "about", glyph: "01" },
  { id: "skills", label: "skills", glyph: "02" },
  { id: "projects", label: "projects", glyph: "03" },
  { id: "contact", label: "contact", glyph: "04" },
] as const;
