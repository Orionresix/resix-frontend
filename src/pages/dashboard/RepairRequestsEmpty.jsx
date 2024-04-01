/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Stats from '../../components/Dashboard/Stats'
import { Typography, Box } from '@mui/material'
import dashboardPlaceholder from '../../assets/dashboardPlaceholder.png'
import nyumbaMate from '../../assets/Bot.png'
import Tooltip from '@mui/material/Tooltip'

const RepairRequests = () => {
  const data = [
    { title: 'Electrical related issues', data: 0 },
    { title: 'Plumbing issues', data: 0 },
    { title: 'HVAC', data: 0 },
    { title: 'Overdue requests', data: 0 },
  ]
  return (
    <>
      <Stats stats={data} />
      <div className='repairContainer'>
        <Typography className='singleDashHeader' variant='h6'>
          Welcome to Your Repair Requests Page
        </Typography>
        <Box
          component='img'
          className='singleDashImg'
          alt='The house from the offer.'
          src={dashboardPlaceholder}
        />
        <div>
          <p className='singleDashFooter'>Ready to manage your work orders? </p>
          <p className='singleDashFooter'>
            Click "Create Work Order" to get started.
          </p>
          <p className='singleDashFooter'>
            Need assistance? Contact support.
            <br /> Let's streamline your work orders!
          </p>
        </div>
      </div>
      <Tooltip
        title='Hey, you can ask me anything'
        placement='left-end'
        arrow
        sx={{
          '& .MuiTooltip-tooltip': {
            backgroundColor: '#FFFFFF', // White background color
            color: '#000000', // Black text color
            border: '1px solid #000000', // Black border
          },
        }}>
        <Box
          component='img'
          className='nyumbaMate'
          alt='The house from the offer.'
          src={nyumbaMate}
        />
      </Tooltip>
    </>
  )
}

export default RepairRequests
