import React, { useState } from 'react';

function TextForm(props) {
    const [text, setText] = useState('Enter the text here'); 
    const handleUpClick = () =>{
        // converts the text value to upper case text
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const handleOnChange = (event) =>{
        // to alter the text and set new text value to default text
        setText(event.target.value);
    }
  return (
    <div> 
      <div className="mb-3">
        <label htmlFor="Textarea1" className="form-label">
        <h1>{props.heading}</h1>
        </label>
        <textarea
          className="form-control"
          id="Textarea1"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>

      <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
    </div>
  );
}
export default TextForm;
