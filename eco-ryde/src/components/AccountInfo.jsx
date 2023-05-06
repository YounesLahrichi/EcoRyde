import { UserAuth } from "../Context/AuthContext";


function AccountInfo(){
    const {user} = UserAuth()

    return (
        <div className="accountInfoDisplay">
            <div></div>
            <p>Email: {user.email}</p>
            <p>Name: {user.displayName}</p>
            <input type="text" />
            <p>Phone:</p>
            <input type="text" />
            <p>Address:</p>
            <input type="text" />

            <button>Update</button>
        </div>
    )
}
export default AccountInfo;