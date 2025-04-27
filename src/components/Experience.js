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
    "unit, UI, and integration tests",
    "RESTful APIs",
    "Spring MVC",
    "Spring Data",
    "Spring Security",
    "OAuth2",
    "JWT",
    "RBAC",
    "Redis",
    "Memcached",
    "Kafka and RabbitMQ",
    "CI/CD pipelines",
    "Jenkins, Github, Kubernetes",
    "SonarQube",
    "JUnit, Mockito, Espresso, and Spring Test",
    "MVVM architecture",
    "SOLID principles",
    "NFC/BLE communication",
    "XML and Jetpack Compose",
    "REST and GraphQL APIs",
    "Retrofit, OkHttp, Coroutines, and Room",
    "Dexguard obfuscation and automated AAR testing",
    "Spot Awards",
    "SAFe Agile environment",
    "Scrum ceremonies as Scrum Master",
    "Project Managers, Business Analysts, and UI/UX teams",
    "POCs for UI components",
    "release notes",
    "mentoring junior developers",
    "technical specifications, API documentation, and deployment processes",
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
        {experience.details.map((detail, index) => (
          <li key={index}>
            <strong className="side-heading">{detail.heading}</strong>
            <ul>
              {detail.items.map((item, itemIndex) => (
                <li key={itemIndex}>{highlightKeywords(item)}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
