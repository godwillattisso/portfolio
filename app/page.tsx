import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main>
      <Hero />
      <Navbar />
      <Experience />
      <Projects />
    </main>
  );
}
