import React from "react";
import NavBarJSX from '../components/NavBar.jsx';
import Footer from "../components/Footer.js";
import SearchBar from "../components/SearchBar.js";
import BookData from "../data.json";

export default function Search() {
    return (
        <div className="containerFill">
            <NavBarJSX className="headerFill"/>
            <div className="contentFill">
                <div className="bar">
                    <SearchBar placeholder="Search for a ride..." data={BookData}/>
                </div>
            </div>
            <Footer className="footerFill"/>
        </div>
    )
}