import React, { useState } from "react";
import { THEMES } from "./constants"; // Import the constants
import "./Themes.css";

const Themes = () => {
  const [openThemeIndex, setOpenThemeIndex] = useState(null);

  const toggleTheme = (index) => {
    setOpenThemeIndex(openThemeIndex === index ? null : index); // Toggle popup
  };

  return (
    <section className="themes">
      <h2>Hackathon Themes</h2>
      <div className="theme-list">
        {THEMES.map((theme, index) => (
          <div
            key={index}
            className="theme-card"
            onClick={() => toggleTheme(index)} // Toggle the popup on click
          >
            <p className="theme-title">{theme.title}</p>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {openThemeIndex !== null && (
        <div className="theme-popup">
          <div className="popup-content">
            <h3>{THEMES[openThemeIndex].title}</h3>
            <p>{THEMES[openThemeIndex].details}</p>
            <button onClick={() => setOpenThemeIndex(null)} className="closes-btn">
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Themes;
