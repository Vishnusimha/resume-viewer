// import React from 'react';
// import './Resume.css';

// const Resume = () => {
//     return (
//         <div className="resume-container">
//             <header className="header">
//                 <h1>Vishnu Simha Dussa</h1>
//                 <h2>Software Engineer</h2>
//                 <div className="contact-info">
//                     <p>Email: <a href="mailto:vishnusimha98@gmail.com">vishnusimha98@gmail.com</a></p>
//                     <p>LinkedIn: <a href="https://www.linkedin.com/in/vishnusimhadussa/">www.linkedin.com/in/vishnusimhadussa</a></p>
//                     <p>Github: <a href="https://github.com/Vishnusimha">github.com/Vishnusimha</a></p>
//                     <p>Phone: +353 899595661</p>
//                 </div>
//             </header>

//             <section className="section">
//                 <h3>Professional Summary</h3>
//                 <p>Software Engineer with 3+ years of experience in Android development (Kotlin & Java), cloud-native solutions, and microservices using Spring Boot. Adept at designing scalable, secure, and high-performance applications while optimizing user experience. Proficient in Agile methodologies (Scrum, SAFe) and collaborating with cross-functional teams. Passionate about leveraging modern technologies to build privacy-focused mobile applications.</p>
//             </section>

//             <section className="section">
//                 <h3>Technical Skills</h3>
//                 <ul className="skills-list">
//                     <li><strong>Programming & Scripting:</strong> Kotlin, Java, SQL, C++</li>
//                     <li><strong>Android:</strong> Jetpack Compose, Retrofit, OkHttp, Room, Hilt, Coroutines, Flows, Pagination, Glide, Firebase, ADB, RX Java, GraphQL</li>
//                     <li><strong>DevOps & Cloud:</strong> CI/CD, AWS, Docker, Kubernetes, Tomcat</li>
//                     <li><strong>Backend Development:</strong> Spring Boot, Microservices, HTML/CSS</li>
//                     <li><strong>IoT:</strong> Raspberry Pi, Arduino, MQTT, ThingSpeak, Python Flask</li>
//                     <li><strong>Linux:</strong> CI/CD automation and IoT tasks</li>
//                     <li><strong>Development Methodologies:</strong> Agile (Scrum, SAFe), MVVM, Spring MVC</li>
//                     <li><strong>Version Control:</strong> Git, Bitbucket, and Sourcetree</li>
//                 </ul>
//             </section>

//             <section className="section">
//                 <h3>Certifications</h3>
//                 <ul className="certifications-list">
//                     <li>AWS Certified Solution Architect - Associate</li>
//                     <li>AWS Certified Cloud Practitioner</li>
//                     <li>Kubernetes (Udemy)</li>
//                     <li>Docker for Java Developers</li>
//                     <li>Spring Boot (TDD, Security, Spring Data)</li>
//                     <li>SQL (HackerRank)</li>
//                 </ul>
//             </section>

//             <section className="section">
//                 <h3>Work Experience</h3>
//                 <div className="job">
//                     <h4>HID Global - Software Engineer</h4>
//                     <p>April 2019 - August 2022</p>
//                     <ul>
//                         <li>Developed a HID Mobile Access app using MVVM architecture and SOLID principles.</li>
//                         <li>Modernised legacy codebases and integrated REST APIs for seamless data interactions.</li>
//                         <li>Collaborated with backend teams to optimise app performance, reducing load times by 30%.</li>
//                         <li>Implemented unit and UI tests, achieving 80%+ code coverage and reducing regression bugs by 25%.</li>
//                     </ul>
//                 </div>
//             </section>

//             <section className="section">
//                 <h3>Education</h3>
//                 <div className="education">
//                     <p><strong>Dublin City University</strong> - MSc in Electronic and Computer Technology (Major in IoT) - Sept 2022 - Aug 2023</p>
//                     <p><strong>SRM University</strong> - B Tech in Electronics and Communication Engineering - May 2015 - April 2019</p>
//                 </div>
//             </section>

//             <section className="section">
//                 <h3>Projects</h3>
//                 <ul className="projects-list">
//                     <li><a href="https://github.com/Vishnusimha/HID-Mobile-Access">HID Mobile Access</a></li>
//                     <li><a href="https://github.com/Vishnusimha/Indoor-Air-Quality-Monitoring-System">Intelligent Indoor Air Quality Monitoring System</a></li>
//                     <li><a href="https://github.com/Vishnusimha/StocKeeper">StocKeeper - Android Stock Management App</a></li>
//                 </ul>
//             </section>
//         </div>
//     );
// };

