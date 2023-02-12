import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../redux/actions/postAction";

function Posts(props) {
  const [posts, setPosts] = useState(props.posts);
  // const [newPost, setNewPost] = useState(props.newPost)

  useEffect(() => {
    props.fetchPosts();
  }, []);

  useEffect(() => {
    // props.fetchPosts();
    if (props.posts) {
      setPosts(props.posts);
    }
  }, [props.posts]);

  useEffect(() => {
    if (props.newPost) {
      setPosts([...posts, props.newPost]);
    }
  }, [props.newPost]);

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

const mapStateToProps = (state) => ({
  posts: state.posts.items,
  newPost: state.posts.item,
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
