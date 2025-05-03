import React from "react";

const Projects = ({ projects }) => {
  return (
    <div className="projects">
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h3 className="project-name">{project.name}</h3>
          <ul className="project-details">
            {project.details.map((detail, idx) => (
              <li key={idx}>
                {detail.startsWith("Technologies:") ? (
                  <>
                    <strong>Technologies:</strong>
                    <em>{detail.replace("Technologies:", "")}</em>
                  </>
                ) : (
                  detail
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Projects;
