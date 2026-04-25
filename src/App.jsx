import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Volunteering from "./components/Volunteering";
import Projects from "./sections/Projects";
import Github from "./components/Github";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="pb-10 sm:pb-12">
        <Hero />
        <Skills />
        <Certifications />
        <Volunteering />
        <Projects />
        <Github />
        <Contact />
      </main>
    </div>
  );
}
