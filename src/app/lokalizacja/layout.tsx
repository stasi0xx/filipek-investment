import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lokalizacja — Cicibór Duży, 1 km od Białej Podlaskiej",
  description:
    "Nowy Relax w Ciciborze Dużym — podmiejska lokalizacja zaledwie 1 km od granicy Białej Podlaskiej, kilka km od węzła autostradowego Cicibór (A2). Spokojne otoczenie z szybkim dostępem do miasta.",
  openGraph: {
    title: "Lokalizacja — Nowy Relax | Cicibór Duży, Biała Podlaska",
    description:
      "Cicibór Duży — 1 km od Białej Podlaskiej, blisko węzła A2. Własny ogród i cisza podmiejska, a wszystko co ważne kilka minut dalej.",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lokalizacja Nowy Relax — Cicibór Duży przy Białej Podlaskiej",
      },
    ],
  },
};

export default function LokalizacjaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
