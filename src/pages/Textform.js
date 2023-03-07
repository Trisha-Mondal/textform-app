import React, { useState } from "react";

const Textform = (props) => {
  const [text, setText] = useState("");

  const handleTextareaOnChange = (event) => {
    setText(event.target.value);
  };

  const handleOnclickUpper = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Text converted to Upper Case!!");
  };

  const handleOnclickLower = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Text converted to Lower Case!!");
  };

  const handleCleartext = () => {
    setText("");
    props.showAlert("Text Cleared!!");
  };

  const handleCopytext = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied Successfully!!");
  };

  return (
    <>
      <div className="container" style={{ color: props.mode === "Dark" ? "#000000" : "#042743" }}>
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleTextareaOnChange} rows="9" style={{ background: props.mode === "Dark" ? "black" : "white", color: props.mode === "Dark" ? "white" : "black" }} id="myBox"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={props.toggleMode}>
          Change Color Mode
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleOnclickUpper}>
          Convert to UpperCase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleOnclickLower}>
          Convert to LowerCase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCleartext}>
          Clear Text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopytext}>
          Copy Text
        </button>
      </div>

      <div className="container my-3" style={{ color: "#042743" }}>
        <h2>Text Summary</h2>
      </div>
    </>
  );
};

export default Textform;