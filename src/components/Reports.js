import React, { useState } from 'react';
import './Reports.css'; // Assuming you have a CSS file for styling

const Reports = () => {
  // Define a list of sample items
  const sampleItems = [
    { name: 'Item 1', description: 'Description of Item 1', quantity: 10 },
    { name: 'Item 2', description: 'Description of Item 2', quantity: 20 },
    { name: 'Item 3', description: 'Description of Item 3', quantity: 30 },
    { name: 'Item 4', description: 'Description of Item 4', quantity: 40 },
    { name: 'Item 5', description: 'Description of Item 5', quantity: 50 },
  ];

  // State to manage the visibility of the update form
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  // State to manage the search query
  const [searchQuery, setSearchQuery] = useState('');

  // Toggle the visibility of the update form
  const toggleUpdateForm = () => {
    setShowUpdateForm(!showUpdateForm);
  };

  // Filter the items based on the search query
  const filteredItems = sampleItems.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.quantity.toString().includes(searchQuery)
  );

  return (
    <div className="reports-container">
      <h2>Reports</h2>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search items..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />

      {/* Button to show/hide the update form */}
      <button onClick={toggleUpdateForm} className="toggle-button">
        {showUpdateForm ? 'Hide Update Form' : 'Show Update Form'}
      </button>

      {/* Conditionally render the update form */}
      {showUpdateForm && (
        <div className="update-form">
          <h3>Update Item</h3>
          {/* Update form has been simplified */}
          <h3>Item stock</h3>
        </div>
      )}

      <table className="reports-table">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Description</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reports;