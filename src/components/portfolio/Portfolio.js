import React, { useRef } from "react";
import "../../styles/Portfolio.css"; // Import the CSS file for styling
import About from "./About"; // Import the About component
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";

const Portfolio = () => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="portfolio-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <h1 className="portfolio-title">Vishnu Simha Dussa</h1>
        <ul className="nav-links">
          <li onClick={() => scrollToSection(aboutRef)}>About</li>
          <li onClick={() => scrollToSection(projectsRef)}>Projects</li>
          <li onClick={() => scrollToSection(resumeRef)}>Resume</li>
          <li onClick={() => scrollToSection(contactRef)}>Contact</li>
        </ul>
      </nav>

      {/* Sections */}
      <About ref={aboutRef} />
      <Projects ref={projectsRef} />
      <Resume ref={resumeRef} />
      <Contact ref={contactRef} />
    </div>
  );
};

export default Portfolio;
