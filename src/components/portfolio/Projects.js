import a from "../../assets/a.png";
import b from "../../assets/b.png";
import c from "../../assets/c.png";
import React, { useState } from "react";
import {
  FiGithub,
  FiExternalLink,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const Projects = React.forwardRef((props, ref) => {
  const projects = [
    {
      name: "HID Mobile Access",
      description:
        "Contributed to the development and maintenance of HID Mobile Access, including app, SDK, and Android watch features. Worked in an agile team, handled sprint stories and customer issues using JIRA.",
      technologies: [
        "Kotlin",
        "Java",
        "Jetpack Compose",
        "XML",
        "Retrofit",
        "Room",
        "Hilt",
        "Firebase",
        "DataStore",
        "Coroutines",
        "Material Design",
        "Navigation",
      ],
      media: [a, b, c],
      category: "Mobile Development",
      links: [
        { type: "github", url: "https://github.com/" },
        { type: "demo", url: "https://www.youtube.com/watch?v=Yfy0Y6YIJ7c" },
      ],
    },
    {
      name: "Intelligent Indoor Air Quality Monitoring System",
      description:
        "Designed and implemented an IoT-based system to monitor CO2, humidity, and temperature using Raspberry Pi and Adafruit SCD40. Real-time data visualization and alerting through a custom Android app.",
      technologies: [
        "Python Flask",
        "Raspberry Pi",
        "Linux",
        "Edge Computing",
        "Cloud Storage",
        "Sensor Data Analysis",
      ],
      media: [a, b, c],
      category: "IoT",
      links: [],
    },
    {
      name: "Feature-Rich Android Applications",
      description:
        "Created modern Android apps using Kotlin with Jetpack Compose and XML views, integrating technologies like Retrofit, Room, Firebase, Hilt, and Coroutines to deliver scalable, maintainable codebases.",
      technologies: [
        "Kotlin",
        "Jetpack Compose",
        "XML",
        "Retrofit",
        "Room",
        "Firebase",
        "Hilt",
        "Coroutines",
        "OkHttp",
      ],
      media: [a, b, c],
      category: "Mobile Development",
      links: [],
    },
    {
      name: "StocKeeper - Android Stock Management App",
      description:
        "Developed a feature-rich inventory management application for tracking stock, sending customizable alerts, and optimizing purchases.",
      technologies: [
        "Kotlin",
        "Jetpack Compose",
        "Retrofit",
        "Firebase",
        "Hilt",
        "Coroutines",
      ],
      media: [],
      category: "Mobile Development",
      links: [],
    },
    {
      name: "Full-Stack Web Applications",
      description:
        "Built web platforms for an online business and takeaway restaurant using Spring Boot and MySQL. Included chat functionality with microservices integrated into an Android app (MVVM architecture).",
      technologies: ["Spring Boot", "MySQL", "Java", "Microservices", "MVVM"],
      media: [],
      category: "Full-Stack Development",
      links: [],
    },
    {
      name: "Weather Dashboard – React Project",
      description:
        "Developed a responsive weather dashboard using React and OpenWeatherMap API. Features include data fetching, error handling, and real-time UI updates. Deployed via GitHub Pages.",
      technologies: ["React", "JavaScript", "REST API", "CSS"],
      media: [],
      category: "Web Development",
      links: [],
    },
    {
      name: "Java Client-Server Application",
      description:
        "Created a multi-robot control application with real-time coordination via a Java Swing GUI, demonstrating concurrent communication and GUI design.",
      technologies: ["Java", "Swing", "Client-Server Architecture"],
      media: [],
      category: "Software Systems",
      links: [],
    },
    {
      name: "Human Activity Recognition - Data Analysis and ML",
      description:
        "Built a predictive model using supervised learning on sensor data from the Extrasensory dataset. Performed feature engineering, performance analysis, and model selection.",
      technologies: ["Python", "Jupyter Notebook", "Pandas", "NumPy", "ML"],
      media: [],
      category: "Data Science / Machine Learning",
      links: [],
    },
  ];

  const [currentMediaIndex, setCurrentMediaIndex] = useState(
    Array(projects.length).fill(0)
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

  const handlePrevMedia = (projectIndex) => {
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

  const handleThumbnailClick = (projectIndex, mediaIndex) => {
    setCurrentMediaIndex((prevIndexes) =>
      prevIndexes.map((index, i) => (i === projectIndex ? mediaIndex : index))
    );
  };

  return (
    <section ref={ref} className="projects-section" id="projects">
      <div className="section-header">
        <h2 className="section-title">Projects</h2>
      </div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-card-inner">
              <div className="project-media-container">
                <div className="project-media-wrapper">
                  <img
                    src={project.media[currentMediaIndex[index]]}
                    alt={`${project.name} screenshot ${
                      currentMediaIndex[index] + 1
                    }`}
                    className="project-media"
                    loading="lazy"
                  />
                </div>

                <div className="media-controls">
                  <button
                    onClick={() => handlePrevMedia(index)}
                    className="media-control-button"
                    aria-label="Previous image"
                  >
                    <FiChevronLeft />
                  </button>
                  <button
                    onClick={() => handleNextMedia(index)}
                    className="media-control-button"
                    aria-label="Next image"
                  >
                    <FiChevronRight />
                  </button>
                </div>

                {project.media.length > 1 && (
                  <div className="media-thumbnails">
                    {project.media.slice(0, 3).map((media, mediaIndex) => (
                      <button
                        key={mediaIndex}
                        onClick={() => handleThumbnailClick(index, mediaIndex)}
                        className={`thumbnail ${
                          currentMediaIndex[index] === mediaIndex
                            ? "active"
                            : ""
                        }`}
                        aria-label={`View image ${mediaIndex + 1}`}
                      >
                        <img src={media} alt="" role="presentation" />
                      </button>
                    ))}
                    {project.media.length > 3 && (
                      <span className="thumbnail-count">
                        +{project.media.length - 3}
                      </span>
                    )}
                  </div>
                )}
              </div>

              <div className="project-content">
                <div className="project-header">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.name}</h3>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {project.links?.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`project-link ${link.type}`}
                    >
                      {link.type === "github" ? (
                        <>
                          <FiGithub /> View Code
                        </>
                      ) : (
                        <>
                          <FiExternalLink /> Live Demo
                        </>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Projects;
