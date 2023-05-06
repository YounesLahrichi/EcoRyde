import React, {useContext} from "react";
import NavBarJSX from '../components/NavBar.jsx';
import Footer from "../components/Footer.js";
import FactCard from "../components/FactCard.js";

export default function Home() {
    return (
        <div className="containerFill">
            <NavBarJSX className="headerFill"/>
            <div className="contentFill">
            <div className="home-card-container">
                    <FactCard 
                    title = "What is EcoRyde?"
                    filler = "FILLER WORDS HERE"/>
                    <FactCard 
                    title = "Why Choose EcoRyde?"
                    filler = "FILLER WORDS HERE"/>
                    <FactCard 
                    title = "Sustainability Shit!"
                    filler = "FILLER WORDS HERE"/>
                </div>
            </div>
            <Footer className="footerFill"/>
        </div>
    )
}