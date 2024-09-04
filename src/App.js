import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignIn from './signin';
import SignUp from './signup';
import ForgotPassword from './ForgotPassword';
import AdminDashboard from './dashboard';
import ManageUser from './ManageUser';
import ManageItem from './components/ManageItem';
import HomePage from './pages/HomePage';
import { auth } from './firebase';




function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const {currentUser} = auth


  return (
    <div className="App">
    {userName}
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={currentUser && currentUser ? (
              <HomePage />
            ) : (
              <Navigate to="/signin" />
            )}
          />
          <Route 
            path="/signin" 
            element={<SignIn  />} 
          />
          <Route 
            path="/signup" 
            element={<SignUp />} 
          />
          <Route 
            path="/forgot-password" 
            element={<ForgotPassword />} 
          />
          <Route 
            path="/dashboard" 
            element={currentUser ? (
              <AdminDashboard />
            ) : (
              <Navigate to="/signin" />
            )}
          />
          <Route 
            path="/manage-item" 
            element={currentUser ? (
              <ManageItem />
            ) : (
              <Navigate to="/signin" />
            )}
          />
          <Route 
            path="/manage-user" 
            element={currentUser ? (
              <ManageUser />
            ) : (
              <Navigate to="/signin" />
            )}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
