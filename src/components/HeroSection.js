import React, { useState, useEffect } from "react";
import "./HeroSection.css";


const HeroSection = () => {
  // Set the target date for the countdown
  const targetDate = new Date("January 03, 2025 00:00:00").getTime(); // Adjust the target date

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
        // Calculate time components
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update the state with new time
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000); // Update every second

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className="hero-section">
      <div className="container">
        <div className="grid-title">8848 DIGITAL HACKATHON</div>
        <p>
          8848 Digital Interal Hackathon.
        </p>
        <p className="date-range">Join us from January 02 - January 03 *</p>
        <div className="timer">
          {timeLeft.days} days {timeLeft.hours} hours {timeLeft.minutes} minutes {timeLeft.seconds} seconds
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
