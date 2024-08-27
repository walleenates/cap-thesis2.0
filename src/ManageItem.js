import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ManageItem = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [editingItem, setEditingItem] = useState(null);
  const [editValue, setEditValue] = useState('');
  const navigate = useNavigate();

  const handleAddItem = () => {
    if (newItem.trim()) {
      setItems([...items, { text: newItem }]);
      setNewItem('');
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

  return (
    <div className="manage-item-container">
      <button onClick={() => navigate('/dashboard')} className="back-button">Back to Dashboard</button>
      <h2>Manage Items</h2>
      <div className="item-form">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add new item"
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <ul className="item-list">
        {items.map((item, index) => (
          <li key={index}>
            {editingItem === index ? (
              <div className="edit-container">
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <button onClick={() => handleSaveEdit(index)}>Save</button>
              </div>
            ) : (
              <span>{item.text}</span>
            )}
            <button onClick={() => handleEditItem(index)}>Edit</button>
            <button onClick={() => handleDeleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageItem;
