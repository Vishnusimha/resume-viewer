import HID1 from "../../assets/HID Mobile Access one.png";
import HID2 from "../../assets/HID Mobile Access two.png";
import HID3 from "../../assets/HID Mobile Access three.png";
import HID4 from "../../assets/HID Mobile Access four.png";
import HID5 from "../../assets/HID Mobile Access five.png";
import AQM1 from "../../assets/work/AQM/AdafruitAndRaspberryPi4.jpg";
import AQM2 from "../../assets/work/AQM/AQMhardware.jpg";
import AQM3 from "../../assets/work/AQM/AQMhardware2.jpg";
import AQM4 from "../../assets/work/AQM/Shell logs 2023-07-21 at 12.12.18 p.m..png";
import AQM5 from "../../assets/work/AQM/While collecting sensor data with window opened.png";
import AQM6 from "../../assets/work/AQM/AirQualityEmailAlert.png";
import AQM7 from "../../assets/work/AQM/temperature_humidity_data_2023-08-05T21_41_29+0100.png";
import AQM8 from "../../assets/work/AQM/24_hours_data_2023-08-05T21_41_29+0100.png";
import AQM9 from "../../assets/work/AQM/co2_data_2023-08-05T21_41_29+0100.png";
import AQM10 from "../../assets/work/AQM/ProjectBoard1.png";
import AQM11 from "../../assets/work/AQM/ProjectBoard2.png";
import AQM12 from "../../assets/work/AQM/AQMMobileApp1.jpg";
import AQM13 from "../../assets/work/AQM/AQMMobileApp2.jpg";
import AQM14 from "../../assets/work/AQM/Intelligent Indoor Air Quality and Ventilation Management in Confined Spaces using IoT - 22262621 - Vishnu Simha Dussa.pdf";

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
      media: [HID1, HID2, HID3, HID4, HID5],
      category: "Mobile Development",
      links: [
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
      media: [
        AQM1,
        AQM2,
        AQM3,
        AQM4,
        AQM5,
        AQM6,
        AQM7,
        AQM8,
        AQM9,
        AQM10,
        AQM11,
        AQM12,
        AQM13,
        AQM14,
      ],
      category: "IoT",
      links: [
        {
          type: "github",
          url: "https://github.com/Vishnusimha/IndoorAirQualityEE5003",
        },
        {
          type: "demo",
          url: "https://github.com/Vishnusimha/IndoorAirQualityEE5003/blob/main/README.md",
        },
        {
          type: "pdf",
          url: AQM14,
        },
      ],
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
      media: [],
      category: "Mobile Development",
      links: [
        {
          type: "github",
          url: "https://github.com/Vishnusimha/FeaturesCompose",
        },
        {
          type: "github",
          url: "https://github.com/Vishnusimha/FeaturesXml",
        },
      ],
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
      links: [
        { type: "github", url: "https://github.com/Vishnusimha/StocKeeper" },
      ],
    },
    {
      name: "Full-Stack Web Applications",
      description:
        "Built web platforms for an online business and takeaway restaurant using Spring Boot and MySQL. Included chat functionality with microservices integrated into an Android app (MVVM architecture).",
      technologies: ["Spring Boot", "MySQL", "Java", "Microservices", "MVVM"],
      media: [],
      category: "Full-Stack Development",
      links: [
        { type: "github", url: "https://github.com/Vishnusimha/cloudnine" },
        { type: "github", url: "https://github.com/Vishnusimha/webapp" },
        { type: "github", url: "https://github.com/Vishnusimha/ee417-project" },
      ],
    },
    {
      name: "Weather Dashboard – React Project",
      description:
        "Developed a responsive weather dashboard using React and OpenWeatherMap API. Features include data fetching, error handling, and real-time UI updates. Deployed via GitHub Pages.",
      technologies: ["React", "JavaScript", "REST API", "CSS"],
      media: [],
      category: "Web Development",
      links: [
        {
          type: "github",
          url: "https://github.com/Vishnusimha/react-weather-dashboard",
        },
        {
          type: "demo",
          url: "https://vishnusimha.github.io/react-weather-dashboard/",
        },
      ],
    },
    {
      name: "Java Client-Server Application",
      description:
        "Created a multi-robot control application with real-time coordination via a Java Swing GUI, demonstrating concurrent communication and GUI design.",
      technologies: ["Java", "Swing", "Client-Server Architecture"],
      media: [],
      category: "Software Systems",
      links: [
        {
          type: "github",
          url: "https://github.com/Vishnusimha/JavaClientServerApplication",
        },
      ],
    },
    {
      name: "Human Activity Recognition - Data Analysis and ML",
      description:
        "Built a predictive model using supervised learning on sensor data from the Extrasensory dataset. Performed feature engineering, performance analysis, and model selection.",
      technologies: ["Python", "Jupyter Notebook", "Pandas", "NumPy", "ML"],
      media: [],
      category: "Data Science / Machine Learning",
      links: [
        { type: "github", url: "https://github.com/Vishnusimha/GoogleCollab" },
        {
          type: "demo",
          url: "https://github.com/Vishnusimha/GoogleCollab/blob/main/README.md",
        },
      ],
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
                      ) : link.type === "demo" ? (
                        <>
                          <FiExternalLink /> Live Demo
                        </>
                      ) : link.type === "pdf" ? (
                        <>
                          <FiExternalLink /> View Document
                        </>
                      ) : null}
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
