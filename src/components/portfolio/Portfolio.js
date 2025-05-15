import React, { useState, useEffect, useRef } from "react";
import "../../styles/Portfolio.css";
import Home from "./Home";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";
import BlogPost from "./BlogPost";
import CV from "../resume/ResumeViewer";
import { FaBriefcase, FaPencilAlt, FaSun, FaMoon } from "react-icons/fa";
import { FaUserTie, FaCode } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  // Use state to track if light theme is applied, initialized based on body class
  const [isLightTheme, setIsLightTheme] = useState(
    document.body.classList.contains("light-theme")
  );
  const themeToggleBtnRef = useRef(null);

  useEffect(() => {
    const body = document.body;

    const applyThemeClass = (theme) => {
      if (theme === "light") {
        body.classList.add("light-theme");
        // Update state when class is applied
        setIsLightTheme(true);
      } else {
        body.classList.remove("light-theme");
        // Update state when class is removed
        setIsLightTheme(false);
      }
    };

    const savedTheme = localStorage.getItem("theme");
    // Apply theme on mount and initialize state
    applyThemeClass(savedTheme === "light" ? "light" : "dark");

    const themeToggleBtn = themeToggleBtnRef.current;

    if (themeToggleBtn) {
      const handleToggleClick = () => {
        // Toggle the 'light-theme' class on the body
        const themeWasLight = body.classList.contains("light-theme"); // Check before toggling
        if (themeWasLight) {
          body.classList.remove("light-theme");
          setIsLightTheme(false); // Update state
          localStorage.setItem("theme", "dark"); // Save preference
        } else {
          body.classList.add("light-theme");
          setIsLightTheme(true); // Update state
          localStorage.setItem("theme", "light"); // Save preference
        }
      };

      themeToggleBtn.addEventListener("click", handleToggleClick);

      return () => {
        themeToggleBtn.removeEventListener("click", handleToggleClick);
      };
    }
  }, []); // Empty dependency array ensures this runs once on mount

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

  // Use the state variable to determine which icon to show
  return (
    <div className="portfolio-container">
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
            <FaUserTie style={{ marginRight: "6px" }} /> Resume{" "}
          </li>
          <li onClick={() => setActiveSection("contact")}>
            <AiOutlineMail style={{ marginRight: "6px" }} /> Contact
          </li>

          <li>
            <button
              id="theme-toggle"
              ref={themeToggleBtnRef}
              className="theme-toggle-button"
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
