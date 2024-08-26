import React from 'react';


const Dashboard = ({ userName, onLogout }) => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="logo">
          <img src="spc.logo.png" alt="Logo" />
          <h1>SIMS</h1>
        </div>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Manage User</li>
            <li>Manage Item</li>
            <li>Reports</li>
            <li>Settings</li>
            <li>Scanner</li>
            <li>Request Form</li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header>
          <h2>Admin Dashboard</h2>
          <div className="search-and-profile">
            <input type="text" placeholder="Search..." />
            <div className="profile">
              <img src="/path/to/profile.png" alt="Admin User" />
              <span>{userName}</span>
              <button onClick={onLogout} className="logout-button">Logout</button>
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

export default Dashboard;
