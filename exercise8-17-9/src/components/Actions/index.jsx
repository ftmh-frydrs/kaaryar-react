import React from 'react';
import Button from '../Button';
import './style.css';

const Action = ({ onAddTask, onDeleteAllTasks }) => {
  return (
    <div className="action-btn">
      <Button type="secondary" onClick={onAddTask}>کار جدید</Button>
      <Button type="primary" onClick={onDeleteAllTasks}>حذف همه</Button>
    </div>
  );
};

export default Action;
