import { Link } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import logo from "./logo.JPG"
import logo1 from "./logo1.JPG"

export default function NavBarLoggedOut(){
    const {googleSignIn, user} = UserAuth();
    const [active, setActive] = useState("nav_menu");
    const[toggleIcon, setToggleIcon] = useState("nav_toggler");
    const navToggler = () => {
        active === "nav_menu" ? setActive("nav_menu nav_active") : setActive("nav_menu")
        toggleIcon === "nav_toggler"
        ? setToggleIcon("nav_toggler toggle")
        : setToggleIcon("nav_toggler")
    }
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try{
      await googleSignIn()
    } catch(error){
      console.log(error);
    }
  }
  useEffect(() => {
    if(user != null){
      navigate('/home')
    }
  }, [user])


    return (
        <nav className='nav'>
          <Link
        style={{textDecoration: 'none'}}
        to='/home'
        >

           <img href="home" classname = "brand" style={{ width: 200, height: 60 }} src={logo1}/>
        </Link>
           
            <ul className={active}>
                <li className='nav_item'> <Link className='nav_link' to="/search">Search for a Ride</Link></li>
                <li className='nav_item'> <Link className='nav_link' to="/host">Host a Ride</Link></li>
                <li className='nav_item'> <Link onClick={handleGoogleSignIn} className='nav_link' to="/home">SignUp/Login</Link></li>

            </ul>
            <div onClick={navToggler} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    )
}
