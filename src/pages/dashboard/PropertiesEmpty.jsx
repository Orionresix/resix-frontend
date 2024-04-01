/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Typography, Box, Button } from '@mui/material'
import building from '../../assets/building.png'
import nyumbaMate from '../../assets/Bot.png'
import Tooltip from '@mui/material/Tooltip'

const Properties = () => {
  return (
    <>
      <div className='propButtonBox'>
        <Button
          sx={{ color: 'white', backgroundColor: '#00B286' }}
          className='addProp'>
          Add Property
        </Button>
      </div>
      <div className='repairContainer'>
        <Typography className='singleDashHeader' variant='h6'>
          Welcome to Your Properties Page
        </Typography>
        <Box
          component='img'
          className='singleDashImg'
          alt='The house from the offer.'
          src={building}
        />
        <div className='footerBox'>
          <p className='singleDashFooter'>
            To get started, simply click on the "Add Property" button on the top
            right to begin listing your properties and managing them with ease.
          </p>
          <p className='singleDashFooter'>
            If you have any questions or need assistance, feel free to reach out
            to our support team for help.
          </p>
          <p className='singleDashFooter'>
            Let's get started and make managing your properties a breeze!
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

export default Properties
