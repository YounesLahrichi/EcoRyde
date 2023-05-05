import React, {useContext} from "react";
import NavBarJSX from '../components/NavBar.jsx';

export default function NoPage(){
    
    return (
        <div>
            <NavBarJSX/>
            <h2>ERROR 404: Page not found</h2>
        </div>
    )
}