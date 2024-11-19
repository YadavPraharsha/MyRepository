import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter the text here");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div class="mb-3">
          <textarea
            type="email"
            className="form-control"
            value={text}
            id="myBox"
            rows="8"
            onChange={handleOnChange}
          />
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to UpperCase
        </button>
      </div>
      <div className="container my-3">
        <h1> Your text Summary</h1>
        <p>
          {" "}
          {text.split(" ").length} words and {text.length} characters.
        </p>
        <h2>{0.08 * text.split(" ").length} Minutes read</h2>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
