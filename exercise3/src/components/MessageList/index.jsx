import Message from "../Message";

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