import React from "react";

const Projects = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className="section">
      <h2>Projects</h2>
      <ul>
        <li>HID Mobile Access</li>
        <li>Indoor Air Quality Monitoring System</li>
        <li>StocKeeper - Android Stock Management App</li>
      </ul>
    </section>
  );
});

export default Projects;
