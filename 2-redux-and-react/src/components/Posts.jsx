import React, { useEffect, useState } from "react";

function Posts() {
  const [mounted, setMounted] = useState(false);
  const [posts, setPosts] = useState([]);

  if (!mounted) {
    // Code for componentWillMount here
    // This code is called only one time before intial render
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  const PostItem = posts.map((post) => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  ));

  return (
    <div>
      <h1>Posts</h1>
      {PostItem}
    </div>
  );
}

export default Posts;
