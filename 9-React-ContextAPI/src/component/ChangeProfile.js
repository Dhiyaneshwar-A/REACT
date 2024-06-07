import { useState } from "react";
import { AppContext } from "../App";
import { useContext } from "react";
export const ChangeProfile=(/*props*/)=>{
    const [newusername,setnewusername]=useState("");
    const {setusername} = useContext(AppContext);
    return(
        <div>
            <input onChange={(event)=>{
                setnewusername(event.target.value)}}
            />
            <button onClick={()=>/*props.*/setusername(newusername)}>ChangeProfilename</button>
        </div>
    )
}