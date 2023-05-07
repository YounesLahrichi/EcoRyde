import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import AccountHost from "./AccountHost";
import AccountRide from "./AccountRide";
import AccountInfo from "./AccountInfo";

function AccountData (){

    const [rideDisplay, setRideDisplay] = useState(false);
    const [hostDisplay, setHostDisplay] = useState(false);
    const [accountDisplay, setAccountDisplay] = useState(true);

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );

    return(
        <div className="pageData">
            <div className="accountNavDiv">
                <ul className="accountNav">
                    <li className='nav_item'> <Link 
                    onClick={async() => {
                        setRideDisplay(true);
                        setAccountDisplay(false);
                        setHostDisplay(false);
                      }}
                     className='nav_link' >My Rides</Link></li>

                    <li className='nav_item'> <Link 
                    onClick={async() => {
                        setRideDisplay(false);
                        setAccountDisplay(false);
                        setHostDisplay(true);
                      }}
                    className='nav_link'>My Hosts</Link></li>

                    <li className='nav_item'> <Link 
                    onClick={async() => {
                        setRideDisplay(false);
                        setAccountDisplay(true);
                        setHostDisplay(false);
                      }}
                    className='nav_link'>Account Details</Link></li>
                </ul>
            </div>
            
            <div className="displayCard">
                {accountDisplay && <AccountInfo/>}
                {hostDisplay && <AccountHost/>}
                {rideDisplay && <AccountRide/>}
            </div>
        </div>
    )
}

export default AccountData;