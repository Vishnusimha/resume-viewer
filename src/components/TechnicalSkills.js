import React from "react";

const TechnicalSkills = ({ skills }) => {
  return (
    <div className="technical-skills-section">
      <ul className="technical-skills-list">
        {skills.map((skill, index) => (
          <li key={`tech-${index}`}>
            {skill.includes(":") ? (
              <>
                <strong>{skill.split(":")[0]}:</strong>
                {skill.split(":").slice(1).join(":")}
              </>
            ) : (
              skill
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechnicalSkills;
