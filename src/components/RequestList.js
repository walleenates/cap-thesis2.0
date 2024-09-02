// src/components/RequestList.js
import React from 'react';

const RequestList = ({ requests, handleApprove, handleReduce, handleDecline }) => {
  return (
    <div className="request-list-container">
      <h2>Purchase Requests</h2>
      <ul>
        {requests.map((request, index) => (
          <li key={index} className="request-item">
            <span>{request.itemName} - Quantity: {request.quantity} - Status: {request.status}</span>
            <div className="request-actions">
              <button onClick={() => handleApprove(index)} disabled={request.status !== 'Pending'}>Approve</button>
              <button onClick={() => handleReduce(index)} disabled={request.status !== 'Pending'}>Reduce</button>
              <button onClick={() => handleDecline(index)} disabled={request.status !== 'Pending'}>Decline</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RequestList;
