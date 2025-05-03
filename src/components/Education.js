import React from "react";

const Education = ({ education }) => {
  return (
    <div className="education">
      <h3 className="institution">{education.institution}</h3>
      <p className="degree-duration">
        <span className="name-highlight">{education.degree}</span>
        {education.duration && (
          <>
            {" - "}
            <span className="duration">{education.duration}</span>
          </>
        )}
      </p>
      <ul className="education-details">
        {education.details.map((detail, index) => (
          <li key={index}>
            {detail.startsWith("Focus:") ? (
              <>
                <strong>Focus:</strong>
                <em>{detail.replace("Focus:", "")}</em>
              </>
            ) : (
              detail
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
