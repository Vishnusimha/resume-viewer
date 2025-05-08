import React from "react";
import { ReactTyped } from "react-typed";

export const About = React.forwardRef((props, ref) => {
  return (
    <div>
      {/* Full-Screen Welcome Section */}
      <section ref={ref} className="about-welcome-section">
        <h1>Hi There!</h1>
        <h1>
          I'M <b>Vishnu Simha</b>
        </h1>
        <h2>
          <ReactTyped
            strings={[
              "Software Engineer",
              "Android Developer",
              "Backend Developer",
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </h2>
      </section>

      {/* Full-Screen Introduction Section */}
      <section className="about-introduction-section">
        <h2>Brief Introduction</h2>
        <p>
          I am a passionate Android and backend developer with expertise in
          building scalable applications and systems. I thrive on transforming
          ideas into impactful products and enjoy solving complex challenges
          through technology.
        </p>
        <p>
          With a strong foundation in Java, Kotlin, Python, and SQL, I have
          experience in cloud computing (AWS), IoT, and microservices. I am
          constantly learning and exploring new technologies to enhance my
          skills and deliver innovative solutions.
        </p>
        <p>
          I hold certifications as an <b>AWS Certified Solutions Architect</b>{" "}
          and <b>AWS Certified Cloud Practitioner</b>, and I am always eager to
          collaborate on exciting projects.
        </p>
        <p>Outside of work, I enjoy movies 🎬, photography 📸, and music 🎵.</p>
      </section>
    </div>
  );
});
