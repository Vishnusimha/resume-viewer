export const resumeData = {
  name: "Vishnu Simha Dussa",
  title: "Software Engineer",
  contact: {
    university: "Dublin City University | Ireland",
    email: "vishnusimha98@gmail.com",
    linkedin: "https://www.linkedin.com/in/vishnusimhadussa/",
    github: "https://github.com/Vishnusimha",
    phone: "+353 899595661",
  },
  summary:
    "Software Engineer with 3+ years of experience in Android development (Kotlin & Java), cloud-native solutions, and microservices using Spring Boot. Adept at designing scalable, secure, and high-performance applications while optimising user experience. Proficient in Agile methodologies (Scrum, SAFe) and collaborating with cross-functional teams. Passionate about leveraging modern technologies to build privacy-focused mobile applications.",
  skills: {
    technical: [
      "Programming & Scripting : Kotlin, Java, SQL, C++",
      "Android : Jetpack Compose, Retrofit, OkHttp, Room, Hilt, Coroutines, Flows, Pagination, Glide, Firebase, ADB, RX Java, GraphQL",
      "DevOps & Cloud : CI/CD, AWS, Docker, Kubernetes, Github Actions",
      "Web Development : Spring Boot, Microservices, HTML/CSS, React",
      "IoT: Raspberry Pi, Arduino, MQTT, ThingSpeak, Python Flask",
      "Linux : CI/CD automation and IoT tasks",
      "Development Methodologies : Agile (Scrum, SAFe), MVVM, Spring MVC",
      "Platforms : Android Studio, IntelliJ IDEA, Zeplin, Figma, Visual Studio, JIRA, Confluence",
      "Build and Automation : Maven, Gradle, Jenkins, SonarQube",
      "Version Control : Git, Bitbucket, and Sourcetree",
    ],
    certifications: [
      "AWS Certified Solution Architect - Associate: Proficient in designing secure, scalable, and resilient cloud architectures",
      "AWS Certified Cloud Practitioner",
      "Kubernetes (Udemy)",
      "Docker for Java Developers",
      "Spring Boot (TDD, Security, Spring Data)",
      "SQL (HackerRank)",
    ],
  },

  experience: [
    {
      company: "HID Global",
      position: "Software Engineer",
      duration: "April 2019 - August 2022",
      details: [
        "Promotions: Advanced from Industrial Trainee to Associate Software Engineer, and later to Software Engineer.",
        {
          heading: "Key Responsibilities and Tasks Performed",
          items: [
            "Developed a HID Mobile Access app from scratch using MVVM architecture and SOLID principles, enabling secure credential provisioning and access control via NFC/BLE communication with HID hardware readers for mobile devices, contributing to the R&D of physical access control systems.",
            "Led UI development using XML and Jetpack Compose, designing key screens and enhancing UX for seamless operator-driven and self-service workflows.",
            "Modernised legacy codebases by migrating Java modules to Kotlin, reducing code duplication by 40% and improving maintainability for long-term scalability.",
            "Integrated REST APIs with Coroutines, Retrofit, OkHttp, and Room, enabling seamless data interactions.",
            "Collaborated with backend teams and integrated GraphQL APIs for user profile, optimising data retrieval and reducing network overhead.",
            "Optimised app performance with profiling tools, reducing app load times by 30%.",
            "Implemented unit and UI tests using JUnit, Mockito, Robolectric, and Espresso, achieving 80%+ code coverage, reducing regression bugs by 25%, and streamlined QA efforts to accelerate release timelines.",
            "Designed CI/CD pipelines with Jenkins and SonarQube, enforcing quality gates that reduced post-release defects by 25% and ensured compliance with enterprise security standards.",
            "Strengthened app security by implementing code obfuscation (Dexguard) and automated AAR testing, ensuring compliance with enterprise security standards.",
            "Resolved customer issues on ServiceNow by conducting root cause analysis and debugging across Android versions, improving app reliability.",
            "Operated within a SAFe Agile environment, handling the entire SDLC from requirement analysis to deployment.",
            "Awarded twice with Spot Awards for outstanding performance and QA support.",
          ],
        },
        {
          heading: "Project Management and Collaboration:",
          items: [
            "Led Agile processes as Scrum Master, facilitating ceremonies (sprint planning, retrospectives) and collaborating with cross-functional teams (PMs, BAs, UI/UX) to align priorities, estimate efforts, and streamline delivery.",
            "Optimised release cycles by documenting processes, maintaining organisational wiki for release notes, and reducing deployment friction through clear guidelines.",
            "Drove IoT/Mobile guild contributions via knowledge-sharing sessions and hands-on feature execution, fostering cross-team innovation.",
          ],
        },

        {
          heading: "Bonus Technical Skills | Spring boot:",
          items: [
            "Designed and deployed full-stack web applications using Spring Boot, MVC architecture, and Java/J2EE, integrating RESTful APIs with MySQL/PostgreSQL databases for microservices.",
            "Secured applications with Spring Security and Dependency Injection, ensuring robust authentication and authorisation for Android app integrations.",
          ],
        },
      ],
    },
  ],
  education: [
    {
      institution: "Dublin City University",
      degree: "MSc in Electronic and Computer Technology (Major in IoT)",
      duration: "Sept 2022 - Aug 2023",
      details: [
        "Graduated with 2:1 (2nd Class Honours Grade 1)",
        "Focus: Full Stack Development, Data Analytics & Machine Learning, IoT Security, Blockchain Scalability, Bioelectronics, Embedded Systems",
      ],
    },
    {
      institution: "SRM University",
      degree: "B Tech in Electronics and Communication Engineering",
      duration: "May 2015 - April 2019",
      details: [
        "Graduated with 1:1 (83.99%)",
        "Focus: Data Structures, Computer Communication, Wireless Communication, Digital Systems, Electronic Circuits, Microwave Theory, Embedded Systems",
      ],
    },
  ],

  internships: [
    {
      name: "Mobile Testing Robotic Arm - IoT Project",
      company: "HID Global",
      duration: "April 2019 - September 2019",
      details: [
        "Business problem: Testing mobile gestures in HID Mobile Access application like BLE Twist and Tap requires a manual effort and is time-consuming.",
        "Solution provided: Developed an automated robotic arm to test mobile gestures (e.g., BLE Twist, Tap) with Arduino, and Node-RED, solving a manual and time-consuming testing problem for the QA team. This solution reduced testing time by 50%.",
        "Technologies: Arduino, C++, Node-Red, Java, JavaScript, hardware (Stepper motors, servo motors, sensors)",
      ],
    },
    {
      name: "Industrial Battery Division",
      company: "Amara Raja Batteries",
      duration: "",
      details: [
        "I observed the entire lead-acid battery production process, from oxide preparation and grid casting to battery assembly. This experience provided valuable insights into electrochemical energy storage and manufacturing techniques.",
      ],
    },
  ],
  projects: [
    {
      name: "HID Global - HID Mobile Access",
      details: [
        "Contributed to the development and maintenance of HID Mobile Access, including the app, SDK, and Android watch features. Managed tasks and effort estimation in JIRA, collaborated with a cross-functional agile team, and worked on both sprint stories and customer issues.",
        "Technologies: Kotlin, Java, Jetpack Compose, XML, Material Design Components, Navigation, State Management, Retrofit, Room, Hilt, DataStore, Firebase, Coroutines.",
      ],
    },
    {
      name: "Intelligent Indoor Air Quality Monitoring System - Masters Project in IoT",
      details: [
        "Designed and implemented an IoT-based Indoor Air Quality Monitoring System using Raspberry Pi and Adafruit SCD40 Sensor. Monitored CO2 levels, humidity, and temperature for automated vent control and optimal air quality. Developed an Android app for real-time data visualisation and alerts. Conducted comparative analysis to improve system efficiency.",
        "Technologies: Python Flask, Raspberry Pi, Linux, Edge computing, Data collection and Analysis, Cloud Storage.",
      ],
    },
    {
      name: "StocKeeper - Android Stock Management App - 2024",
      details: [
        "Developed an app for efficient inventory management in homes and businesses. Features include real-time stock tracking, customisable alerts, and purchase optimisation.",
        "Technologies: Kotlin, Jetpack Compose, Retrofit, Hilt, Firebase, Coroutines.",
      ],
    },
    {
      name: "Feature-Rich Android Applications (Kotlin & Jetpack Compose) , (Kotlin & XML Views) - 2024",
      details: [
        "Created feature-rich Android applications using Kotlin and Jetpack Compose/XML to showcase my proficiency in implementing the latest technologies. Implemented advanced technologies including Retrofit, OkHttp, Room, Hilt, Coroutines, and Firebase, ensuring high-quality, maintainable code",
      ],
    },
    {
      name: "Full-Stack Web Applications for Online Business, and TakeAway Restaurant",
      details: [
        "Developed a full-stack web application for online business and a takeaway restaurant using Spring Boot (MVC) and MySQL database.",
        "Created a chat application with Spring Boot microservices and integrated its APIs into an Android app (MVVM).",
      ],
    },
    {
      name: "Java Client Server Application",
      details: [
        "Designed a multi-robot control application with a Java Swing GUI for real-time coordination.",
      ],
    },
    {
      name: "Data Analysis and Machine Learning Project",
      details: [
        "Developed a predictive model for human activity recognition using supervised learning & sensor data.",
        "Conducted performance analysis & model selection on the Extrasensory dataset.",
        "Technologies: Python, Jupyter Notebook, Pandas, NumPy.",
      ],
    },
  ],
};
