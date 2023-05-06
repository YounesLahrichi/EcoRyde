import React, {useContext} from "react";
import NavBarJSX from '../components/NavBar.jsx';
import Footer from "../components/Footer.js";

export default function Home() {
    return (
        <div>
            <NavBarJSX/>
            <h2>Home Page</h2>
            <Footer />
        </div>
    )
}