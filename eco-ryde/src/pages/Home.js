import React, {useContext} from "react";
import NavBarJSX from '../components/NavBar.jsx';
import Footer from "../components/Footer.js";
import FactCard from "../components/FactCard.js";

export default function Home() {
    return (
        <div>
            <NavBarJSX/>
            <div>
                <div>
                    <h2>Home Page</h2>
                </div>
                <div className="home-card-container">
                    <FactCard />
                    <FactCard />
                </div>
            </div>
            <Footer />
        </div>
    )
}