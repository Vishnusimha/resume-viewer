import React from "react";
import awsCloudLogo from "../../assets/aws-certified-cloud-practitioner.png";
import awsSaaLogo from "../../assets/aws-certified-solutions-architect-associate.png";

const Certifications = ({ certifications }) => {
  return (
    <div className="certifications-section">
      <ul className="certifications-list">
        {certifications.map((cert, index) => (
          <li key={`cert-${index}`}>
            {cert.includes(":") ? (
              <>
                <strong>{cert.split(":")[0]}:</strong>{" "}
                {cert.split(":").slice(1).join(":")}
              </>
            ) : (
              cert
            )}
          </li>
        ))}
      </ul>

      <div className="certification-logos">
        <img src={awsCloudLogo} alt="AWS Cloud Practitioner Logo" />
        <img src={awsSaaLogo} alt="AWS Solutions Architect Associate Logo" />
      </div>
    </div>
  );
};

export default Certifications;
