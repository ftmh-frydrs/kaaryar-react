import './style.css';
import Comment from '../Comment';

const CommentTree = ({ comments }) => {
  const commentTree = {};

  comments.forEach(comment => {
    const parent_id = comment.parentId;
    if (parent_id === null) {
      commentTree[comment.id] = { ...comment, depth: 0 };
    } else {
      if (!commentTree[parent_id]?.replies) {
        commentTree[parent_id].replies = [];
      }
      commentTree[comment.id] = { ...comment, depth: commentTree[parent_id].depth + 1 };
      commentTree[parent_id].replies.push(commentTree[comment.id]);
    }
  });

  return (
    <div className="comment-tree">
      {Object.values(commentTree).map(rootComment => (
        <Comment key={rootComment.id} comment={rootComment} />
      ))}
    </div>
  );
};

export default CommentTree;
