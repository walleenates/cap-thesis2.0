
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserAccount } from './firebase';


function SignUp() {
  
  const [name, setName] = useState();
  const [email, setEmail] = useState()
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState()

  
  const navigate = useNavigate();

  

  const handleSignIn = async () => {
    if(name && email && password && confirmPassword){
      await createUserAccount(name, email, password, confirmPassword)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add sign-up logic here
    navigate('/signin');
  };

  return (
    <div className="sign-up-container">
      <div className="sign-up-left">
        <div className="logo-container">
          <img src="spclogo.png" alt="Logo" className="logo" />
          <div className="system-name">
          <span style={{ fontSize: '150px', fontWeight: 'normal', fontFamily: 'Arial, sans-serif' }}>SIMS</span>
            </div>
        </div>
      </div>
      <div className="sign-up-right">
        <h2>Sign Up</h2>
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input 
            
              type="text" 
              id="username" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Enter your username" 
            />
          <input 
              type="email" 
              id="email" 
              value={name} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Enter your username" 
            />
      
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Enter your password" 
            />
             <label htmlFor="confirm-password">Confirm password</label>
            <input 
              type="password" 
              id="confirm-password" 
              value={password} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              placeholder="Confirm password" 
            />
          </div>
          <center><button type="submit" className="submit-button" onClick={() => handleSignIn()}>Sign Up</button></center>
          <div className="new-account">
            <span>Already have an account? <a href="/signin" className="create-account">Sign in</a></span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
