import React, { useState } from "react";
import "../../styles/Portfolio.css";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("about");

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "resume":
        return <Resume />;
      case "contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="portfolio-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <h1 className="portfolio-title">VS</h1>
        <ul className="nav-links">
          <li onClick={() => setActiveSection("about")}>About</li>
          <li onClick={() => setActiveSection("projects")}>Projects</li>
          <li onClick={() => setActiveSection("resume")}>Resume</li>
          <li onClick={() => setActiveSection("contact")}>Contact</li>
        </ul>
      </nav>

      {/* Render only the selected section */}
      <div className="section-container">{renderSection()}</div>
    </div>
  );
};

export default Portfolio;
