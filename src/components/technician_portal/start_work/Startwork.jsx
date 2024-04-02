import React from 'react'
import '../Startwork.css'
// const Startwork = () => {
//   return (
//     <div>
//       <div className='Welcome'> 
//       <img src={logo} alt="logo"  />
//         <h1>Work Order</h1>
//         <h2>Ticket No</h2>
//         <img src={request} alt="request"  />
//         </div>

//         <div className='description'> 
//         <p>Issue:Bathroom Sink Leak</p>
//         <p>Type:Plumbing</p>
//         <p>Description:Significant leak observed originatinating from the juction
//             of the P-trap and the drakepipe beneath the sink. </p>
        
//         <p>Priority:Urgent Attention recommended to prevent 
//             further damage and structural issues</p>

//         <p>Potential Cause:Degraded seal or crack in the piping</p>
//         </div>

//         <Button type='submit' className='startwork_button' variant='contained'>
//             Start Work
//           </Button>
      
//     </div>
//   )
// }

// export default Startwork

import React, { useState, useEffect } from 'react';

const Startwork = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetch('');
        if (response.ok) {
          const data = await response.json();
          setRequests(data);
        } else {
          throw new Error('Failed to fetch requests');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchRequests();
  }, []);

  return (
    <div className='Welcome'>
      <h2>Work Order</h2>
      <ul>
        {requests.map(request => (
          <li key={request.ticketNumber}>
            <strong>Ticket Number:</strong> {request.ticketNumber}<br />
            <strong>Issue:</strong> {request.issue}<br />
            <strong>Description:</strong> {request.description}<br />
            <strong>Priority:</strong> {request.priority}<br />
            <strong>Potential Cause:</strong> {request.potentialCause}<br />
            {request.image && (
              <div>
                <strong>Image:</strong><br />
                <img src={request.image} alt="Issue" style={{ maxWidth: '100%', maxHeight: '200px' }} />
              </div>
            )}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Startwork;

