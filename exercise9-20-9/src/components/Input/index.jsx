import React from 'react';
import './style.css'

const Input = ({ label, name, placeholder, value, onChange, required , type , id , ...rest }) => {
  return (
    <div className="input-box">
      <label className="details" htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        id = {id}
        {...rest}
      />
    </div>
  );
};

export default Input;
