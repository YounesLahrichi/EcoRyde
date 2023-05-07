import { useState, useEffect } from "react";
import BookData from "../data.json"
function AccountRide(){
    const [data, setData] = useState([]);
    setData(BookData);

    console.log(data[0].author);
    return (
        <div>
            <h1 className="headerCenter">My Registered Rides</h1>
            <ul>
                {data.map((item) => (
                <li >{item.author}</li>
                ))}
            </ul>
        </div>
    )
}
export default AccountRide;