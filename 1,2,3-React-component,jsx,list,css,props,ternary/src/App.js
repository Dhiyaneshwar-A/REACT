import './App.css';
import {User2} from './User2.js';
function App() {
  
  const name="Dhiyanesh";
  const hname=<h1>Dhiyanesh</h1>
  const hage=<h2>21</h2>
  const hemail=<h2>dhiyanesh0704@gmail.com</h2>
  const user=(<div>
    {hage}
    {hemail}
  </div>);
  const age=19;
  const isgreen="green";
  if(age<=18){
    return <h1>UNDER</h1>  //USERINTERFACE CHANGE BASED ON CONDITION
  }
  const courses=["IT","ECE","EEE"];
  
  const users=[
    {name:"Anna",age:23},
    {name:"Shik",age:21},
    {name:"GC",age:21},
  ]
  return (
    <div className="App">
      HELLO,
      {name}
      {hname}
      {user}
      {user}
      {user1()}  
      
      USER COMPONENT
      
    <User />

    PROBS COMPONENT

    <User1 name="Anna" age={22} />
    
    <User1 name="Karthi" age={21} />
    
    {/*CONDITIONAL RENDERING SINGLE LINE*/}

    {age>=18 ? <h1>Over</h1> : <h1>Under</h1>} 
    <h1 style={{color: isgreen ? "green":"red"}}>THIS HAS COLOUR</h1>
    {isgreen && <button>BUTTON</button>}

     {/*TRAVERSAL OF LIST*/}

    {courses.map((value,key)=>{                 
      return <h1 key={key}>{value}</h1>
    })}

    {users.map((value,key)=>{
      return (
        <div key={key}>
          <h2>{value.name}-{value.age}</h2>
        </div>
      )
    })}

     {/*TRAVERSAL OF LIST AS COMPONENT*/}

  {users.map((value,key)=>{
      return (
        <div key={key}>
          <User2 name={value.name} age={value.age} />;
        </div>
      )
    })}


     {/*TRAVERSAL OF LIST Based on condition*/}

  {users.map((value,key)=>{
      if(value.age>21){
      return (
        <div key={key}>
          <h2>{value.name}-{value.age}</h2>
        </div>
      )
    }return(<div></div>)
    })}

   {/*TRAVERSAL OF LIST Based on condition*/}

   {users.map((value,key)=>
      value.age>21 && 
      <div>
        <h2>{value.name}=={value.age}</h2>
        </div>
   )}

    </div>

    

  );
}
const user1=()=>{       //JS Function
  return "Dhiyas";
}
const User=()=>{        //component
  return (
    <div>
      <h1>Dhiyanesh</h1>
      <h2>21</h2>
      <h2>dhiyanesh0704@gmail.com</h2>
    </div>
  )
}
const User1=(props)=>{
return(
  <div>
    <h1>{props.name}</h1>
    <h2>{props.age}</h2>
  </div>
)
}

export default App;
