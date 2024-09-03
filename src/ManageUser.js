import React, { useState } from 'react';
import './ManageUser.css'; // Ensure this CSS file has the necessary styles

const generateRandomPassword = (length = 8) => {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?';
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  return password;
};

const departments = ['CCS', 'COC', 'CED', 'CBA', 'BED', 'COE'];

const ManageUser = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState(departments[0]);
  const [password, setPassword] = useState(generateRandomPassword());
  const [editingIndex, setEditingIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  const handleAddUser = () => {
    if (name.trim() && contactNumber.trim() && email.trim()) {
      setUsers([...users, { name, contactNumber, email, department: selectedDepartment, password }]);
      // Clear input fields after adding user
      setName('');
      setContactNumber('');
      setEmail('');
      setSelectedDepartment(departments[0]);
      setPassword(generateRandomPassword()); // Generate a new password for the next user
    }
  };

  const handleEditUser = (index) => {
    setEditingIndex(index);
    setEditValue(users[index].name);
  };

  const handleSaveEdit = (index) => {
    const updatedUsers = users.map((user, i) =>
      i === index ? { ...user, name: editValue } : user
    );
    setUsers(updatedUsers);
    setEditingIndex(null);
    setEditValue('');
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  return (
    <div className="manage-user-container">
      <h2>Manage Users</h2>
      <div className="user-form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          placeholder="Contact Number"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <div className="department-toggle">
          {departments.map((department) => (
            <button
              key={department}
              className={selectedDepartment === department ? 'active' : ''}
              onClick={() => setSelectedDepartment(department)}
            >
              {department}
            </button>
          ))}
        </div>
        <button onClick={handleAddUser}>Add User</button>
      </div>
      <ul className="user-list">
  {users.map((user, index) => (
    <li key={index}>
      {editingIndex === index ? (
        <div>
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
          <button onClick={() => handleSaveEdit(index)}>Save</button>
        </div>
      ) : (
        <div>
          <span>Name: {user.name}</span>
          <span>Contact Number: {user.contactNumber}</span>
          <span>Email: {user.email}</span>
          <span>Department: {user.department}</span>
          <span>Password: {user.password}</span>
        </div>
      )}
      <button onClick={() => handleEditUser(index)}>Edit</button>
      <button className="delete" onClick={() => handleDeleteUser(index)}>Delete</button>
    </li>
  ))}
</ul>
    </div>
  );
};

export default ManageUser;
