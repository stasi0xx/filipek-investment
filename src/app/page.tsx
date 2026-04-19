import Nav         from "@/components/Nav";
import Hero        from "@/components/Hero";
import StatsBar    from "@/components/StatsBar";
import VideoScroll from "@/components/VideoScroll";
import About       from "@/components/About";
import Gallery     from "@/components/Gallery";
import Dom         from "@/components/Dom";
import Etapy       from "@/components/Etapy";
import Lokalizacja from "@/components/Lokalizacja";
import Kontakt     from "@/components/Kontakt";
import Footer      from "@/components/Footer";
import Cursor      from "@/components/Cursor";

export default function Home() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <VideoScroll />
        <About />
        <Gallery />
        <Dom />
        <Etapy />
        <Lokalizacja />
        <Kontakt />
      </main>
      <Footer />
    </>
  );
}
