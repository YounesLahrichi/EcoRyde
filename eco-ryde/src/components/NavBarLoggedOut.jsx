import { Link } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function NavBarLoggedOut(){
const {googleSignIn, user} = UserAuth();
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
        <div className='NavBarSizing'>
            <div>

            </div>
            <div className='NavBarButtons'>
                <Link to="/search">Search</Link>
                <button onClick={handleGoogleSignIn}>Sign in With Google</button>
            </div>
        </div>
    )
}
