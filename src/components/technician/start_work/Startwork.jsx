import React from 'react'

const Startwork = () => {
  return (
    <div>
      <div> 
      <img src={logo} alt="logo"  />
        <h1>Work Order</h1>
        <h2>Ticket No</h2>
        <img src={request} alt="request"  />
        </div>

        <div> 
        <p>Issue:Bathroom Sink Leak</p>
        <p>Type:Plumbing</p>
        <p>Description:Significant leak observed originatinating from the juction
            of the P-trap and the drakepipe beneath the sink. </p>
        
        <p>Priority:Urgent Attention recommended to prevent 
            further damage and structural issues</p>

        <p>Potential Cause:Degraded seal or crack in the piping</p>
        </div>
      
    </div>
  )
}

export default Startwork
