// Structural / non-translatable data — copy lives in messages/<locale>.json
// Tech / stack chip names stay here (they are universal and not translated).

export const profile = {
  name: "Roman",
  alias: "DoczzzMega",
  contacts: {
    email: "doczzzmega@gmail.com",
    telegram: "https://t.me/rommega",
    telegramHandle: "@rommega",
    github: "https://github.com/DoczzzMega",
    githubHandle: "DoczzzMega",
  },
} as const;

export const statKeys = ["years", "repos", "aiFocus", "between"] as const;

export const statValues: Record<(typeof statKeys)[number], string> = {
  years: "5+",
  repos: "30+",
  aiFocus: "AI",
  between: "∞",
};

export const skillGroupKeys = ["frontend", "backend", "aiTools"] as const;

export type SkillGroupKey = (typeof skillGroupKeys)[number];

export const skillGroupMeta: Record<
  SkillGroupKey,
  {
    glyph: string;
    accent: "teal" | "magenta" | "yellow";
    itemKeys: readonly string[];
  }
> = {
  frontend: {
    glyph: "01",
    accent: "teal",
    itemKeys: ["react", "vue", "gsap", "scss"],
  },
  backend: {
    glyph: "02",
    accent: "magenta",
    itemKeys: ["laravel", "livewire", "db", "auth"],
  },
  aiTools: {
    glyph: "03",
    accent: "yellow",
    itemKeys: ["ai", "docker", "git", "security"],
  },
};

export type ProjectMeta = {
  id: string;
  category: "Client" | "AI" | "Frontend" | "Tool";
  stack: string[];
  accent: "teal" | "magenta" | "yellow" | "green";
  live?: string;
  source?: string;
};

export const projectMetas: ProjectMeta[] = [
  {
    id: "cookforia",
    category: "Client",
    stack: ["Laravel", "Blade", "MySQL", "JS"],
    accent: "magenta",
    live: "https://cookforia.ru/",
    source: "https://github.com/DoczzzMega/cookforia-new",
  },
  {
    id: "bumwerk",
    category: "Client",
    stack: ["Laravel", "PHP", "SCSS", "JS"],
    accent: "teal",
    live: "https://bumwerk.ru/",
  },
  {
    id: "suno-cleaner",
    category: "AI",
    stack: ["Laravel", "Next.js", "Demucs", "Encodec"],
    accent: "green",
    source: "https://github.com/DoczzzMega/suno-cleaner",
  },
  {
    id: "ai-secretary",
    category: "AI",
    stack: ["Python", "Vue 3", "vLLM", "XTTS v2", "Whisper"],
    accent: "yellow",
    live: "https://shaerware.digital/",
    source: "https://github.com/DoczzzMega/AI_Secretary_System",
  },
  {
    id: "react-pizza",
    category: "Frontend",
    stack: ["React", "Redux Toolkit", "TypeScript", "SCSS"],
    accent: "teal",
    live: "https://react-pizza-v2-items-by-id.vercel.app/",
    source: "https://github.com/DoczzzMega/react-pizza-v2",
  },
  {
    id: "vue-sneakers",
    category: "Frontend",
    stack: ["Vue 3", "Vite", "Tailwind", "Pinia"],
    accent: "magenta",
    live: "https://vue-sneakers-jet.vercel.app",
    source: "https://github.com/DoczzzMega/vue_sneakers",
  },
  {
    id: "hotel-booking",
    category: "Frontend",
    stack: ["SCSS", "BEM", "HTML", "JS"],
    accent: "yellow",
    live: "https://hotel-booking-delta.vercel.app",
    source: "https://github.com/DoczzzMega/Hotel-Booking",
  },
  {
    id: "video-player",
    category: "Frontend",
    stack: ["HTML5", "JS", "CSS"],
    accent: "green",
    live: "https://custom-video-player-sandy-xi.vercel.app",
    source: "https://github.com/DoczzzMega/custom_video-player",
  },
  {
    id: "claude-progressline",
    category: "Tool",
    stack: ["PowerShell", "Claude Code", "CLI"],
    accent: "magenta",
    source: "https://github.com/DoczzzMega/claude-progressline",
  },
];

export const navItemKeys = ["home", "about", "skills", "projects", "contact"] as const;

export const navItemGlyphs: Record<(typeof navItemKeys)[number], string> = {
  home: "00",
  about: "01",
  skills: "02",
  projects: "03",
  contact: "04",
};
