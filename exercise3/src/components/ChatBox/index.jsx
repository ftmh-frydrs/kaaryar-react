import './style.css';
import Datamessage from '../../data/message.json'
import Actions from '../Actions';
import MessageList from '../MessageList';

const ChatBox = () => {
    return (
        <div className='chat-box_container'>
            <div>
            <MessageList message={Datamessage}/>
              <Actions />
             </div>
        </div>
    )
};

export default ChatBox;