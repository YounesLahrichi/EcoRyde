import './components.css';
import { Link } from 'react-router-dom';
import { UserAuth } from "../Context/AuthContext";

export default function NavBarLoggedIn(){
    
    const {user, logOut} = UserAuth()
    const handleSignOut = async () => {
        try {
            await logOut();
        }catch(error){
            console.log(error);
        }
    }

    return (
        <div className='NavBarSizing'>
            <div>

            </div>
            <div className='NavBarButtons'>
                <Link to="/search">Search</Link>
                <Link to="/signin">Icon</Link>
                <button onClick={handleSignOut}>logout</button>

            </div>
        </div>
    )
}