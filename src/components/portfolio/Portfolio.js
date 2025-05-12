import React, { useState } from "react";
import "../../styles/Portfolio.css";
import Home from "./Home";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";
import BlogPost from "./BlogPost";
import CV from "../resume/ResumeViewer";
import { AiOutlineHome } from "react-icons/ai";
import { BsCodeSlash, BsPersonLinesFill } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import { MdOutlineContactMail } from "react-icons/md";

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
        return <BlogPost fileName="post1.md" />;
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
            <BsCodeSlash style={{ marginRight: "6px" }} /> Projects
          </li>
          <li onClick={() => setActiveSection("CV")}>
            <CgFileDocument style={{ marginRight: "6px" }} /> CV
          </li>
          <li onClick={() => setActiveSection("resume")}>
            <BsPersonLinesFill style={{ marginRight: "6px" }} /> Resume
          </li>
          <li onClick={() => setActiveSection("Blogs")}>
            <CgFileDocument style={{ marginRight: "6px" }} /> Blogs
          </li>
          <li onClick={() => setActiveSection("contact")}>
            <MdOutlineContactMail style={{ marginRight: "6px" }} /> Contact
          </li>
        </ul>
      </nav>

      {/* Render only the selected section */}
      <div className="section-container">{renderSection()}</div>
    </div>
  );
};

export default Portfolio;
