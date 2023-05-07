import React from "react";
import NavBarJSX from '../components/NavBar.jsx';
import HostRideCard from "../components/HostRideCard.jsx";
import Footer from "../components/Footer.js";

export default function Host() {
    return (
        <div className="containerFill">
            <NavBarJSX className="headerFill"/>
            <div className="contentFill">
                <HostRideCard/>
            </div>
            <Footer className="footerFill"/>
        </div>
    )
}