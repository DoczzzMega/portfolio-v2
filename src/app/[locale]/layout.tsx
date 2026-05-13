import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Manrope, JetBrains_Mono } from "next/font/google";
import { routing, type Locale } from "@/i18n/routing";
import "../globals.scss";

const display = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-mono",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata = {
  title: "Roman — Fullstack Developer",
  description:
    "Fullstack developer building motion-rich frontends and resilient Laravel/AI backends.",
  metadataBase: new URL("https://potfolio-v2-phi.vercel.app"),
  openGraph: {
    title: "Roman — Fullstack Developer",
    description:
      "Interfaces that feel alive. Systems that stay quiet. Laravel · React · Vue · AI.",
    type: "website",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${display.variable} ${mono.variable}`}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
