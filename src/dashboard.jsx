import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const AdminDashboard = ({ userName, onLogout }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);



  

  return (
    <div className="dashboard">
      
      <main className="main-content">
        <header>
          <h2>Admin Dashboard</h2>
          <div className="search-and-profile">
            <input type="text" placeholder="Search..." />
            <div className="profile">
              <img src="userdashboard.png" alt="" />
              <span>{userName}</span>
              <button className="dropdown-toggle" onClick={toggleDropdown}>
                &#9662;
              </button>
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <Link to="/account-settings">Account Settings</Link>
                  <button onClick={onLogout}>Logout</button>
                  
                </div>
              )}
            </div>
          </div>
        </header>
        <section className="cards"> 
          <div className="card">
            <h3>ITEMS</h3>
            <p>Placeholder for items</p>
          </div>
          <div className="card">
            <h3>FOLDER</h3>
            <p>Placeholder for folders</p>
          </div>
          <div className="card">
            <h3>USER</h3>
            <p>Placeholder for users</p>
          </div>
        </section>
      </main>
    </div>
  );
};


export default AdminDashboard;
