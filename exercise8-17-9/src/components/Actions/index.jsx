import React from 'react';
import Button from '../Button';
import './style.css';

const Action = ({ onAddTask, onDeleteAllTasks }) => {
  return (
    <div className="action-btn">
      <Button type="secondary" onClick={onDeleteAllTasks}>حذف همه</Button>
      <Button type="primary" onClick={onAddTask}>کار جدید</Button>
    </div>
  );
};

export default Action;
