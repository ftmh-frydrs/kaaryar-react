import React, { useEffect, useState } from 'react';
import './style.css';

const Message = ({ id, body, isPeer }) => {
  const messageClass = isPeer ? 'message peer' : 'message self';
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const messageBodyElement = document.getElementById(`message-body-${id}`);
    const hasOverflow = messageBodyElement.scrollHeight > 150;

    if (hasOverflow) {
      setIsCollapsed(true);
    } else {
      setIsCollapsed(false);
    }
  }, [body, id]);

  return (
    <div className={messageClass}>
      <p
        id={`message-body-${id}`}
        className={`message-body ${isCollapsed ? 'collapsed' : ''}`}
      >
        {body}
      </p>
    </div>
  );
};

export default Message;