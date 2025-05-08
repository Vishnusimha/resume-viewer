import React, { useState } from "react";
import "../../styles/Portfolio.css";
import Home from "./Home";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";
import CV from "../resume/ResumeViewer";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <Home />;
      case "projects":
        return <Projects />;
      case "resume":
        return <Resume />;
      case "CV":
        return <CV />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="portfolio-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <h1
          className="portfolio-title"
          onClick={() => {
            setActiveSection("home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          style={{ cursor: "pointer" }}
        >
          VS
        </h1>

        <ul className="nav-links">
          <li onClick={() => setActiveSection("projects")}>Projects</li>
          <li onClick={() => setActiveSection("CV")}>CV</li>
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
