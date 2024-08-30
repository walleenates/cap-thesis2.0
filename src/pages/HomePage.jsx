import React, {  useState } from 'react'
import AdminDashboard from '../dashboard'
import ManageUser from '../ManageUser'
import ManageItem from '../components/ManageItem'
import { Link } from 'react-router-dom'

import './HomePage.css'

const HomePage = () => {
    const [activeComponent, setActiveComponent] = useState('dashboard')
    const handleChangeActiveComponent = (page) => {
       setActiveComponent(page)
    }
  return (
    <div className='home-page-container'>
       <div className="sidebar-buttons">
       <aside className="sidebar">
        <div className="logo">
          <img src="spclogo.png" alt="Logo" />
          <h1>SIMS</h1>
        </div>
        <button onClick={() => handleChangeActiveComponent("dashboard")}>Dashboard</button>
        <button onClick={() => handleChangeActiveComponent("manage-user")}>Manage User</button>
        <button onClick={() => handleChangeActiveComponent("manage-item")}>Manage Item</button>
      </aside>
        
       </div>
        <div className="main-content">
        {activeComponent === 'dashboard' ? <AdminDashboard /> : activeComponent === 'manage-user'? <ManageUser />: activeComponent === 'manage-item' ? <ManageItem /> : "No active Component"}
   </div>
    </div>
  )
}

export default HomePage