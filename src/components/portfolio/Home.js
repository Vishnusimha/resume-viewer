import React from "react";
import { ReactTyped } from "react-typed";
import Lottie from "lottie-react";
import codingAnimation from "../../assets/LottieFiles/vishnusimha.json";
import {
  FaGithub,
  FaLinkedin,
  FaFileDownload,
  FaEnvelope,
  FaShieldAlt,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";
const Home = React.forwardRef((props, ref) => {
  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/Vishnusimha" },
    { icon: <FaEnvelope />, url: "mailto:vishnusimha98@gmail.com" },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/vishnusimhadussa/",
    },
    { icon: <SiLeetcode />, url: "https://leetcode.com/u/vishnusimha98/" },
    {
      icon: <FaShieldAlt />,
      url: "https://www.credly.com/users/vishnu-simha-dussa/",
    },
  ];

  const credlyUrl = "https://www.credly.com/users/vishnu-simha-dussa/";

  const handleCertificationsClick = () => {
    window.open(credlyUrl, "_blank");
  };

  const handleMyWorkClick = () => {
    props.onNavigate("projects");
  };

  const handlePostsClick = () => {
    props.onNavigate("Blogs");
  };

  const techStack = [
    "Kotlin",
    "Java",
    "Python",
    "Android",
    "Jetpack Compose",
    "Spring Boot/Microservices",
    "SQL",
    "AWS",
    "React/HTML/CSS",
    "Docker",
    "Kubernetes",
    "Github Actions",
    "Jenkins",
  ];

  return (
    <div className="home-container">
      {/* Welcome Section */}
      <section ref={ref} className="home-welcome-section">
        <div className="home-welcome-content">
          <div className="home-welcome-text">
            <h1 className="home-greeting">Hi There!</h1>
            <h1 className="home-name">
              I'M <span className="highlight">Vishnu Simha</span>
            </h1>
            <h2 className="home-typing-text">
              <ReactTyped
                strings={[
                  "Software Engineer",
                  "Full stack Developer",
                  "Android Developer",
                  "AWS Solution Architect - Associate",
                ]}
                typeSpeed={30}
                backSpeed={10}
                loop
              />
            </h2>
            <p className="home-description">
              I craft exceptional digital experiences through clean, efficient
              code and scalable architectures. Currently, I specialize in
              building reliable mobile applications, backed by robust backend
              systems and cutting-edge cloud technologies.
            </p>

            {/* Call to Action Buttons - Updated Names */}
            <div className="cta-buttons">
              <button
                className="primary-btn"
                onClick={handleMyWorkClick} // Use the updated handler
              >
                My Work
              </button>
              <button
                className="secondary-btn"
                onClick={handlePostsClick} // Use the updated handler
              >
                Posts
              </button>
            </div>

            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Social link ${index}`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="home-welcome-image">
            <Lottie
              animationData={codingAnimation}
              loop={true}
              autoplay={true}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="home-about-section">
        <div className="home-about-container">
          <div className="home-about-header">
            <h2>About Me</h2>
            <div className="home-about-divider"></div>
          </div>

          <div className="home-about-content">
            <div className="home-about-text">
              <h3>Who am I?</h3>
              <p>
                I'm a <strong>passionate software engineer</strong> with
                expertise in Android development and backend systems. I
                specialize in creating robust, scalable applications that
                deliver exceptional user experiences.
              </p>
              <p>
                With <strong>4+ years</strong> of professional experience, I've
                helped companies build products used by millions of users
                worldwide. My technical expertise spans{" "}
                <strong>Kotlin, Java, Python, AWS, and SQL</strong>, with
                certifications as an{" "}
                <strong>AWS Solutions Architect Associate</strong> and{" "}
                <strong>Cloud Practitioner</strong>.
              </p>
              <p>
                When I'm not coding, you can find me exploring 📸 photography,
                🎬 watching movies, or 🛠️ experimenting with IoT projects🔌.
              </p>

              <div className="about-tech-stack">
                <h4>Technologies I work with:</h4>
                <div className="tech-tags">
                  {techStack.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="about-stats">
              <div className="stat-card">
                <h3>4+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-card">
                <h3>20+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-card">
                <h3>1M+</h3>
                <p>Users Impacted</p>
              </div>
              <div
                className="stat-card"
                style={{ cursor: "pointer" }}
                onClick={handleCertificationsClick}
              >
                <h3>6+</h3>
                <p>Certifications</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export default Home;
