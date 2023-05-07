import { Link } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
import React from "react";
import NavBarLoggedOut from "./NavBarLoggedOut";
import NavBarLoggedIn from "./NavBarLoggedIn";

export default function NavBar(){

    const {user} = UserAuth()
    console.log(user);
    return (
        <div>
            {user?.displayName ? <NavBarLoggedIn/> : <NavBarLoggedOut/>}
        </div>
    )
}
