import React from "react";
import "./Tools.css";
import { TOOLS } from "./constants";

const Tools = ({ tools }) => {
  return (
    <section className="tools-and-technology">
      <h2>Tools and Technology</h2>
      <div className="tool-categories">
        {TOOLS.map((category, index) => (
          <div key={index} className="tool-card">
            <h3>{category.category}</h3>
            <ul>
              {category.tools.map((tool, idx) => (
                <li key={idx}>{tool}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tools;
