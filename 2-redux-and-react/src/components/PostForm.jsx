import React, { useState } from "react";

function PostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onsubmit = (e) => {
    e.preventDefault();
    const post = {
      title,
      body,
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
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

export default PostForm;
