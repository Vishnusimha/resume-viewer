import React from "react";
import { useNavigate } from "react-router-dom";

const Resume = React.forwardRef((props, ref) => {
  const navigate = useNavigate();

  const handleViewResume = () => {
    navigate("/resume-viewer"); // Navigate to the ResumeViewer route
  };

  return (
    <section ref={ref} className="section">
      <h2>Resume</h2>
      <p>
        Download my resume <a href="/path-to-resume.pdf">here</a>.
      </p>
      <button onClick={handleViewResume} className="view-resume-button">
        View Full Resume
      </button>
    </section>
  );
});

export default Resume;
