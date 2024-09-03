// src/components/ApprovedPurchaseRequest.js
import React, { useState } from 'react';

const ApprovedPurchaseRequest = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your file upload logic here
    if (file) {
      console.log("File to upload:", file);
      // Add logic to upload file to storage or server
    }
  };

  return (
    <div className="approved-purchase-request-container">
      <h2>Approved Purchased Request</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fileUpload">Upload File or Picture:</label>
          <input
            type="file"
            id="fileUpload"
            name="fileUpload"
            accept="image/*,application/pdf"
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit" className="upload-button">Upload</button>
      </form>
      {file && (
        <div className="file-info">
          <h4>File Details:</h4>
          <p>Name: {file.name}</p>
          <p>Type: {file.type}</p>
          <p>Size: {(file.size / 1024).toFixed(2)} KB</p>
        </div>
      )}
    </div>
  );
};

export default ApprovedPurchaseRequest;
