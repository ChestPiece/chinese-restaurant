import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import ChefSpotlight from "@/components/ChefSpotlight";
import AwardsStrip from "@/components/AwardsStrip";
import Testimonials from "@/components/Testimonials";
import Reservations from "@/components/Reservations";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import GsapProvider from "@/components/GsapProvider";

export default function Home() {
  return (
    <GsapProvider>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <ChefSpotlight />
        <AwardsStrip />
        <Testimonials />
        <Reservations />
        <Newsletter />
      </main>
      <Footer />
    </GsapProvider>
  );
}
