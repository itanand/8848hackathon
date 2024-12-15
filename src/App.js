import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HeroSection from "./components/HeroSection";
import AboutHackathon from "./components/AboutHackathon";
import Themes from "./components/Themes";
import Rules from "./components/Rules";
import Footer from "./components/Footer";
import JudgingCriteria from "./components/JudgingCriteria";
// import Tools from "./components/Tools";
import ProjectIdeas from "./components/ProjectIdeas"; // Import the new Projects Ideas page

function App() {
  return (
    <Router>
      <Routes>
        {/* Define routes for different pages */}
        <Route
          path="/"
          element={
            <div>
              <HeroSection />
              <AboutHackathon />
              <Themes />
              <Rules />
              <JudgingCriteria />
              <Footer />
            </div>
          }
        />
        <Route path="/projects-ideas" element={<ProjectIdeas />} />
      </Routes>
    </Router>
  );
}

export default App;
