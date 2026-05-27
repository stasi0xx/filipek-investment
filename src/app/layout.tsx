import type { Metadata } from "next";
import { Instrument_Serif, Inter_Tight } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://nowyrelax.pl"),
  title: {
    default: "Nowy Relax — domy w Ciciborze Dużym | Filipek Investment",
    template: "%s | Nowy Relax",
  },
  description:
    "Kameralna inwestycja deweloperska w Ciciborze Dużym — 8 nowoczesnych domów, 1 km od Białej Podlaskiej. Dom 122 m², garaż w bryle budynku, działka ok. 450 m². Cena 650 000 zł brutto. Standard deweloperski+.",
  keywords: [
    "domy Biała Podlaska",
    "Nowy Relax",
    "Cicibór Duży",
    "domy na sprzedaż lubelskie",
    "dom z garażem",
    "nowe domy",
    "Filipek Investment",
    "inwestycja deweloperska Biała Podlaska",
  ],
  authors: [{ name: "Filipek Investment Sp. z o.o." }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    siteName: "Nowy Relax — Filipek Investment",
    title: "Nowy Relax — nowoczesne domy w Ciciborze Dużym",
    description:
      "8 nowoczesnych domów, 1 km od Białej Podlaskiej. Dom 122 m², garaż w bryle budynku, działka ok. 450 m². Cena 650 000 zł. Etap 1 w trakcie budowy.",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nowy Relax — nowoczesne domy w Ciciborze Dużym",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nowy Relax — domy w Ciciborze Dużym",
    description:
      "8 nowoczesnych domów, 1 km od Białej Podlaskiej. Dom 122 m², garaż, działka ok. 450 m². Cena 650 000 zł.",
    images: ["/assets/og-image.png"],
  },
  icons: {
    icon: "/assets/logo/filipek-mark.svg",
    shortcut: "/assets/logo/filipek-mark.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${instrumentSerif.variable} ${interTight.variable}`}>
      <body>{children}</body>
    </html>
  );
}
