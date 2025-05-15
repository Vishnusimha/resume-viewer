import React, { useState, useEffect, useRef } from "react";
import "../../styles/Portfolio.css";
import Home from "./Home";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";
import BlogPost from "./BlogPost";
import CV from "../resume/ResumeViewer";
import {
  FaBriefcase,
  FaPencilAlt,
  FaSun,
  FaMoon,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FaUserTie, FaCode } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isLightTheme, setIsLightTheme] = useState(
    document.body.classList.contains("light-theme")
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const themeToggleBtnRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const body = document.body;

    const applyThemeClass = (theme) => {
      if (theme === "light") {
        body.classList.add("light-theme");
        setIsLightTheme(true);
      } else {
        body.classList.remove("light-theme");
        setIsLightTheme(false);
      }
    };

    const savedTheme = localStorage.getItem("theme");
    applyThemeClass(savedTheme === "light" ? "light" : "dark");

    const themeToggleBtn = themeToggleBtnRef.current;

    if (themeToggleBtn) {
      const handleToggleClick = () => {
        const themeWasLight = body.classList.contains("light-theme");
        if (themeWasLight) {
          body.classList.remove("light-theme");
          setIsLightTheme(false);
          localStorage.setItem("theme", "dark");
        } else {
          body.classList.add("light-theme");
          setIsLightTheme(true);
          localStorage.setItem("theme", "light");
        }
      };

      themeToggleBtn.addEventListener("click", handleToggleClick);

      return () => {
        themeToggleBtn.removeEventListener("click", handleToggleClick);
      };
    }
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

  const handleNavClick = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="portfolio-container">
      <nav className="navbar" ref={navRef}>
        <h1
          className="portfolio-title"
          onClick={() => handleNavClick("home")}
          style={{ cursor: "pointer" }}
        >
          VS
        </h1>

        <button
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
          <li onClick={() => handleNavClick("projects")}>
            <FaCode style={{ marginRight: "6px" }} /> Projects
          </li>
          <li onClick={() => handleNavClick("Blogs")}>
            <FaPencilAlt style={{ marginRight: "6px" }} /> Blogs
          </li>
          <li onClick={() => handleNavClick("CV")}>
            <FaBriefcase style={{ marginRight: "6px" }} /> CV
          </li>
          <li onClick={() => handleNavClick("resume")}>
            <FaUserTie style={{ marginRight: "6px" }} /> Resume
          </li>
          <li onClick={() => handleNavClick("contact")}>
            <AiOutlineMail style={{ marginRight: "6px" }} /> Contact
          </li>
          <li>
            <button
              id="theme-toggle"
              ref={themeToggleBtnRef}
              className="theme-toggle-button"
              aria-label="Toggle theme"
            >
              {isLightTheme ? <FaMoon /> : <FaSun />}
            </button>
          </li>
        </ul>
      </nav>

      <div className="section-container">{renderSection()}</div>
    </div>
  );
};

export default Portfolio;
