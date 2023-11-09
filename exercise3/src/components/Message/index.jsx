import React from 'react';
import './style.css';

const Message = ({ id, body, isPeer }) => {
  const messageClass = isPeer ? 'message peer' : 'message self';

  return (
    <div className={messageClass}>
      <p className="message-body">{body}</p>
    </div>
  );
};

export default Message;