import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.scss";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Roman — Fullstack Developer",
  description:
    "Fullstack developer building motion-rich frontends and resilient Laravel/AI backends.",
  metadataBase: new URL("https://portfolio-v2.vercel.app"),
  openGraph: {
    title: "Roman — Fullstack Developer",
    description:
      "Interfaces that feel alive. Systems that stay quiet. Laravel · React · Vue · AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
