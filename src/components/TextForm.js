import React,{useState} from 'react'

export default function TextForm(props) {
    //the below functions are called events
    const handleUpCLick=()=>{
        // console.log("Uppercase was clicked"+text);//this was only for showing changes in console
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success")
    }
    const handleloCLick=()=>{
        // console.log("Uppercase was clicked"+text);//this was only for showing changes in console
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success")
    }
    const handleclrCLick=()=>{
        // console.log("Uppercase was clicked"+text);//this was only for showing changes in console
        let newText='';
        setText(newText);
        props.showAlert("Cleared","success")
    }
    const handleOnChange=(event)=>{
        // console.log("On change");
        setText(event.target.value);//to be able to type in the box because the "text" thing occupied the whole thing earlier
    }


    //declaring a new state varible, which we'll call text
    //the text will be updated using the function setText
    const [text,setText]=useState('');
    //setText("new text");


  return (
    <div>
      <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.title}</h1>
<div className="mb-3" style={{color:props.mode==='dark'?'white':'black'}} >
  <label for="exampleFormControlTextarea1" className="form-label">Type your text here</label>
  {/* since we used text (which is a state variable) it is compulsary to add onChange thing because states are meant to be changed */}
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'? 'grey': 'white',color:props.mode==='dark'? 'white': 'black'}}id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className="btn btn-outline-success mx-2" onClick={handleUpCLick} style={{color:props.mode==='dark'?'white':'black'}}>Convert to uppercase</button>
<button className="btn btn-outline-success mx-2" onClick={handleloCLick} style={{color:props.mode==='dark'?'white':'black'}}>Convert to lowercase</button>
<button className="btn btn-outline-success" onClick={handleclrCLick} style={{color:props.mode==='dark'?'white':'black'}}>Clear</button>
<div className="container my-3" style={{color:props.mode==='dark'?'white':'dark'}}>
    <h1>Your text summary here</h1>
    <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
    <p>{0.008*text.split(" ").length} Minutes read</p>
    <h3>Preview</h3>
    <p>{text}</p>
</div>
    </div>
  )
}
