import React from 'react';
import './JudgingCriteria.css'; // Importing the CSS for table styling

const JudgingCriteria = () => {
  const criteriaData = [
    { criteria: 'Innovation', weightage: '30%', description: 'How unique and creative is the idea?' },
    { criteria: 'Feasibility', weightage: '25%', description: 'Can the solution be implemented practically?' },
    { criteria: 'Impact', weightage: '20%', description: 'How much does it solve the problem?' },
    { criteria: 'Technical Depth', weightage: '15%', description: 'Quality of code and technical execution.' },
    { criteria: 'Presentation', weightage: '10%', description: 'Clarity and quality of the demo.' },
  ];

  return (
    <section className="judging-criteria">
      <h2 className="section-title">Judging Criteria</h2>
      <table className="criteria-table">
        <thead>
          <tr>
            <th>Criteria</th>
            <th>Weightage</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {criteriaData.map((item, index) => (
            <tr key={index}>
              <td>{item.criteria}</td>
              <td>{item.weightage}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default JudgingCriteria;
