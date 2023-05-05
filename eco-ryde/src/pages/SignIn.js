import React, { useContext, useEffect, useState } from 'react';
import {auth, provider} from "../Context/firebase";
import {signInWithPopup} from "firebase/auth";
import { UserAuth } from '../Context/AuthContext';
import { useNavigate } from 'react-router';
import NavBarJSX from '../components/NavBar.jsx';


function SignIn () {
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
    <div>
        <NavBarJSX/>
      <button onClick={handleGoogleSignIn}>Sign in With Google</button>
    </div>
  );
};

export default SignIn;