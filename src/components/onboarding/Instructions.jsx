/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import CardContent from '@mui/material/CardContent'
import './Onboarding.css'
import logo from '../../assets/logo .png'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import Stack from '@mui/material/Stack'
import property from '../../assets/property.svg'
import units from '../../assets/units.svg'
import technician from '../../assets/technician.svg'

const Instructions = () => {
  return (
    <Stack sx={{ maxWidth: 878 }} variant='outlined' className='card'>
      <CardContent className='Welcome'>
        <img src={logo} alt='logo' />
      </CardContent>

      <CardContent className='Welcome'>
        <p>
          <b className='black'>
            We're thrilled to have you join our property management platform!
          </b>
          <br />
          Before we begin, lets take a moment to introduce you to the onboarding
          process
        </p>
      </CardContent>
      <div className='flex'>
        <div className='flex-column'>
          <Stack spacing={2}>
            <Button type='submit' className='signup_button' variant='outlined'>
              Step 1
            </Button>
            <div className='card2'>
              <img src={property} alt='property' />
              <h4>Add a Property</h4>
              <p className='grey'>
                Start by adding your property to NyumbaFix. Provide details such
                as property name, address, and type.
              </p>
            </div>
          </Stack>
        </div>

        <div className='flex-column'>
          <Stack spacing={2}>
            <Button type='submit' className='signup_button' variant='outlined'>
              Step 2
            </Button>
            <div className='card2'>
              <img src={units} alt='property' />
              <h4>Add a Property</h4>
              <p className='grey'>
                Once your property is added, you'll proceed to add units within
                it.
              </p>
            </div>
          </Stack>
        </div>

        <div className='flex-column'>
          <Stack spacing={2}>
            <Button type='submit' className='signup_button' variant='outlined'>
              Step 3
            </Button>
            <div className='card2'>
              <img src={technician} alt='property' />
              <h4>Add a Property</h4>
              <p className='grey'>
                Finally, add technicians who will assist in maintaining your
                properties. Specify their specialties and contact information.
              </p>
            </div>
          </Stack>
        </div>
      </div>

      <CardContent className='Welcome'>
        <Link to='/step_one' className='no_deco'>
          <Button type='submit' className='signup_button' variant='contained'>
            Begin Onboarding
          </Button>
        </Link>
        <br />
        <br />
        <Link to='/loading' className='black'>
          Skip for now
        </Link>
      </CardContent>
    </Stack>
  )
}

export default Instructions
