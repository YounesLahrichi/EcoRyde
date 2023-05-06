import React from "react";
import NavBarJSX from '../components/NavBar.jsx';
import Footer from "../components/Footer.js";

export default function Search() {
    return (
        <div>
            <NavBarJSX/>
            <div className="backgroundSearch">
                <h2>Search</h2>
            </div>
            <Footer />
        </div>
    )
}