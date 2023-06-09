
import React from "react";
import { useState } from "react";
import AccountHost from "./AccountHost";
import AccountRide from "./AccountRide";
import AccountInfo from "./AccountInfo";

function AccountData (){

    const [rideDisplay, setRideDisplay] = useState(false);
    const [hostDisplay, setHostDisplay] = useState(false);
    const [accountDisplay, setAccountDisplay] = useState(true);

    return(
        <div className="pageData">
            <div className="accountNavDiv">
                <ul className="accountNav">

                    <button 
                    className="meowButton2"
                    onClick={async() => {
                        setRideDisplay(true);
                        setAccountDisplay(false);
                        setHostDisplay(false);
                      }}
                    >My Rides</button>

                    <button 
                        className="meowButton2"
                        onClick={async() => {
                            setRideDisplay(false);
                            setAccountDisplay(false);
                            setHostDisplay(true);
                        }}
                    >My Hosts</button>

                    <button 
                        className="meowButton2"
                        onClick={async() => {
                            setRideDisplay(false);
                            setAccountDisplay(true);
                            setHostDisplay(false);
                        }}
                    >Account Details</button>
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