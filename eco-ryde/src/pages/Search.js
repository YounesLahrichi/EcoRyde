import React from "react";
import NavBarJSX from '../components/NavBar.jsx';
import Footer from "../components/Footer.js";

export default function Search() {
    return (
        <div className="containerFill">
            <NavBarJSX className="headerFill"/>
            <div className="contentFill">
                <h2>Search</h2>
            </div>
            <Footer className="footerFill"/>
        </div>
    )
}