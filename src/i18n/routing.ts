import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["ru", "en", "de", "es", "fr", "zh"] as const,
  defaultLocale: "ru",
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];

export const localeLabels: Record<Locale, { native: string; code: string }> = {
  ru: { native: "Русский", code: "RU" },
  en: { native: "English", code: "EN" },
  de: { native: "Deutsch", code: "DE" },
  es: { native: "Español", code: "ES" },
  fr: { native: "Français", code: "FR" },
  zh: { native: "中文", code: "ZH" },
};
