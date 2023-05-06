import React, {useContext} from "react";
import NavBarJSX from '../components/NavBar.jsx';
import Footer from "../components/Footer.js"

export default function Account() {
    return (
        <div>
            <NavBarJSX/>
            <h2>Account</h2>
            <Footer/>
        </div>
    )
}