import React from "react";

const Skills = ({ skills }) => {
  return (
    <div className="skills">
      <h3 className="skills-title">Technical Skills</h3>
      <ul className="technical-skills">
        {skills.technical.map((skill, index) => (
          <li key={`tech-${index}`}>{skill}</li>
        ))}
      </ul>

      <h3 className="skills-title">Certifications</h3>
      <ul className="certifications">
        {skills.certifications.map((cert, index) => (
          <li key={`cert-${index}`}>{cert}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
