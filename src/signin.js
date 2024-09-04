/* eslint-disable jsx-a11y/anchor-has-content */
import React, {  useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, LoginUser } from './firebase';


function SignIn({ onLogin }) {
  const {currentUser} = auth
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  


  const handleSubmit =  async () => {
    
     if(email && password){
      const loggedIN = LoginUser(email, password)
      console.log(email)
      if(loggedIN){
        navigate('/')
        return loggedIN
      }
      console.log('wala na log in')
     } else {
      console.log('PLease fill in fields')
     }
  };



  useEffect(() => {
    if(currentUser && currentUser){
      console.log('ahahah')
      navigate('/')
    }
  },[currentUser, navigate])

  return (
    <div className="signin-container">
      <div className="signin-left">
        <div className="logo-container">
          <img src="spclogo.png" alt="School Logo" className="logo" />
          <div className="system-name">
            <span style={{ fontSize: '150px', fontWeight: 'normal', fontFamily: 'Arial, sans-serif' }}>SIMS</span>
          </div>
        </div>
      </div>

      <div className="signin-right">
        {currentUser && currentUser.email}
        <h2>Sign In</h2>
        <form className="signin-form">
          <div className="form-group">
            <label htmlFor="email"></label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Enter your email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="password"></label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              placeholder="Enter your password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
               
            />
          </div>
          <div className="form-actions">
            <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
            <a href="/signup" className="signup"></a>
          </div>
          <center><button type="submit" className="login-button" onClick={() => handleSubmit()}>Login</button></center>
          <div className="or-container">
            <span>or</span>
          </div>
          <div className="other-login-options">
            <button className="google-signin">
              <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google Logo" />
              Sign in with Google
            </button>
            <button className="facebook-signin">
              <img src="https://www.facebook.com/images/fb_icon_325x325.png" alt="Facebook Logo" />
              Sign in with Facebook
            </button>
          </div>
          <div className="new-account">
            <span>New here? </span><a href="/signup" className="create-account">Create an account</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;