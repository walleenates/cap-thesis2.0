import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const AdminDashboard = ({ userName, onLogout }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="logo">
          <img src="spclogo.png" alt="Logo" />
          <h1>SIMS</h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/dashboard">
                <img src="dashboard.png" alt="Dashboard" className="icon" /> Dashboard
              </Link>
            </li>
            <li>
              <Link to="/manage-user">
                <img src="userdash.png" alt="Manage User" className="icon" /> Manage User
              </Link>
            </li>
            <li>
              <Link to="/ManageItem">
                <img src="manage-item-icon.png" alt="Manage Item" className="icon" />
                
                 
              </Link>
              
            </li>
            <li>
              <Link to="/reports">
                <img src="reports-icon.png" alt="Reports" className="icon" /> 
              </Link>
            </li>
            <li>
              <Link to="/settings">
                <img src="settings-icon.png" alt="Settings" className="icon" /> 
              </Link>
            </li>
            <li>
              <Link to="/scanner">
                <img src="scanner-icon.png" alt="Scanner" className="icon" />
              </Link>
            </li>
            <li>
              <Link to="/request-form">
                <img src="request-form-icon.png" alt="Purchased Request" className="icon" /> 
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
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
