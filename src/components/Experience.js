import React from "react";

const Experience = ({ experience }) => {
  return (
    <div className="experience">
      <h3 className="company">{experience.company}</h3>
      <p className="position-duration">
        <span className="position">{experience.position}</span> -
        <span className="duration"> {experience.duration}</span>
      </p>
      <ul className="experience-details">
        {experience.details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
