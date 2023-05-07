import React, {useContext} from "react";
import NavBarJSX from '../components/NavBar.jsx';
import Footer from "../components/Footer.js"
import AccountData from "../components/AccountData.jsx";

export default function Account() {
    return (
        <div className="containerFill">
            <NavBarJSX className="headerFill"/>
            <div className="contentFill">
                <AccountData/>
            </div>
            <Footer className="footerFill"/>
        </div>
    )
}