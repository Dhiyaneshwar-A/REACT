import {useState} from "react";
import './App.css';
import { Task } from "./Task";
function App() {
  const [task,showtask]=useState("");
  const [tasklist,settasklist]=useState([]);
  const handlechange=(event)=>{
    showtask(event.target.value)
  }
  const addtask=()=>{
    const newtask={
      id:tasklist.length === 0 ? 1 : tasklist[tasklist.length-1].id+1,
      taskname:task,
      completed:false
    };  //as object
    settasklist([...tasklist,newtask])
  }
  const deletetask=(id)=>{
    const newtasklist=tasklist.filter((task)=>{
      return task.id!==id
  
    });
    settasklist(newtasklist);
  }
  const completetask=(id)=>{
    settasklist(
      tasklist.map((task)=>{
      if(task.id === id){
        return {...task,completed:true}
      }else{
        return task;
      }
    }));
  }
  return (
    <div className="App">
      <input type="text" onChange={handlechange} />
      <br></br>
      <button onClick={addtask}>Add Tasks</button>
      <br></br>{task}

      <br></br>
      {tasklist.map((task1)=>{
        //return( 
        //<div className="task">
          //<h1>{task1.taskname}</h1>
          //<button onClick={()=>deletetask(task1.id)}>X</button>
        //</div>
        //)
        return <Task 
        id={task1.id} 
        taskname={task1.taskname} 
        completed={task1.completed}
        deletetask1={deletetask} 
        completetask1={completetask}/>
      })}
    </div>
  );
}

export default App;
