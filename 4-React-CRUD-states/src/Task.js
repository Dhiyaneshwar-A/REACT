export const Task=(props)=>{
    return( 
    <div className="task" style={{backgroundColor:props.completed?"green":"white"}}>
        <h1>{props.taskname}</h1>
        <button onClick={()=>props.completetask1(props.id)}>Completed</button>
        <button onClick={()=>props.deletetask1(props.id)}>X</button>
    </div>
    )
}