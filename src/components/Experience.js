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
    "Promotions:",
    "Kotlin",
    "Java",
    "Spring Boot",
    "GraphQL",
    "CI/CD",
    "Agile",
    "REST APIs",
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
    "ServiceNow",
    "SAFe",
    "SDLC",
    "Scrum Master",
    "Spot Awards",
    "IoT",
    "(PMs, BAs, UI/UX)", // Multi-word phrase
    "80%+ code coverage",
    "MySQL/PostgreSQL",
    "Dependency Injection",
    "Authentication",
    "Authorisation",
    "Secure credential provisioning",
    "Access control",
    "Physical access control systems",
    "UI development",
    "XML",
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
