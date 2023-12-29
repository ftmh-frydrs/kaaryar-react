import "./style.css";
import Post from "../../components/Post";
import { useEffect, useState } from "react";
import https from "../../services/https";
import * as urls from "../../config/all-api";

const MyPosts = () => {
  const [posts, setPosts] = useState({
    isLoding: false,
    error: "",
    data: [],
  });
  const [categories, setCategories] = useState({
    isLoding: false,
    error: "",
    data: [],
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setCategories({ ...categories, isLoding: true });
        const data = await https(urls.categories);
        setCategories({ ...categories, isLoding: false, data });
      } catch (error) {
        setCategories({
          ...categories,
          isLoding: false,
          error: error.message || "Error fetching categories",
        });
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {

        setPosts({
          ...posts,
          isLoding: true,
        });

        const data = await https(urls.posts);
        setPosts({
          ...posts,
          isLoding: false,
          data,
        });
      }
      catch (error) {
        setPosts({
          ...posts,
          isLoding: false,
          error: error.message || "Error fetching posts",
        });
      }
    }
   
    fetchPosts()
     
  }, []);

  const renederPosts = () => {
    const { error, isLoding, data } = posts;
    if (error) {
      return posts.error;
    }
    if (isLoding) {
      return "Loding...";
    }

    return data.map((post) => (
      <Post
        key={post.id}
        title={post.title}
        summary={post.summary}
        author={post.author}
        dateTime={post.dateTime}
        id={post.id}
      />
    ));
  };

  const renederCategories = () => {
    const { error, isLoding, data } = categories;
    if (error) {
      return <div>Error: {error}</div>;
    }
    if (isLoding) {
      return "Loding...";
    }

    return data.map((category) => <div key={category.name}>{category.name}</div>);
  };

  return (
    <section className="posts">
      <header className="posts_header">
        <h1 className="posts_header-title">وبلاگ تمرین</h1>
        <p>این وبلاگ برای تمرین مطالب دوره طراحی شده است</p>
      </header>

      <div className="general_content">
        <main className="list_posts">{renederPosts()}</main>
        <aside className="category">{renederCategories()}</aside>
      </div>
    </section>
  );
};

export default MyPosts;
