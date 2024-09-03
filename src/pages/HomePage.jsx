import React, { useState } from 'react';
import AdminDashboard from '../dashboard';
import ManageUser from '../ManageUser';
import ManageItem from '../components/ManageItem';
import RequestForm from '../components/RequestForm';
import Reports from '../components/Reports';
import ApprovedPurchaseRequest from '../components/ApprovedPurchaseRequest';  // Import the new component
import '../pages/HomePage.css';

const HomePage = () => {
  const [activeComponent, setActiveComponent] = useState('dashboard');

  const handleChangeActiveComponent = (page) => {
    setActiveComponent(page);
  };

  return (
    <div className='home-page-container'>
      <aside className="sidebar">
        <div className="logo">
          <h1>SIMS</h1>
          <img src="spclogo.png" alt="Logo" />
        </div>
        <button onClick={() => handleChangeActiveComponent("dashboard")}>
          <img src="dashboard.png" alt="Dashboard Icon" className="sidebar-icon" />
          Dashboard
        </button>
       
        <button onClick={() => handleChangeActiveComponent("manage-item")} className="sidebar-button">
          <img src="manageitem.png" alt="Manage Item Icon" className="sidebar-icon" />
          Manage Item
        </button>
       
        <button onClick={() => handleChangeActiveComponent("purchased-request")} className="sidebar-button">
          <img src="prequest.png" alt="Purchased Request Icon" className="sidebar-icon" />
          Approved Purchased Request
        </button>
        <button onClick={() => handleChangeActiveComponent("settings")} className="sidebar-button">
          <img src="setting.png" alt="Settings Icon" className="sidebar-icon" />
          Settings
        </button>
        <button onClick={() => handleChangeActiveComponent("reports")} className="sidebar-button">
          <img src="reports.png" alt="Reports Icon" className="sidebar-icon" />
          Reports
        </button>
        <button onClick={() => handleChangeActiveComponent("scanner")} className="sidebar-button">
          <img src="barcodescanner.png" alt="Scanner Icon" className="sidebar-icon" />
          Scanner
        </button>
      </aside>
      <div className="main-content">
        {activeComponent === 'dashboard' && <AdminDashboard />}
        {activeComponent === 'manage-user' && <ManageUser />}
        {activeComponent === 'manage-item' && <ManageItem />}
        {activeComponent === 'request-form' && <RequestForm />}
        {activeComponent === 'purchased-request' && <ApprovedPurchaseRequest />} {/* Add the new component */}
        {activeComponent === 'reports' && <Reports />}
      </div>
    </div>
  );
};

export default HomePage;
