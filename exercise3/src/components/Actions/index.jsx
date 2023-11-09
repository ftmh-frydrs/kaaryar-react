import './style.css'

const Actions = () => {
    return (
        <div className="actions">
            <button className="send-button" placeholder="پیام خود را اینجا بنویسید">ارسال</button>
            <input type="text" className="message-input"/>
        </div>
    )
};

export default Actions;