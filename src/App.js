import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './signin';
import SignUp from './signup';
import ForgotPassword from './ForgotPassword';
import AdminDashboard from './dashboard';
import ManageUser from './ManageUser';
import ManageItem from './components/ManageItem';
import HomePage from './pages/HomePage';
import { auth } from './firebase';




function App() {
  
  const {currentUser} = auth


  return (
    <div className="App">
  
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={<AdminDashboard /> }
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
            element={currentUser && 
              <AdminDashboard />
           }
          />
          <Route 
            path="/manage-item" 
            element={currentUser && (
              <ManageItem />
            ) }
          />
          <Route 
            path="/manage-user" 
            element={currentUser && (
              <ManageUser />
            ) }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
