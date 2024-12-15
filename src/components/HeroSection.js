import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./HeroSection.css";

const HeroSection = () => {
  const navigate = useNavigate(); // Initialize navigate

  const targetDate = new Date("January 03, 2025 00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const handleExploreClick = () => {
    navigate("/projects-ideas"); // Redirect to Projects Ideas page
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <h1 className="hero-title">8848 DIGITAL HACKATHON</h1>
        <p className="hero-subtitle">Build the Future of Innovation</p>
        <p className="date-range">Join us from January 02 - January 03 *</p>

        <div className="timer">
          <div className="timer-box">
            <span>{timeLeft.days}</span>
            <p>Days</p>
          </div>
          <div className="timer-box">
            <span>{timeLeft.hours}</span>
            <p>Hours</p>
          </div>
          <div className="timer-box">
            <span>{timeLeft.minutes}</span>
            <p>Minutes</p>
          </div>
          <div className="timer-box">
            <span>{timeLeft.seconds}</span>
            <p>Seconds</p>
          </div>
        </div>

        <div className="cta-buttons">
          <button className="cta-btn register">Register Now</button>
          <button className="cta-btn learn-more" onClick={handleExploreClick}>
            Explore Projects Ideas
          </button>
        </div>
      </div>

      <div className="graphics">
        <img
          src="https://i.imgur.com/6k5FfiL.png"
          alt="astronaut floating"
          className="astronaut"
        />
        <img
          src="https://i.imgur.com/nIQaCML.png"
          alt="space laptop"
          className="laptop"
        />
      </div>
    </section>
  );
};

export default HeroSection;
