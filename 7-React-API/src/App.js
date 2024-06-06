import { useEffect, useState } from "react";
import Axios from "axios";
import './App.css';

function App() {
    const [fact,setfact]=useState("")
    const [name,setname]=useState("")
    const [ageobj,setageobj]=useState(null)
    const [generatedExcuse, setGeneratedExcuse] = useState(null);

    const fetchcatfact=()=>{
      Axios.get("https://catfact.ninja/fact").then((res)=>{
        setfact(res.data.fact);
      })
    }

    const fetchage=()=>{
      Axios.get('https://api.agify.io/?name='+name).then((res)=>{
        setageobj(res.data)
      })
    }

    const fetchExcuse = (excuse) => {
      Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then(
        (res) => {
          setGeneratedExcuse(res.data[0]);
        }
      );
    };

    useEffect(()=>{
      Axios.get("https://catfact.ninja/fact").then((res)=>{
        setfact(res.data.fact);
      })
    },[])

    return (
    <div className="App">
      <button onClick={fetchcatfact}>Generate Cat Fact</button>
      <p>{fact}</p>
      <br></br>
      <input type="text" onChange={(event)=>{setname(event.target.value)}}></input>
      <br></br>
      <button onClick={fetchage}>Generate Age</button>
      <p>Name : {ageobj?.name}</p>
      <p>Age : {ageobj?.age}</p>
      <p>Count : {ageobj?.count}</p>
      <br></br>
      <p>Generate Excuse</p>
      <br></br>
      <button onClick={() => fetchExcuse("party")}> Party</button>
      <button onClick={() => fetchExcuse("family")}> Family</button>
      <button onClick={() => fetchExcuse("office")}> Office </button>

      <p> {generatedExcuse?.category} : {generatedExcuse?.excuse} </p>
    </div>

  );
}

export default App;
