import { AppContext } from "../App";
import { useContext } from "react";
export const Home = (/*props*/) =>{
    const { username }=useContext(AppContext)
    return (
    <h1>Hii,{/*props.username*/username}</h1>
    );
}