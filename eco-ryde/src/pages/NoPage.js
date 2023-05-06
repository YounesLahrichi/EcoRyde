import React, {useContext} from "react";
import NavBarJSX from '../components/NavBar.jsx';
import Footer from "../components/Footer.js";

export default function NoPage(){
    
    return (
        <div>
            <NavBarJSX/>
            <h2>ERROR 404: Page not found</h2>
            <Footer />
        </div>
    )
}