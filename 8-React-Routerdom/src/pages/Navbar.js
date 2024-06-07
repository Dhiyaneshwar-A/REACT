import {Link} from "react-router-dom";
export const Navbar = () =>{
    return (
    <div>
        <Link to={"/"}>Home</Link><br></br>
        <Link to={"/contact"}>Contact</Link><br></br>
        <Link to={"/payment"}>Payment</Link>
    </div>
    )
}