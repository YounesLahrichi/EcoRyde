import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../Pages/AuthContext";

export default function NavBar(){

    const {user, logOut} = UserAuth()
    const handleSignOut = async () => {
        try {
            await logOut();
        }catch(error){
            console.log(error);
        }
    }

    return (
        <div>
            {user?.displayName ? "hi" : "nO"}
            <button onClick={handleSignOut}>logout</button>
            <h1>Header: React Router</h1>
            <ul>
                <li>
                    <Link to="/home">home</Link>
                </li>
                <li>
                    <Link to="/account">account</Link>
                </li>
                <li>
                    <Link to="/search">search</Link>
                </li>
                <li>
                    <Link to="/signin">SignIn</Link>
                </li>
            </ul> 
        </div>
    )
}