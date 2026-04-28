import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Marquee from "@/components/sections/Marquee";
import Philosophy from "@/components/sections/Philosophy";
import Showreel from "@/components/sections/Showreel";
import Services from "@/components/sections/Services";
import WorkCarousel from "@/components/sections/WorkCarousel";
import Testimonial from "@/components/sections/Testimonial";
import Process from "@/components/sections/Process";
import ImageMosaic from "@/components/sections/ImageMosaic";
import Founders from "@/components/sections/Founders";
import Stats from "@/components/sections/Stats";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Marquee />
        <Philosophy />
        <Showreel />
        <Services />
        <WorkCarousel />
        <Testimonial />
        <Process />
        <ImageMosaic />
        <Founders />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
