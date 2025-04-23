import React from "react";

const Certifications = ({ certifications }) => {
  return (
    <div className="certifications-section">
      <ul className="certifications-list">
        {certifications.map((cert, index) => (
          <li key={`cert-${index}`}>
            {cert.includes(":") ? (
              <>
                <strong>{cert.split(":")[0]}:</strong>
                {cert.split(":").slice(1).join(":")}
              </>
            ) : (
              cert
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certifications;
