import React, { useState } from 'react';
import './ManageItem.css';

const ManageItem = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [selectedCollege, setSelectedCollege] = useState(''); // State for selected college
  const [editingItem, setEditingItem] = useState(null);
  const [editValue, setEditValue] = useState('');
  const [showList, setShowList] = useState(true);

  const colleges = ['CCS', 'COC', 'CED', 'CBA', 'BED', 'COE']; // Predefined colleges

  const handleAddItem = () => {
    if (newItem.trim() && selectedCollege) {
      const newItemWithCollege = {
        text: newItem,
        college: selectedCollege, // Add selected college to the item
      };
      setItems([...items, newItemWithCollege]);
      setNewItem('');
      setSelectedCollege(''); // Reset college selection after adding
    }
  };

  const handleEditItem = (index) => {
    setEditingItem(index);
    setEditValue(items[index].text);
  };

  const handleSaveEdit = (index) => {
    const updatedItems = items.map((item, i) =>
      i === index ? { ...item, text: editValue } : item
    );
    setItems(updatedItems);
    setEditingItem(null);
    setEditValue('');
  };

  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const toggleListVisibility = () => {
    setShowList(!showList);
  };

  return (
    <div className="manage-item-container">
      <h2>Manage Items</h2>
      <div className="item-form">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add new item"
        />
        <select
          value={selectedCollege}
          onChange={(e) => setSelectedCollege(e.target.value)}
          className="college-select"
        >
          <option value="" disabled>Select College</option>
          {colleges.map((college) => (
            <option key={college} value={college}>{college}</option>
          ))}
        </select>
        <button onClick={handleAddItem} className="add-button">Add Item</button>
      </div>
      <button onClick={toggleListVisibility} className="toggle-button">
        {showList ? 'Hide List' : 'Show List'}
      </button>
      {showList && (
        <ul className="item-list">
          {items.map((item, index) => (
            <li key={index} className="item">
              {editingItem === index ? (
                <div className="edit-container">
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                  />
                  <button onClick={() => handleSaveEdit(index)} className="save-button">Save</button>
                </div>
              ) : (
                <>
                  <span className="item-text">{item.text}</span>
                  <span className="item-college">({item.college})</span>
                </>
              )}
              <div className="item-actions">
                <button onClick={() => handleEditItem(index)} className="edit-button">Edit</button>
                <button onClick={() => handleDeleteItem(index)} className="delete-button">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ManageItem;
