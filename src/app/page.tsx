import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import VideoScroll from "@/components/VideoScroll";
import About from "@/components/About";
import DomOpis from "@/components/DomOpis";
import DlaczegoNowyRelax from "@/components/DlaczegoNowyRelax";
import LokalizacjaBanner from "@/components/LokalizacjaBanner";
import PoznajInwestora from "@/components/PoznajInwestora";
import BuildingTimeline from "@/components/BuildingTimeline";
import FinalCTA from "@/components/FinalCTA";
import Gallery from "@/components/Gallery";
import Dom from "@/components/Dom";
import Etapy from "@/components/Etapy";
import Lokalizacja from "@/components/Lokalizacja";
import Kontakt from "@/components/Kontakt";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";

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
        <DomOpis />
        <DlaczegoNowyRelax />
        <LokalizacjaBanner />
        <PoznajInwestora />
        <BuildingTimeline />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
