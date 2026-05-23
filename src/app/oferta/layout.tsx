import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oferta — dom 122 m², garaż, działka 450 m², 630 000 zł",
  description:
    "Szczegóły oferty Nowy Relax: dom 122 m² w zabudowie bliźniaczej z garażem w bryle budynku i działką ok. 450 m². Cena 630 000 zł brutto, 0 zł PCC. Standard deweloperski+. Cicibór Duży, 1 km od Białej Podlaskiej.",
  openGraph: {
    title: "Oferta — Nowy Relax | Dom 122 m², garaż, 630 000 zł",
    description:
      "Dom 122 m², garaż w bryle budynku, działka ok. 450 m². Cena 630 000 zł brutto, bez podatku PCC. Standard deweloperski+ z pompą ciepła i rekuperacją.",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Oferta Nowy Relax — dom 122 m² z garażem w Ciciborze Dużym",
      },
    ],
  },
};

export default function OfertaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
