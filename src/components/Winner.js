import React from 'react';
import './Winner.css'; // Importing the CSS for styling

const Winner = () => {
  const prizeData = [
    { title: 'Winner', description: 'Prize: 50XX and a Trophy With a Jacket and Digital Certificate.' },
    { title: 'Runner-up', description: 'Prize: 25XX and a Certificate With a Jacket and Digital Certificate.' },
    { title: 'Attende', description: 'Digital Certificate.' },
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
