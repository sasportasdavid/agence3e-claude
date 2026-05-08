import type { Metadata } from "next";
import { Inter, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["italic", "normal"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Agence 3E — Conformité DDADUE, primes CEE optimisées, travaux pilotés.",
  description:
    "Cabinet de conseil indépendant en performance énergétique. Audit DDADUE, valorisation CEE en compétition, AMO travaux. France métropolitaine et outre-mer.",
  metadataBase: new URL("https://agence3e.fr"),
  openGraph: {
    title:
      "Agence 3E — Conformité DDADUE, primes CEE optimisées, travaux pilotés.",
    description:
      "Cabinet indépendant en performance énergétique. Un seul interlocuteur de l'audit à la mise en service.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${sourceSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
