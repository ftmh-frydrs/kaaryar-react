import Message from "../Message";
import './style.css'

const MessageList = ({message}) => {
       return (
        <div>
        {message.map(messages => (
          <Message key={messages.id} id={messages.id} body={messages.body} isPeer={messages.isPeer} /> 
        ))}
      </div>
       )
};

export default MessageList;