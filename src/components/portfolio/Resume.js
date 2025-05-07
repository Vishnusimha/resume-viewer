import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import resumePDF from "../../assets/Vishnu Simha Software Engineer Resume.pdf";

const Resume = React.forwardRef((props, ref) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleViewResume = () => navigate("/resume-viewer");

  return (
    <section ref={ref} className="section resume-section">
      <h2 className="resume-title">Resume</h2>
      <p className="resume-download-text">
        Download my resume{" "}
        <a
          href={resumePDF}
          download="Vishnu_Simha_Resume.pdf"
          className="resume-download-link"
        >
          here
        </a>
      </p>
      <button onClick={handleViewResume} className="resume-view-button">
        View Full Resume
      </button>
      <div className="resume-embed-container">
        {loading && <div className="resume-loading">Loading resume...</div>}
        {error && (
          <div className="resume-error">
            Failed to load preview.{" "}
            <a
              href={resumePDF}
              download="Vishnu_Simha_Resume.pdf"
              className="resume-download-link"
            >
              Download instead
            </a>
          </div>
        )}
        <iframe
          src={resumePDF}
          className="resume-iframe"
          title="Resume PDF Viewer"
          onLoad={() => setLoading(false)}
          onError={() => {
            setError(true);
            setLoading(false);
          }}
          style={{ display: error ? "none" : "block" }}
        />
      </div>
    </section>
  );
});

export default Resume;
