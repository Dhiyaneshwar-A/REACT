import { ChangeProfile } from "../component/ChangeProfile";
import { AppContext } from "../App";
import { useContext } from "react";
export const Profile = (/*props*/) =>{
    const { username } = useContext(AppContext)
    const { setusername } = useContext(AppContext)
    return (
    <div>
        <h1>This is Profile page of {/*props.username*/username}</h1>

        <ChangeProfile setusername={/*props.setusername*/setusername}/>
    </div>
    );
}