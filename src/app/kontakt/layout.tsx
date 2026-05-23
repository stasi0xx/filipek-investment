import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt — zapytaj o dostępność domów",
  description:
    "Skontaktuj się z Filipek Investment w sprawie inwestycji Nowy Relax. Tel: +48 692 404 796, e-mail: nowyrelax@fi-invest.pl. Odpowiadamy na pytania o dostępność, rezerwację, standard i finansowanie.",
  openGraph: {
    title: "Kontakt — Nowy Relax | Filipek Investment",
    description:
      "Zapytaj o dostępność domów, rezerwację lub umów prezentację inwestycji. Tel: +48 692 404 796.",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kontakt — Nowy Relax, Filipek Investment",
      },
    ],
  },
  robots: { index: false, follow: true },
};

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
  return children;
}
