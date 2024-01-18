import React, { useState } from 'react';

function TextForm(props) {
    const [text, setText] = useState(''); 
    const handleUpClick = () =>{
        // converts the text value to upper case text
        let newtext = text.toUpperCase();
        setText(newtext);
        props.alertMsg("Converted to uppercase !",'success');
    }
    const handleLowClick = () =>{
      let newtext = text.toLowerCase();
      setText(newtext);
      props.alertMsg("Converted to lowercase !",'success');
    }
    const handleClear = () =>{
      const newtext = '';
      setText(newtext);
      props.alertMsg("Text cleared !",'success');
    }
    const handleRead = () =>{
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
      props.alertMsg("Reading the text :) ",'success');
    }
    const handleOnChange = (event) =>{
        // to alter the text and set new text value to default text
        setText(event.target.value);
    }
    const handleCopyText = () =>{
      var text = document.getElementById('Textarea1');
      text.select();
      navigator.clipboard.writeText(text.value);
      props.alertMsg("Text copied !!",'success');
    }
  return (
    <>
      <div className='container' > 
        <div className="mb-3" style={{color:props.mode==='dark'?'white':'black'}}>
          <label htmlFor="Textarea1" className="form-label">
          <h1>{props.heading}</h1>
          </label>
          <textarea
            className="form-control"
            id="Textarea1"
            rows="8"
            value={text}
            onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#130541':'white', color:props.mode==='dark'?'white':'black'}}
          ></textarea>
        </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-1" onClick={handleClear}>Clear text</button>
      <button className="btn btn-primary mx-1" onClick={handleRead}>Read aloud</button>
      <button className="btn btn-primary mx-1" onClick={handleCopyText}>Copy text</button>
    </div>
    <div className="container my-4" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
    </div>
    </>
  );
}
export default TextForm;
