import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HeroSection from "./components/HeroSection";
import AboutHackathon from "./components/AboutHackathon";
import Themes from "./components/Themes";
import Rules from "./components/Rules";
import JudgingCriteria from "./components/JudgingCriteria";
import Footer from "./components/Footer";
import ProjectIdeas from "./components/ProjectIdeas";
import './App.css';
import Winner from "./components/Winner";

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
             <hr class="awesome-break"></hr>
             <Themes />
             <Rules />
             <JudgingCriteria />
             <Winner />
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
