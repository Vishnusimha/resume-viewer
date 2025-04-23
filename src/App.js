import React from "react";
import { resumeData } from "./data";
import Header from "./components/Header";
import Section from "./components/Section";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import "./styles/App.css";

function App() {
  return (
    <div className="resume-container">
      <Header
        name={resumeData.name}
        title={resumeData.title}
        contact={resumeData.contact}
      />

      <Section title="Professional Summary">
        <p className="summary">{resumeData.summary}</p>
      </Section>

      <Section title="Technical Skills">
        <Skills skills={resumeData.skills} />
      </Section>

      <Section title="Work EXPERIENCE">
        {resumeData.experience.map((exp, index) => (
          <Experience key={index} experience={exp} />
        ))}
      </Section>

      <Section title="Education">
        {resumeData.education.map((edu, index) => (
          <Education key={index} education={edu} />
        ))}
      </Section>

      <Section title="Internships">
        {resumeData.internships.map((internship, index) => (
          <div key={index} className="internship">
            <h3 className="internship-company">{internship.company}</h3>
            {internship.duration && (
              <p className="internship-duration">{internship.duration}</p>
            )}
            <ul className="internship-details">
              {internship.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </Section>

      <Section title="Projects - Github Repositories">
        <Projects projects={resumeData.projects} />
      </Section>
    </div>
  );
}

export default App;
