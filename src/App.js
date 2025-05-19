import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./components/portfolio/Portfolio";
import ResumeViewer from "./components/resume/ResumeViewer";

const App = () => {
  return (
    <Router
      basename={
        process.env.NODE_ENV === "production" ? "/vishnuportfolio" : "/"
      }
    >
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/resume-viewer" element={<ResumeViewer />} />
      </Routes>
    </Router>
  );
};

export default App;
