import React, { useState } from "react";
import a from "../../assets/a.png";
import b from "../../assets/b.png";
import c from "../../assets/c.png";

const Projects = React.forwardRef((props, ref) => {
  const projects = [
    {
      name: "HID Mobile Access",
      description:
        "Developed a secure mobile access app using NFC/BLE communication, enabling seamless credential provisioning and access control.",
      technologies: "Kotlin, Jetpack Compose, Retrofit, Room, Firebase",
      media: [a, b, c], // Corrected paths
    },
    {
      name: "Indoor Air Quality Monitoring System",
      description:
        "Designed an IoT-based system to monitor CO2 levels, humidity, and temperature, with real-time data visualization via an Android app.",
      technologies: "Python, Flask, Raspberry Pi, Adafruit Sensors",
      media: [a, b, c], // Corrected paths
    },
    {
      name: "StocKeeper - Android Stock Management App",
      description:
        "Built an inventory management app with real-time stock tracking, customizable alerts, and purchase optimization.",
      technologies: "Kotlin, Jetpack Compose, Firebase, Coroutines",
      media: [a, b, c], // Corrected paths
    },
    {
      name: "StocKeeper - Android Stock Management App",
      description:
        "Built an inventory management app with real-time stock tracking, customizable alerts, and purchase optimization.",
      technologies: "Kotlin, Jetpack Compose, Firebase, Coroutines",
      media: [c, a, b], // Corrected paths
    },
  ];

  const [currentMediaIndex, setCurrentMediaIndex] = useState(
    Array(projects.length).fill(0) // Track media index for each project
  );

  const handleNextMedia = (projectIndex) => {
    setCurrentMediaIndex((prevIndexes) =>
      prevIndexes.map((index, i) =>
        i === projectIndex
          ? (index + 1) % projects[projectIndex].media.length
          : index
      )
    );
  };

  const handleBackMedia = (projectIndex) => {
    setCurrentMediaIndex((prevIndexes) =>
      prevIndexes.map((index, i) =>
        i === projectIndex
          ? index === 0
            ? projects[projectIndex].media.length - 1
            : index - 1
          : index
      )
    );
  };

  return (
    <section ref={ref} className="projects-section">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.name}</h3>
            <div className="project-media-container">
              <img
                src={project.media[currentMediaIndex[index]]}
                alt={`${project.name} media`}
                className="project-media"
              />
            </div>
            <div className="project-buttons">
              <button
                onClick={() => handleBackMedia(index)}
                className="project-button"
              >
                Back
              </button>
              <button
                onClick={() => handleNextMedia(index)}
                className="project-button"
              >
                Next
              </button>
            </div>
            <div className="project-content">
              <p className="project-description">{project.description}</p>
              <p className="project-technologies">
                <strong>Technologies:</strong> {project.technologies}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Projects;