// export default Resume;

import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

const Section = ({ title, children }) => (
  <motion.section
    className="my-10"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-3xl font-bold text-blue-500 border-b-4 border-blue-400 pb-2 mb-6">
      {title}
    </h2>
    {children}
  </motion.section>
);

const Resume = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-blue-100 p-6 md:p-12 font-sans">
      <div className="max-w-5xl mx-auto backdrop-blur-md bg-white/80 shadow-2xl rounded-3xl px-6 md:px-12 py-10">
        <header className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            Vishnu Simha Dussa
          </h1>
          <p className="text-xl text-blue-600 mt-2 font-medium">
            Software Engineer
          </p>
          <div className="flex justify-center gap-5 mt-4 text-gray-600 text-lg">
            <a
              href="mailto:vishnusimha98@gmail.com"
              className="hover:text-blue-600"
            >
              <FaEnvelope />
            </a>
            <a href="tel:+353899595661" className="hover:text-blue-600">
              <FaPhone />
            </a>
            <a
              href="https://github.com/Vishnusimha"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/vishnusimhadussa"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </header>

        <Section title="Summary">
          <p className="text-gray-700 leading-relaxed text-lg">
            Experienced Software Engineer with a strong focus on Android
            development (Kotlin & Java), backed by cloud, DevOps, and IoT
            expertise. Passionate about delivering secure, scalable, and elegant
            applications.
          </p>
        </Section>

        <Section title="Skills">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-gray-800 font-medium">
            <div>🧠 Kotlin, Java, SQL, C++</div>
            <div>📱 Android: Jetpack Compose, Room, Retrofit</div>
            <div>🛠 Spring Boot, HTML/CSS</div>
            <div>☁️ AWS, Docker, Kubernetes, CI/CD</div>
            <div>🔬 Raspberry Pi, Arduino, Python Flask</div>
            <div>🗂 Git, Bitbucket, Jenkins</div>
          </div>
        </Section>

        <Section title="Certifications">
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>AWS Certified Solutions Architect - Associate</li>
            <li>AWS Certified Cloud Practitioner</li>
            <li>Kubernetes (Udemy), Docker for Java Devs</li>
            <li>Spring Boot (Security, TDD, REST, Spring Data)</li>
          </ul>
        </Section>

        <Section title="Experience">
          <div className="bg-gradient-to-tr from-blue-100 to-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">
              Software Engineer – HID Global
            </h3>
            <p className="text-sm text-gray-500">April 2019 – August 2022</p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>Developed HID Mobile Access app (MVVM, BLE/NFC)</li>
              <li>Boosted performance by optimizing legacy code</li>
              <li>Maintained >80% test coverage using JUnit, Espresso</li>
              <li>Led CI/CD integration and automation</li>
            </ul>
          </div>
        </Section>

        <Section title="Education">
          <ul className="text-gray-700 space-y-2">
            <li>
              <strong>Dublin City University</strong> – MSc Electronic &
              Computer Technology (IoT), 2023
            </li>
            <li>
              <strong>SRM University</strong> – BTech Electronics &
              Communication, 2019
            </li>
          </ul>
        </Section>

        <Section title="Projects">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "HID Mobile Access",
                desc: "Secure BLE/NFC credential system",
                url: "https://github.com/Vishnusimha/HID-Mobile-Access",
              },
              {
                title: "Air Quality Monitor (IoT)",
                desc: "Real-time air monitoring using Raspberry Pi",
                url: "https://github.com/Vishnusimha/Indoor-Air-Quality-Monitoring-System",
              },
              {
                title: "StocKeeper",
                desc: "Inventory tracking Android app",
                url: "https://github.com/Vishnusimha/StocKeeper",
              },
            ].map((proj, i) => (
              <a
                key={i}
                href={proj.url}
                target="_blank"
                rel="noreferrer"
                className="p-5 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <h4 className="text-lg font-semibold text-blue-700">
                  {proj.title}
                </h4>
                <p className="text-sm text-gray-600">{proj.desc}</p>
              </a>
            ))}
          </div>
        </Section>
      </div>
    </main>
  );
};

export default Resume;
