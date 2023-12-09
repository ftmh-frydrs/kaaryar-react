import React from 'react';
import './style.css';

const Input = ({ type, value, onChange, onKeyDown }) => {
    
  return <input className="input" type={type} value={value} onChange={onChange} onKeyDown={onKeyDown} />;
};

export default Input;
