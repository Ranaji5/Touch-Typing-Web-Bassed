import React from 'react';
import './NextKeys.css';

const NextKeys = ({ nextKeys }) => {
  return (
    <div className="next-keys-container">
      <p className="next-keys-label">Next Keys:</p>
      <p className="next-keys-value">{nextKeys}</p>
    </div>
  );
};

export default NextKeys;
