// src/RequestForm.js
import React, { useState } from 'react';
import './RequestForm.css';


const RequestForm = () => {
  const [requestData, setRequestData] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Request Data:', requestData);
    console.log('File:', file);
  };

  return (
    <div className="request-form-container">
      <h2>Submit a Request</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="requestData">Request Details:</label>
          <input
            type="text"
            id="requestData"
            value={requestData}
            onChange={(e) => setRequestData(e.target.value)}
            placeholder="Enter your request details"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="fileUpload">Upload File:</label>
          <input
            type="file"
            id="fileUpload"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <button type="submit" className="submit-button">Submit Request</button>
      </form>
    </div>
  );
};

export default RequestForm;
