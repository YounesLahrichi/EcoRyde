import React from "react";
import TextField from '@mui/material/TextField';

function HostRideCard(){
    return(
        <div className="pageData">
            <h1 className="hostHeader"> Host A Ride!</h1>
            <div className="displayCard">
                <form>
                    <TextField color="success" margin="normal" required id="outlined-basic" label="Event Name" variant="outlined" />
                    <TextField color="success" margin="normal" required id="outlined-basic" label="Event Address" variant="outlined" />
                    <TextField color="success" margin="normal" required id="outlined-basic" label="Event Arrive Time" variant="outlined" />
                    <TextField color="success" margin="normal" required id="outlined-basic" label="Event Start Time" variant="outlined" />
                    <TextField color="success" margin="normal" required id="outlined-basic" label="Event Leave Time" variant="outlined" />
                    <TextField color="success" margin="normal" required id="outlined-basic" label="Capacity" variant="outlined" /> 
                    <div className="accountUpdateButton">
                        <button className = "meowButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    
    )
}

export default HostRideCard;