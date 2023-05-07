import { useState, useEffect } from "react";
import BookData from "../data.json";
import HostElement from "./HostElement.jsx";

function AccountHost(){

    const [data, setData] = useState([]);

    useEffect(() => {
    async function fetchData() {
        setData(BookData);
    }
    fetchData();
    }, []);

    
    console.log(data);

    return (
        <form>

        
        <div>
            <h1 className="headerCenter">My Hosted Rides</h1>
            <ul>
                {data.map((item) => (
                <li key={item.pages}>
                    <HostElement
                    title = {item.author}
                    time = {item.pages}
                    />
                </li>
                ))}
            </ul>
        </div>
        </form>
    )
}
export default AccountHost;