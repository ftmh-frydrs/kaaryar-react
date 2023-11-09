import React, { useEffect, useRef } from 'react';
import './style.css';

const Actions = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="actions">
      <button className="send-button">ارسال</button>
      <input ref={inputRef} type="text" className="message-input" placeholder="پیام خود را اینجا بنویسید"/>
    </div>
  );
};

export default Actions;
