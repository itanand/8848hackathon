import React, { useState } from "react";
import { THEMES } from "./constants"; // Import the constants
import "./Themes.css";

const Themes = () => {
  const [openTheme, setOpenTheme] = useState(null);

  const toggleTheme = (index) => {
    setOpenTheme(openTheme === index ? null : index); // Toggle theme open/close
  };

  return (
    <section className="themes">
      <h2>Hackathon Themes</h2>
      <div className="theme-list">
        {THEMES.map((theme, index) => (
          <div key={index} className="theme-card">
            <p className="theme-title" onClick={() => toggleTheme(index)}>
              {theme.title}
            </p>
            {openTheme === index && (
              <div className="theme-details">
                <p>{theme.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Themes;
