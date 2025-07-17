import React, { useState, useCallback } from "react";
import { ReactTyped } from "react-typed";
import Lottie from "lottie-react";
import codingAnimation from "../../assets/LottieFiles/vishnusimha.json";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaShieldAlt,
  FaSync,
  FaCalendarAlt,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Home = React.forwardRef((props, ref) => {
  // Constants
  const REFRESH_DELAY = 1000;
  const SKELETON_HEIGHT = { desktop: 250, tablet: 180, mobile: 150 };

  const [refreshKey, setRefreshKey] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState(null);

  const handleRefreshStats = useCallback(() => {
    setIsRefreshing(true);
    setError(null);
    setRefreshKey((prev) => prev + 1);

    // Simulate refresh delay
    setTimeout(() => {
      setIsRefreshing(false);
    }, REFRESH_DELAY);
  }, [REFRESH_DELAY]);

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/Vishnusimha",
      label: "GitHub Profile",
    },
    {
      icon: <FaEnvelope />,
      url: "mailto:vishnusimha98@gmail.com",
      label: "Email Contact",
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/vishnusimhadussa/",
      label: "LinkedIn Profile",
    },
    {
      icon: <SiLeetcode />,
      url: "https://leetcode.com/u/vishnusimha98/",
      label: "LeetCode Profile",
    },
    {
      icon: <FaShieldAlt />,
      url: "https://www.credly.com/users/vishnu-simha-dussa/",
      label: "Credly Certifications",
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

  const GitHubStatsCard = ({ src, alt, title, href, className = "" }) => (
    <div className={`github-stats-container ${className}`}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        title={title}
        aria-label={`View ${title} on GitHub`}
      >
        {isRefreshing ? (
          <div
            className="stats-loading-skeleton"
            role="img"
            aria-label="Loading GitHub statistics"
          >
            <div className="skeleton-content"></div>
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            className="github-stats-image"
            loading="lazy"
            onError={(e) => {
              setError(`Failed to load ${alt}`);
              console.error(`Failed to load GitHub stat: ${alt}`);
            }}
          />
        )}
      </a>
    </div>
  );

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
                  "Android Developer",
                  "Full stack Developer",
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
                  aria-label={link.label}
                  title={link.label}
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

      {/* GitHub Stats Section - Third Half */}
      <section className="home-github-section">
        <div className="home-github-container">
          <div className="home-github-header">
            <h2>GitHub Stats</h2>
            <div className="home-github-divider"></div>
          </div>

          <div className="github-stats-content">
            {error && (
              <div className="error-message" role="alert" aria-live="polite">
                <span>⚠️ {error}</span>
                <button
                  onClick={() => setError(null)}
                  aria-label="Dismiss error message"
                  className="error-dismiss-btn"
                >
                  ×
                </button>
              </div>
            )}
            <div className="github-stats-header">
              <h4>Real-time Coding Activity:</h4>
              <div className="github-controls">
                <div className="current-date">
                  <FaCalendarAlt aria-hidden="true" />
                  <span>
                    {new Date().toLocaleDateString("en-US", {
                      weekday: "short",
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <button
                  className="refresh-stats-btn"
                  onClick={handleRefreshStats}
                  disabled={isRefreshing}
                  title="Refresh GitHub Stats"
                  aria-label="Refresh GitHub statistics"
                  aria-describedby="refresh-status"
                >
                  <FaSync
                    className={isRefreshing ? "spinning" : ""}
                    aria-hidden="true"
                  />
                  <span className="sr-only" id="refresh-status">
                    {isRefreshing
                      ? "Refreshing statistics..."
                      : "Click to refresh"}
                  </span>
                </button>
              </div>
            </div>
            <div className="github-stats-grid">
              <GitHubStatsCard
                src={`https://github-readme-stats.vercel.app/api?username=Vishnusimha&theme=dark&hide_border=false&include_all_commits=true&count_private=true&v=${refreshKey}`}
                alt="GitHub Profile Stats"
                title="View my GitHub profile stats"
                href="https://github.com/Vishnusimha"
              />
              <GitHubStatsCard
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=Vishnusimha&theme=dark&hide_border=false&layout=compact&v=${refreshKey}`}
                alt="GitHub Top Languages"
                title="View my GitHub languages"
                href="https://github.com/Vishnusimha"
              />
              <GitHubStatsCard
                src={`https://github-readme-streak-stats.herokuapp.com/?user=Vishnusimha&theme=dark&hide_border=false&v=${refreshKey}`}
                alt="GitHub Streak Stats"
                title="View my GitHub streak"
                href="https://github.com/Vishnusimha"
              />
              <GitHubStatsCard
                src={`https://github-readme-activity-graph.vercel.app/graph?username=Vishnusimha&theme=github-dark&hide_border=false&area=true&custom_title=GitHub%20Activity%20Graph&v=${refreshKey}`}
                alt="GitHub Activity Graph"
                title="View my GitHub activity graph"
                href="https://github.com/Vishnusimha"
                className="activity-graph-card"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export default Home;
