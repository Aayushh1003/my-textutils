import React, {useState} from 'react'

export default function TextForm(props) {
    const[text,setText] = useState("");

    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        // setText("You have clicked on Uppercase");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to upper case","success");
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        // setText("You have clicked on Uppercase");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lower case","success");

    }

    const handleOnChange = (event)=>{
        // console.log("onChange");
        setText(event.target.value);
    }

    const handleClear = ()=>{
        let newText = ""
        setText(newText);
        props.showAlert("cleared","success");

    }

    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("copied","success");
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "));
        props.showAlert("extra spaces removed","success");

    }
    // setText = "new state"; 
    // to change the state of the text variable
    return (
        <>
        
        <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* <label for="myBox" className="form-label">Example textarea</label> */}
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}  style={{backgroundColor: props.mode==="dark"?"#042734":"white",
            color:props.mode==="dark"?"white":"black"}}></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to upperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to lowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>

        <div className="container"  style={{color:props.mode==="dark"?"white":"black"}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
            <p> {0.008*text.split(" ").filter((element)=>{return element.length!=0}).length} Minutes required to read the words</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter your text in the box above to preview it here"}</p>
        </div>
        </>

    )
}
