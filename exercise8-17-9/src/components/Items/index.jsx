import React from 'react';
import Item from '../Item';  
import './style.css';

const Items = ({ tasks, onDeleteTask }) => {
  return (
    <div className="items">
      {tasks.map((task) => (
        <Item key={task.id} id={task.id} text={task.text} onDelete={onDeleteTask} />
      ))}
    </div>
  );
};

export default Items;
