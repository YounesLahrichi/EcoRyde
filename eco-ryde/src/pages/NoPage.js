import React, {useContext} from "react";
import NavBar from "../components/NavBar.JSX"

export default function NoPage(){
    
    return (
        <div>
            
            <NavBar/>
            <h2>ERROR 404: Page not found</h2>
        </div>
    )
}