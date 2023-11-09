import './style.css';
import Datamessage from '../../data/message.json'
import Actions from '../Actions';
import MessageList from '../MessageList';

const ChatBox = () => {
    return (
        <div className="chat-box">
            <MessageList message={Datamessage}/>
              <Actions />
        </div>
    )
};

export default ChatBox;