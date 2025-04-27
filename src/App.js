import React, { useState } from "react";
import { resumeData } from "./data";
import Header from "./components/Header";
import Section from "./components/Section";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import TechnicalSkills from "./components/TechnicalSkills";
import Certifications from "./components/Certifications";
import "./styles/App.css";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle("dark-theme", !isDarkTheme);
  };

  return (
    <div className={`resume-container ${isDarkTheme ? "dark" : ""}`}>
      {/* Theme Toggle Button */}
      <button className="theme-toggle" onClick={toggleTheme}>
        {isDarkTheme ? "☀️ Light" : "🌙 Dark"}
      </button>

      <Header
        name={resumeData.name}
        title={resumeData.title}
        contact={resumeData.contact}
      />

      <Section title="Professional Summary">
        <p className="summary">{resumeData.summary}</p>
      </Section>

      {/* Flex Container for Technical Skills and Certifications */}
      <div className="side-by-side-sections">
        <Section title="Technical Skills">
          <TechnicalSkills skills={resumeData.skills.technical} />
        </Section>

        <Section title="Certifications">
          <Certifications certifications={resumeData.skills.certifications} />
        </Section>
      </div>

      <Section title="Work Experience">
        {resumeData.experience.map((exp, index) => (
          <Experience key={index} experience={exp} />
        ))}
      </Section>

      {/* Flex Container for Education and Internships */}
      <div className="side-by-side-sections">
        <Section title="Education">
          {resumeData.education.map((edu, index) => (
            <Education key={index} education={edu} />
          ))}
        </Section>
        <Section title="Internships">
          {resumeData.internships.map((internship, index) => (
            <div key={index} className="internship">
              <h3 className="internship-company">{internship.company}</h3>
              <p className="name-duration">
                <span className="internship-name">{internship.name}</span> -
                <span className="duration">{internship.duration}</span>
              </p>
              <ul className="internship-details">
                {internship.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </Section>
      </div>

      <Section title="Projects - Github Repositories">
        <Projects projects={resumeData.projects} />
      </Section>
    </div>
  );
}

export default App;
