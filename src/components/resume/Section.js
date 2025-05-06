import React from "react";

const Section = ({ title, children }) => {
  return (
    <section className="resume-section">
      <h2 className="section-title">{title}</h2>
      <div className="section-content">{children}</div>
    </section>
  );
};

export default Section;
