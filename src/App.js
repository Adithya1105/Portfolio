import React, { useEffect } from "react";
import styles from "./App.module.css";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div className={styles.container}>
      <Navbar />
      <main>
        {/* full-bleed section out of the centered main */}
        <section
          id="introduction"
          className={styles.introSection}
        >
          <Introduction />
        </section>

        <section id="education" data-aos="fade-up">
          <Education />
        </section>
        <section id="experience" data-aos="fade-up">
          <Experience />
        </section>
        <section id="certifications" data-aos="fade-up">
          <Certifications />
        </section>
        <section id="projects" data-aos="fade-up">
          <Projects />
        </section>
        <section id="contact" data-aos="fade-up">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
