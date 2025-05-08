import React, { useState } from "react";
import { resumeData } from "../../data";
import Header from "./Header";
import Section from "./Section";
import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects";
import TechnicalSkills from "./TechnicalSkills";
import Certifications from "./Certifications";
import Internship from "./Internship";
import "../../styles/ResumeViewer.css";

function ResumeViewer() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div
      className={`resume-viewer-container ${isDarkTheme ? "dark-theme" : ""}`}
    >
      <div className="resume-container">
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

        <div className="side-by-side-sections">
          <Section title="Education">
            {resumeData.education.map((edu, index) => (
              <Education key={index} education={edu} />
            ))}
          </Section>
          <Section title="Internships">
            {resumeData.internships.map((internship, index) => (
              <Internship key={index} internship={internship} />
            ))}
          </Section>
        </div>
        <Section title="Projects - Github Repositories">
          <Projects projects={resumeData.projects} />
        </Section>
      </div>
    </div>
  );
}

export default ResumeViewer;
