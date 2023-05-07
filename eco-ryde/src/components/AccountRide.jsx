import { useState, useEffect } from "react";
import BookData from "../data.json";
import RideElement from "./RideElement";

function AccountRide(){
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
            <h1 className="headerCenter">My Registered Rides</h1>
            <ul>
                {data.map((item) => (
                <li key={item.pages}>
                    <RideElement
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
export default AccountRide;