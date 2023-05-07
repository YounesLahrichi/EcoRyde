import { UserAuth } from "../Context/AuthContext";


function AccountInfo(){
    const {user} = UserAuth()
    
    return (
        <div>
            <form>
            <h1 className="headerCenter">Welcome Back {user.displayName}!</h1>
                <div className="accountInfoDisplay">
                    <p>Email: {user.email}</p>
                    <p>Name: {user.displayName}</p>
                    <input type="text" placeholder="Update Your Name..." />
                    <p>Phone:</p>
                    <input type="text" placeholder="Update Your Phone Number..."/>
                    <p>Address:</p>
                    <input type="text" placeholder="Update Your Address..."/>
                </div>
                            
                <div className="accountUpdateButton">
                    <button>Update</button>
                </div>
            </form>
        </div>
        
    )
}
export default AccountInfo;