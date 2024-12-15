import React, { useState, useEffect } from "react";
import "./HeroSection.css";

const HeroSection = () => {
  // Set the target date for the countdown
  const targetDate = new Date("January 03, 2025 00:00:00").getTime();

  // State to hold the countdown
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Effect to update the countdown every second
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval); // Stop the countdown once the target date is reached
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

  return (
    <section className="hero-section">
      {/* Hero Content */}
      <div className="hero-container">
        <h1 className="hero-title">8848 DIGITAL HACKATHON</h1>
        <p className="hero-subtitle">Build the Future of Innovation</p>
        <p className="date-range">Join us from January 02 - January 03 *</p>

        {/* Countdown Timer */}
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

        {/* Call-to-Action Buttons */}
        <div className="cta-buttons">
          <button className="cta-btn register">Register Now</button>
          <button className="cta-btn learn-more">Learn More</button>
        </div>
      </div>

      {/* Graphics */}
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
