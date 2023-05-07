import React from "react";


function HostRideCard(){

    return(
        <div className="pageData">
            <h1 className="hostHeader"> Host A Ride!</h1>
            <div className="displayCard">
                <form>
                    <div className="accountInfoDisplay">
                        <div className="inputStyle">
                            <p>Event Name:</p>
                            <input className="inputPadding" type="text" placeholder="Name of the Event..." />
                        </div>

                        <div className="inputStyle">
                            <p>Event Address:</p>
                            <input className="inputPadding" type="text" placeholder="Address of the Event..." />
                        </div>

                        <div className="inputStyle">
                            <p>Arrive Time:</p>
                            <input className="inputPadding" type="text" placeholder="Arrive to the Event by..." />
                        </div>

                        <div className="inputStyle">
                            <p>Event Start:</p>
                            <input className="inputPadding" type="text" placeholder="When does Event Start..." />
                        </div>

                        <div className="inputStyle">
                            <p>Event Leave:</p>
                            <input className="inputPadding" type="text" placeholder="When does Event End..." />
                        </div>
                        <div className="inputStyle">
                            <p>Capacity: </p>
                            <input className="inputPadding" type="text" placeholder="What is the Capacity for the ride..." />
                        </div>


                    </div>
                                
                    <div className="accountUpdateButton">
                        <button>Update</button>
                    </div>
                </form>
            </div>
        </div>
    
    )
}

export default HostRideCard;