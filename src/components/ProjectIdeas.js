import React from "react";
import "./ProjectIdeas.css"; // Optional: Add custom styles if needed

const ProjectIdeas = () => {
  const projectIdeas = [
    "AI-Powered Automation Tools",
    "Blockchain for Secure Transactions",
    "E-commerce Recommendation Engine",
    "Smart Healthcare Solutions",
    "Sustainable Energy Monitoring",
  ];

  return (
    <section className="projects-ideas">
      <h2>Project Ideas</h2>
      <ul>
        {projectIdeas.map((idea, index) => (
          <li key={index}>{idea}</li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectIdeas;
