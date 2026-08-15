import Preloader from "@/components/Preloader";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Process from "@/components/Process";
import Stack from "@/components/Stack";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <>
      <Preloader />
      <Cursor />
      <Nav />
      <SmoothScroll>
        <main>
          <Hero />
          <About />
          <Work />
          <Process />
          <Stack />
          <Education />
          <Contact />
        </main>
        <Footer />
      </SmoothScroll>
    </>
  );
}
