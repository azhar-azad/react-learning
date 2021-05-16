import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from '../../firebase';

const Login = () => {
  const signIn = () => {
    // sign in ..
    auth.signInWithPopup(provider)
      .then(result => {
        console.log(result);
      })
      .catch(error => alert(error.message));
  };
  
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
             alt="facebook_logo"/>
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt="facebook_text"/>
        <Button
          type="submit"
          onClick={signIn}>Sign In</Button>
      </div>
    </div>
  );
};

export default Login;