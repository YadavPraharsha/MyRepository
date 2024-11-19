import React from "react";

export default function TextForm(props) {
  return (
    <div>
      <h1>{props.heading}</h1>
      <div class="mb-3">
        <textarea type="email" class="form-control" id="myBox" rows="8" />
      </div>
      <button className="btn btn-primary">Convert to UpperCase</button>
    </div>
  );
}
