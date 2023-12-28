import "./style.css";
import Post from "../../components/Post";
import { useEffect, useState } from "react";
import https from "../../services/https";
import * as urls from "../../config/all-api";

const MyPosts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState();
  const [isLoding, setIsLoding] = useState(false);

  useEffect(() => {
    setIsLoding(true);
    https(urls.posts)
      .then((data) => {
        setPosts(data);
        setIsLoding(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoding(false);
      });
  }, []);

  const reneder = () => {
    if (error) {
      return error;
    }
    if (isLoding) {
      return "Loding...";
    }

    return posts.map((post) => (
      <Post
        key={post.id}
        title={post.title}
        summary={post.summary}
        author={post.author}
        dateTime={post.dateTime}
      />
    ));
  };

  return (
    <section className="posts">
      <headers className="posts_header">
        <h1 className="posts_header-title">وبلاگ تمرین</h1>
        <p>این وبلاگ برای تمرین مطالب دوره طراحی شده است</p>
      </headers>

      <div className="general_content">
        <main className="list_posts">{reneder()}</main>
        <aside className="category"></aside>
      </div>
    </section>
  );
};

export default MyPosts;
