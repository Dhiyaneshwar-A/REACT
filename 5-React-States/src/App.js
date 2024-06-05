import { useState } from "react";
import './App.css';

function App() {
  const [age,setAge]=useState(0);
  const [text,settext]=useState("");
  
  const [textstatus,settextstatus]=useState(true);
  const [textcolor,settextcolor]=useState("black");
  const increaseage=()=>{
    setAge(age+1);
  };
  const decreaseage=()=>{
    setAge(age-1);
  }
  
  const setzero=()=>{
    setAge(0);
  }
  const inputchange=(event)=>{
    settext(event.target.value);
  };
  const showhide=()=>{
    settextstatus(!textstatus)
  }
  const changecolor=()=>{
    settextcolor(textcolor==="black"?"red":"black");
  }
  return (
    <div className="App">
      <h1>{age}</h1>
      <br></br>
      <button onClick={increaseage}>Increase Age</button>
      <br></br>
      <button onClick={decreaseage}>Decrease Age</button>
      <br></br>
      <button onClick={setzero}>Set Zero</button>
      <br></br>
      <input type="text" onChange={inputchange}/>
      <br></br>
      {textstatus && <h1 style={{color:textcolor}}>{text}</h1>}
      <br></br>
      <button onClick={showhide}>Show/Hide Text</button>
      <br></br>
      <button onClick={changecolor}>Change Text colour</button>
    </div>
  );
}

export default App;
