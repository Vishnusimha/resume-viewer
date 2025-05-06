import React from "react";

const About = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className="section">
      <h2>About Me</h2>
      <p>
        I am Vishnu Simha Dussa, a passionate Software Engineer with expertise
        in Android development, cloud-native solutions, and microservices.
      </p>
    </section>
  );
});

export default About;
