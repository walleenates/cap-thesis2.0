import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignIn from './signin';
import SignUp from './signup';
import HomePage from './pages/HomePage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const handleLogin = (name) => {
    setIsLoggedIn(true);
    setUserName(name);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
  };
  

  return (  
    <div className="App">
      <Router>
        <Routes>
        <Route 
            path="/" 
            element={isLoggedIn ? (
              <HomePage />
            ) : (
              <Navigate to="/signin" />
            )} 
          />
          <Route 
            path="/signin" 
            element={<SignIn onLogin={handleLogin} />} 
          />
          <Route 
            path="/signup" 
            element={<SignUp />} 
          />
          {/* 
          <Route 
            path="/dashboard" 
            element={isLoggedIn ? (
              <Dashboard userName={userName} onLogout={handleLogout} />
            ) : (
              <Navigate to="/signin" />
            )} 
          />
          <Route 
            path="/ManageItem" 
            element={isLoggedIn ? (
              <ManageItem  />
            ) : (
              <Navigate to="/signin" />
            )} 
          />
          <Route 
            path="/" 
            element={<Navigate to={isLoggedIn ? "/dashboard" : "/signin"} />} 
          />
          <Route 
            path="/forgot-password" 
            element={<ForgotPassword />} 
          />
          <Route path="/manage-user" element={<ManageUser/>} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/manage-item" element={<ManageItem />} /> */}
          
        </Routes>
        <Routes>
     
      
      {/* Define other routes here */}
    </Routes>
      </Router>
      
    </div>
  );
}

export default App;
