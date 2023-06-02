import "./VideoComments.css";
//import TwitterShare from "./components/TwitterShare";

import { useState } from "react";

function VideoComments() {
  const [input, setInput] = useState({
    name: "",
    comment: "",
  });
  const [previousComments, setPreviousComments] = useState([]);
  const [isCommentSubmitted, setIsCommentSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setPreviousComments([...previousComments, input]);
    setInput({
      name: "",
      comment: "",
    });
    setIsCommentSubmitted(true);
  }

  const handleInput = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="">Name</label>
      <input
        type="text"
        name="name"
        required
        value={input.name}
        placeholder="..."
        onChange={handleInput}
      />
      <label htmlFor="">Comment</label>
      <input
        type="text"
        name="comment"
        required
        value={input.comment}
        placeholder="..."
        onChange={handleInput}
      />
      <button>Submit</button>
      {isCommentSubmitted && <hr />}
      <div className="comments">
        <ul className="video-comment">
          {previousComments.map((eachComment, i) => {
            return (
              <li key={i}>
                <ul className="video-comment">
                  <b>{eachComment.name}</b>
                  <p>{eachComment.comment}</p>
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
      {/* <TwitterShare /> */}
    </form>
  );
}

export default VideoComments;
