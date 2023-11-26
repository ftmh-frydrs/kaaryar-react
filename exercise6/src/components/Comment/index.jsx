import './style.css';

const Comment = ({ comment }) => (
  <div className='comment-container'>
    <img src='https://www.w3schools.com/howto/img_avatar.png' alt='' className="avatar" />
  <div className="comment" style={{ marginLeft: comment.depth * 20 }}>
    <div className="comment-p">
    <p className='reply'>reply</p><hr />
        <p>{comment.text}</p>
        </div>
    {comment.replies?.map(reply => (
      <Comment key={reply.id} comment={reply}/>
    ))}
  </div>
  </div>
);

export default Comment;
