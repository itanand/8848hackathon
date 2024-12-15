import React from "react";
import "./Themes.css";

const Themes = () => {
  const themes = [
    "Internal Expense Management System",
    "AI-Powered ERP Insights",
    "Customer Support Chatbot",
    "E-commerce Integration with ERPNext",
    "Enhanced Frontend Dashboard for ERPNext",
  ];

  return (
    <section className="themes">
      <h2>Hackathon Themes</h2>
      <div className="theme-list">
        {themes.map((theme, index) => (
          <div key={index} className="theme-card">
            <p>{theme}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Themes;
