import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Cursor from "@/components/Cursor/Cursor";
import Hero from "@/components/Hero/Hero";
import MatrixRain from "@/components/MatrixRain/MatrixRain";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";
import Scanlines from "@/components/Scanlines/Scanlines";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <>
      <MatrixRain />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Scanlines />
    </>
  );
}
