import React from 'react';
import './Statistics.css';

const Statistics = ({ totalKeysPressed, accuracy }) => {
  return (
    <div className="statistics-container">
      <p className="statistics-label">Total Keys Pressed:</p>
      <p className="statistics-value">{totalKeysPressed}</p>
      <p className="statistics-label">Accuracy:</p>
      <p className="statistics-value">{accuracy}%</p>
    </div>
  );
};

export default Statistics;
