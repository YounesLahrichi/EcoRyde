import { UserAuth } from "../Context/AuthContext";
import TextField from '@mui/material/TextField';

function AccountInfo(){
    const {user} = UserAuth()
    
    return (
        <div>
            <form>
            <h1 className="headerCenter">Welcome Back {user.displayName}!</h1>
                <div className="accountInfoDisplay">
                    <p>Email: {user.email}</p>
                    <p>Name: {user.displayName}</p>
                    <TextField color="success" margin="dense" id="outlined-basic" label="Update Name" variant="outlined" />
                    <p>Phone:</p>
                    <TextField color="success" margin="dense" required id="outlined-basic" label="Update Phone Number" variant="outlined" />
                    <p>Address:</p>
                    <TextField color="success" margin="dense" required id="outlined-basic" label="Update Address" variant="outlined" />
                </div>
                            
                <div className="accountUpdateButton">
                    <button>Update</button>
                </div>
            </form>
        </div>
        
    )
}
export default AccountInfo;