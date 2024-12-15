import React from 'react';
import './Rules.css'; // Importing the CSS for the rules styling

const Rules = () => {
  return (
    <section className="rules-section">
      <h2 className="section-title">Rules</h2>
      <div className="rules-list">
        <div className="rule-item">
          <span className="rule-number">1.</span>
          <span className="rule-text">Be respectful to everyone.</span>
        </div>
        <div className="rule-item">
          <span className="rule-number">2.</span>
          <span className="rule-text">Keep the conversation friendly and inclusive.</span>
        </div>
        <div className="rule-item">
          <span className="rule-number">3.</span>
          <span className="rule-text">Respect others' privacy and do not share confidential information.</span>
        </div>
        <div className="rule-item">
          <span className="rule-number">4.</span>
          <span className="rule-text">Follow the guidelines and be responsible for your actions.</span>
        </div>
        <div className="rule-item">
          <span className="rule-number">5.</span>
          <span className="rule-text">Use appropriate language and avoid offensive terms.</span>
        </div>
      </div>
    </section>
  );
};

export default Rules;
