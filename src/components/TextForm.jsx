import {useState} from 'react'


function TextForm(props) {
    const handelUpclick =()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handelOnChange =(event)=>{        
        setText(event.target.value)
    }
    const handelLowclick =()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }

    const [text, setText] = useState("")
    return (
        <>
            <div className="container mb-10 mt-5">
            <h3>{props.heading}</h3>
                <textarea className="form-control" onChange={handelOnChange} placeholder='Put You Text Here..' value={text} id="myBox" rows="5"></textarea>
                <button type="button" className="btn btn-primary mt-2 mx-2" onClick={handelUpclick}>To Upper Case</button>
                <button type="button" className="btn btn-primary mt-2 mx-2" onClick={handelLowclick}>To Lower Case</button>
            </div>
            <div className="container">
                <hr />
                <h2>Text Summary here</h2>
                <p> <b>Words:</b>  {text.split(" ").length} and <b>Characters:</b> {text.length}</p> 
                <p>{0.008*(text.split(" ").length)} : Minutes read</p>
                <hr />
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

export default TextForm;
