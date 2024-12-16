import React from 'react';
import './Winner.css'; // Importing the CSS for styling

const Winner = () => {
  const prizeData = [
    { title: 'Winner', description: 'Prize: 50XX and a Trophy' },
    { title: 'Runner-up', description: 'Prize: 25XX and a Certificate' },
    { title: 'Best Innovation Award', description: 'Prize: 10XX and a Special Trophy' },
  ];

  return (
    <section className="prizes-and-winner">
      <h2 className="section-title">Prizes and Winners</h2>
      <div className="prizes-list">
        {prizeData.map((item, index) => (
          <div className="prize-item" key={index}>
            <h3 className="prize-title">{item.title}</h3>
            <p className="prize-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Winner;
