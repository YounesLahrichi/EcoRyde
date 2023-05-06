import React, {useContext} from "react";
import NavBarJSX from '../components/NavBar.jsx';
import Footer from "../components/Footer.js"

export default function Account() {
    return (
        <div className="containerFill">
            <NavBarJSX className="headerFill"/>
            <div className="contentFill">
                <h2>Account</h2>
            </div>
            <Footer className="footerFill"/>
        </div>
    )
}