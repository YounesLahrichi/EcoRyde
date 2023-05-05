import React, { useContext, useEffect, useState } from 'react';
import {auth, provider} from "../Context/firebase";
import {signInWithPopup} from "firebase/auth";
import { UserAuth } from '../Context/AuthContext';
import { useNavigate } from 'react-router';
import NavBar from '../components/NavBar.JSX';

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
      <NavBar/>
      <button onClick={handleGoogleSignIn}>Sign in With Google</button>
    </div>
  );
};

export default SignIn;