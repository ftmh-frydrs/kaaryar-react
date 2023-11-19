import React from 'react';
import Button from '../Button';
import './style.css';

const Action = () => {
  return (
    <div className="action">
      <Button name="منصرف شدم" type="secondary" />
      <Button name="تایید" type="primary" />
    </div>
  );
};

export default Action;