import React, { useState } from "react";
import "../../styles/Portfolio.css";
import Home from "./Home";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";
import BlogPost from "./BlogPost";
import CV from "../resume/ResumeViewer";
import { FaBriefcase, FaPencilAlt } from "react-icons/fa";
import { FaUserTie, FaCode } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

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
      case "Blogs":
        return <BlogPost />;
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
          <li onClick={() => setActiveSection("projects")}>
            <FaCode style={{ marginRight: "6px" }} /> Projects
          </li>
          <li onClick={() => setActiveSection("Blogs")}>
            <FaPencilAlt style={{ marginRight: "6px" }} /> Blogs
          </li>
          <li onClick={() => setActiveSection("CV")}>
            <FaBriefcase style={{ marginRight: "6px" }} /> CV
          </li>
          <li onClick={() => setActiveSection("resume")}>
            <FaUserTie style={{ marginRight: "6px" }} /> Resume
          </li>
          <li onClick={() => setActiveSection("contact")}>
            <AiOutlineMail style={{ marginRight: "6px" }} /> Contact
          </li>
        </ul>
      </nav>

      {/* Render only the selected section */}
      <div className="section-container">{renderSection()}</div>
    </div>
  );
};

export default Portfolio;
