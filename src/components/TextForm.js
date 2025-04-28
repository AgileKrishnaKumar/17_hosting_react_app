import React, {useState} from 'react'

export default function TextForm(props) {
  const[text,setText]=useState("");

      const holderUpText=()=>{
         let text1= text.toUpperCase();
         setText(text1);
         props.showAlert("Converted to UpperCase!","success");
      }
      const holderDownText =()=>{
        let text2= text.toLowerCase();
        setText(text2);
        props.showAlert("Converted to LowerCase!", "success");
      }
      const clearText =()=>{
        setText("");
        props.showAlert("Text has been cleared!", "success");
      }
      const holderToCopy =()=>{
        let text3=document.getElementById("myBox");
        text3.select();
        navigator.clipboard.writeText(text3.value);
        
        props.showAlert("Copied to Clipboard!", "success");
        
      }
      const removeExtraSpace =()=>{
       let text4=text.split(/[  ]+/);
       setText(text4.join(" "));
       props.showAlert("Removed Extra Spac!", "success");

      }

      const holderToChangeText=(event)=>{
          
        setText(event.target.value);
      }

  return (
    <>
      
      <div className="container" style={{ color: props.mode === "dark" ? "white" : "#02324c" }}>
        <h2>{props.textAreaTitle}</h2>
        <div className="mb-3">
          
          <textarea className="form-control" onChange={holderToChangeText} value={text} id="myBox" rows="8" style={{ backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "#02324c" }}></textarea>
        </div>

        <div className="container" style={{ color: props.mode === "dark" ? "white" : "#02324c" }}>
          < button className="btn btn-primary mx-2" onClick={holderUpText} >Convert to UpperCase</button>
          <button className="btn btn-primary mx-2" onClick={holderDownText}>Convert to LowerCase</button>
          <button className="btn btn-primary mx-2" onClick={clearText}>Clear</button>
          <button className="btn btn-primary mx-2" onClick={holderToCopy}>Copy Text</button>
          <button className="btn btn-primary mx-2" onClick={removeExtraSpace}>Remove Extra Space</button>
        </div>

        <div className="container my-3" >
          <h2>Your Text Summary</h2>
          <p>{text.split(" ").length} Words and {text.length} characters</p>
          <p>{0.008*text.split(" ").length} Minutes to read</p>
          <h2>Preview</h2>
          <p>{text.length>0? text: "Enter something in textBox above to preview it here"}</p>
        </div>
        

        </div>
        </>

      
      );
}