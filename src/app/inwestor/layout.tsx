import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O inwestorze — Filipek Investment Sp. z o.o.",
  description:
    "Filipek Investment Sp. z o.o. — deweloper inwestycji Nowy Relax w Ciciborze Dużym. Poznaj filozofię budowania i podejście do jakości wykonania.",
  openGraph: {
    title: "O inwestorze — Filipek Investment | Nowy Relax",
    description:
      "Poznaj Filipek Investment — dewelopera inwestycji Nowy Relax w Ciciborze Dużym koło Białej Podlaskiej.",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Filipek Investment — deweloper inwestycji Nowy Relax",
      },
    ],
  },
};

export default function InwestorLayout({ children }: { children: React.ReactNode }) {
  return children;
}
