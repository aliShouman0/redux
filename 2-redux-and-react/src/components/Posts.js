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
  
  return (
    <div>
      <h1>Posts</h1>
    </div>
  );
}

export default Posts;
