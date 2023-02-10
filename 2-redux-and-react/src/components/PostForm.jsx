import React, { useState } from "react";

function PostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <div>
      <h1>Add post</h1>
      <form>
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
