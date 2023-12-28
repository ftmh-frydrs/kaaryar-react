import { Link } from "react-router-dom";
import "./style.css";

const Post = ({
  title,
  author,
  summary,
  dateTime,
  id,
  name
}) => {

  const member = `ارسال شده توسط ${author.name} در تاریخ ${dateTime}`

  return (
    <div className="posts">
      <Link to={`/posts/${id}`} className="posts_title">{title}</Link>
      <p className="posts-date">{member}</p>
      <p className="posts-text">{summary}</p>
    </div>
  );
};

export default Post;
