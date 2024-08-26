import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignIn from './signin';
import Dashboard from './dashboard';
import SignUp from './signup';

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
            path="/signin" 
            element={<SignIn onLogin={handleLogin} />} 
          />
          <Route 
            path="/signup" 
            element={<SignUp />} 
          />
          <Route 
            path="/dashboard" 
            element={isLoggedIn ? (
              <Dashboard userName={userName} onLogout={handleLogout} />
            ) : (
              <Navigate to="/signin" />
            )} 
          />
          <Route 
            path="/" 
            element={<Navigate to={isLoggedIn ? "/dashboard" : "/signin"} />} 
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
