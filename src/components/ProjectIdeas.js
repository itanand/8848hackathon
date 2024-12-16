import React from "react";
import { PROJECTIDEAS } from "./constants"; // Import the project ideas
import "./ProjectIdeas.css"; // Import CSS

const ProjectIdeas = () => {
  return (
    <div className="hackathon-container">
      <header className="hero-section">
        <div className="hero-container">
          <h1 className="hero-title">Hackathon Inspiration</h1>
          <p className="hero-subtitle">
            Explore open-source project ideas you can build in 24 hours!
          </p>
        </div>
      </header>

      <section className="projects-section">
        <h2 className="section-title">Open Source Project Ideas</h2>
        <div className="projects-list">
          {PROJECTIDEAS.map((project, index) => (
            <div className="project-card" key={index}>
              <h3 className="project-title">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-difficulty">
                <strong>Difficulty:</strong> {project.difficulty}
              </p>
              <a
                href={project.repoLink}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Repository
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectIdeas;
