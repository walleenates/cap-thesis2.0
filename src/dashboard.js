import React from 'react';
import { Link } from 'react-router-dom';


const AdminDashboard = () => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="logo">
          <img src="spclogo.png" alt="Logo" />
          <h1>SIMS</h1>
        </div>
        <nav>
          <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/manage-user">Manage User</Link></li>
            <li><Link to="/manage-item">Manage Item</Link></li>
            <li><Link to="/reports">Reports</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            <li><Link to="/scanner">Scanner</Link></li>
            <li><Link to="/request-form">Request Form</Link></li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header>
          <h2>Admin Dashboard</h2>
          <div className="search-and-profile">
            <input type="text" placeholder="Search..." />
            <div className="profile">
              <img src="/path/to/profile.png" alt="" />
              <span>Admin user</span>
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
