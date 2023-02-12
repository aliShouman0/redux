import React, { useState } from "react";
import { connect } from "react-redux";
import { createPost } from "../redux/actions/postAction";

function PostForm(props) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onsubmit = (e) => {
    e.preventDefault();
    const post = {
      title,
      body,
    };

    //call action
    props.createPost(post);
  };

  return (
    <div>
      <h1>Add post</h1>
      <form onSubmit={onsubmit}>
        <div>
          <label htmlFor="">Title</label>
          <br />
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <br />
        <div>
          <label htmlFor="">Body</label>
          <br />
          <textarea
            name="body"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          ></textarea>
        </div>
        <br />
        <button type="Submit">Submit</button>
      </form>
    </div>
  );
}

 

export default connect(null, { createPost })(PostForm);
