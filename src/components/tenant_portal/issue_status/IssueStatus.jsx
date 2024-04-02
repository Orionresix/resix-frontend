import React from 'react'
import React, { useState, useEffect } from 'react';

const IssueStatus = ({ ticketNumber }) => {
  const [status, setStatus] = useState('');

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch(`http://example.com/api/status/${ticketNumber}`);
        if (response.ok) {
          const data = await response.json();
          setStatus(data.status);
        } else {
          throw new Error('Failed to fetch status');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchStatus();
  }, [ticketNumber]);

  return (
    <div >
      <h2>Status Update for Ticket #{ticketNumber}</h2>
      {status ? (
        <p>Status: {status}</p>
      ) : (
        <p>Status: Pending</p>
      )}
    </div>
  );
};

export default IssueStatus;
