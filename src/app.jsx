import { useState, useEffect, useRef } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black text-white font-sans">
      <LoadingScreen />
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section
          id="hero"
          ref={(el) => (sectionsRef.current[0] = el)}
          className="min-h-screen flex items-center justify-center"
        >
          <Hero />
        </section>

        <section
          id="skills"
          ref={(el) => (sectionsRef.current[1] = el)}
          className="min-h-screen py-20"
        >
          <Skills />
        </section>

        <section
          id="experience"
          ref={(el) => (sectionsRef.current[2] = el)}
          className="min-h-screen py-20"
        >
          <Experience />
        </section>

        <section
          id="projects"
          ref={(el) => (sectionsRef.current[3] = el)}
          className="min-h-screen py-20"
        >
          <Projects />
        </section>

        <section
          id="contact"
          ref={(el) => (sectionsRef.current[4] = el)}
          className="min-h-screen py-20"
        >
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
