import React from "react";
import NavBarJSX from '../components/NavBar.jsx';
import Footer from "../components/Footer.js";
import SearchBar from "../components/SearchBar.js";

export default function Search() {
    return (
        <div className="containerFill">
            <NavBarJSX className="headerFill"/>
            <div className="contentFill">
                <SearchBar />
            </div>
            <Footer className="footerFill"/>
        </div>
    )
}