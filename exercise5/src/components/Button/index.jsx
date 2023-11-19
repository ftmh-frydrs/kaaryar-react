import React from 'react';
import './style.css';

const Button = ({ name, type }) => {
  const className = `btn ${type}`;

  return (
    <div>
      <button type="submit" className={className}>
        {name}
      </button>
    </div>
  );
};

export default Button;