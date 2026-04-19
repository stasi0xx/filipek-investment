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
  title: "Nowy Relax — Filipek Investment | Cicibór Duży",
  description:
    "Nowoczesne domy w Ciciborze Dużym. 122 m², 3 sypialnie, działka 590 m². 1 km od Białej Podlaskiej, blisko węzła A2.",
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
