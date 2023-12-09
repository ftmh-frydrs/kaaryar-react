import React from 'react';
import './style.css'

const Button = ({ children, type, onClick , ...rest}) => {
  const className = `btn ${type}`;

  return (
    <div>
      <button type="button" className={className} onClick={onClick} {...rest}>
        {children}
      </button>
    </div>
  );
};

export default Button;
