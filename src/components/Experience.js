import React from "react";

const Experience = ({ experience }) => {
  // Define the subheadings to handle differently
  const subheadings = [
    "Key Responsibilities and Tasks Performed:",
    "Project Management and Collaboration:",
    "Bonus Technical Skills | Spring boot:",
  ];

  // Define the keywords or phrases to make bold
  const keywords = [
    "HID Mobile Access",
    "Promotions:",
    "NFC/BLE",
    "HID hardware readers",
    "R&D",
    "physical access control systems",
    "XML",
    "Jetpack Compose",
    "Modernised legacy codebases",
    "REST APIs",
    "backend teams",
    "GraphQL APIs",
    "app performance",
    "tests",
    "80%+ code coverage",
    "Designed CI/CD pipelines with Jenkins and SonarQube",
    "ServiceNow",
    "SAFe Agile",
    "SDLC",
    "Spot Awards",
    "Led Agile processes",
    "Optimised release cycles",
    "Drove IoT/Mobile guild contributions",
    "Designed and deployed full-stack web applications",
    "Secured applications",
    "SAFe",
    "Kotlin",
    "Java",
    "Spring Boot",
    "GraphQL",
    "CI/CD",
    "Agile",
    "Microservices",
    "Android",
    "MVVM",
    "SOLID",
    "NFC",
    "BLE",
    "Coroutines",
    "Retrofit",
    "OkHttp",
    "Room",
    "JUnit",
    "Mockito",
    "Robolectric",
    "Espresso",
    "SonarQube",
    "Dexguard",
    "Scrum Master",
    "Spot Awards",
    "IoT",
    "(PMs, BAs, UI/UX)", // Multi-word phrase
    "MySQL/PostgreSQL",
    "Dependency Injection",
    "Authentication",
    "Authorisation",
    "Secure credential provisioning",
    "Access control",
    "Physical access control systems",
    "UI development",
  ];

  // Function to bold keywords or phrases in a string
  const highlightKeywords = (text) => {
    const regex = new RegExp(
      `(${keywords
        .map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
        .join("|")})`,
      "gi"
    );
    return text
      .split(regex)
      .map((part, index) =>
        keywords.includes(part) ? <strong key={index}>{part}</strong> : part
      );
  };

  return (
    <div className="experience">
      <h3 className="company">{experience.company}</h3>
      <p className="position-duration">
        <span className="position">{experience.position}</span> -
        <span className="duration"> {experience.duration}</span>
      </p>
      <ul className="experience-details">
        {experience.details.map((detail, index) => {
          // Check if the detail is one of the subheadings
          if (subheadings.includes(detail)) {
            return (
              <li key={index} className="subheading">
                <strong>{detail}</strong>
              </li>
            );
          }
          // Render normal text with highlighted keywords or phrases
          return <li key={index}>{highlightKeywords(detail)}</li>;
        })}
      </ul>
    </div>
  );
};

export default Experience;
