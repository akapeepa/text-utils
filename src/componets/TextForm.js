import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleClickUpper = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleClickLower = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText)
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    return (
        <>
            <div className='container'>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleOnChange} id="myBox" value={text} aria-describedby="emailHelp" rows={8}></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleClickUpper}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClickLower}>Convert to lowercase</button>
            </div>
            <div className="container my-3">
                <h2>Your Text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Mintues read.</p>
                <h2>Preview</h2>
                {text}
            </div>
        </>
    )
}