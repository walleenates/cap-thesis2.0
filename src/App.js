import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignIn from './signin';
import Dashboard from './dashboard';
import SignUp from './signup';
import ForgotPassword from './ForgotPassword';

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
  const users = [
    { id: 1, username: 'John Doe', email: 'john@example.com' },
    { id: 2, username: 'Jane Doe', email: 'jane@example.com' },
    // ...
  ];

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
          <Route 
            path="/forgot-password" 
            element={<ForgotPassword />} 
          />
        </Routes>
      </Router>
      <div className="manage-user">
      <h2>Manage Users</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default App;
