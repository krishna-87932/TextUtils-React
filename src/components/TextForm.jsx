import {useState} from 'react'


function TextForm(props) {
    const handelUpclick =()=>{
        console.log("upper case clicked:=> "+text)
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handelOnChange =(event)=>{        
        setText(event.target.value)
    }

    const [text, setText] = useState("This is a sample text")
    return (
        <>
            <div className="container mb-10">
            <h3>{props.heading}</h3>
                <textarea className="form-control" onChange={handelOnChange} value={text} id="myBox" rows="5"></textarea>
                <button type="button" className="btn btn-primary mt-2" onClick={handelUpclick}>To Upper Case</button>
            </div>
        </>
    )
}

export default TextForm;
