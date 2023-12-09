import React from 'react';
import Button from '../Button';
import './style.css';

const Item = ({ id, text, onDelete }) => {
  return (
    <div key={id} className='item'>
      <span className='title-todo'>{text}</span>
      <Button className='remove-btn' onClick={() => onDelete(id)}>x</Button>
    </div>
  );
};

export default Item;
