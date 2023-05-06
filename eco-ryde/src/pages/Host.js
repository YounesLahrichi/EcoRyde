import React from "react";
import NavBarJSX from '../components/NavBar.jsx';
import Footer from "../components/Footer.js";

export default function Host() {
    return (
        <div className="containerFill">
            <NavBarJSX className="headerFill"/>
            <div className="contentFill">
                <h2>Host</h2>
            </div>
            <Footer className="footerFill"/>
        </div>
    )
}