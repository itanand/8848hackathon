import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="grid-title"> 8848 DIGITAL HACKATHON</div>
        <p>
          Get together with the GitLab community to contribute, learn, and win
          exciting prizes.
        </p>
        <p className="date-range">Join us from January 23 - January 30 *</p>
        <div className="timer">38 days 20 hours 4 minutes 35 seconds</div>
      </div>
    </section>
  );
};

export default HeroSection;
