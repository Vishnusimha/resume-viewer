import React from "react";

const Internship = ({ internship }) => {
  return (
    <div className="internship">
      <h3 className="internship-company">{internship.company}</h3>
      <p className="name-duration">
        <span className="name-highlight">{internship.name}</span>
        {internship.duration && (
          <>
            {" - "}
            <span className="duration">{internship.duration}</span>
          </>
        )}
      </p>
      <ul className="internship-details">
        {internship.details.map((detail, idx) => (
          <li key={idx}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default Internship;
