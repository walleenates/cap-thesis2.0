import React, { useState } from 'react';
import JsBarcode from 'jsbarcode';

import './ManageItem.css';

const ManageItem = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [editingItem, setEditingItem] = useState(null);
  const [editValue, setEditValue] = useState('');

  const generateBarcode = (text) => {
    const canvas = document.createElement('canvas');
    JsBarcode(canvas, text, { format: 'CODE128' });
    return canvas.toDataURL('image/png');
  };

  const handleAddItem = () => {
    if (newItem.trim()) {
      const newItemWithBarcode = {
        text: newItem,
        barcode: generateBarcode(newItem + Date.now()), // Generate unique barcode using item text + timestamp
      };
      setItems([...items, newItemWithBarcode]);
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
      <h2>Manage Items</h2>
      <div className="item-form">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add new item"
        />
        <button onClick={handleAddItem} className="add-button">Add Item</button>
      </div>
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
                <img src={item.barcode} alt="Barcode" className="barcode-image" />
              </>
            )}
            <div className="item-actions">
              <button onClick={() => handleEditItem(index)} className="edit-button">Edit</button>
              <button onClick={() => handleDeleteItem(index)} className="delete-button">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageItem;
