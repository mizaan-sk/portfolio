import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackgroundFX from "@/components/BackgroundFX";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <SmoothScroll />
      <BackgroundFX />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
