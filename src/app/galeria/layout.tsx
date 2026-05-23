import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeria — wizualizacje i rzuty domu",
  description:
    "Galeria inwestycji Nowy Relax: wizualizacje zewnętrzne, rzuty kondygnacji i zagospodarowanie terenu. Domy w zabudowie bliźniaczej w Ciciborze Dużym.",
  openGraph: {
    title: "Galeria — Nowy Relax | Wizualizacje i rzuty domu",
    description:
      "Wizualizacje zewnętrzne, rzuty kondygnacji i zagospodarowanie terenu inwestycji Nowy Relax w Ciciborze Dużym.",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Galeria Nowy Relax — wizualizacje nowoczesnych domów",
      },
    ],
  },
};

export default function GaleriaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
