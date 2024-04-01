import React, { useState } from 'react'
import CardContent from '@mui/material/CardContent'
import './Onboarding.css'
import logo from '../../assets/logo .png'
import indicator from '../../assets/Indicator.svg'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { Link, useNavigate } from 'react-router-dom'

const Step1 = () => {
  const navigate = useNavigate()
  const countries = ['Kenya', 'Botswana', 'Ghana', 'Liberia']
  const cities = ['Nairobi', 'Gaborone', 'Accra', 'Monrovia']
  const [name, setName] = useState('')
  const [nou, setNou] = useState('')
  const [address, setAddress] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [statee, setStatee] = useState('')
  const [country, setCountry] = useState(countries[0])
  const [city, setCity] = useState(countries[0])

  const next = () => {
    navigate('/step_two')
  }

  return (
    <Stack sx={{ maxWidth: 878 }} variant='outlined' className='card'>
      <CardContent className='Welcome'>
        <img src={logo} alt='logo' />
      </CardContent>

      <CardContent className='Welcome'>
        <h3>Step 1 of 3</h3>
        <p>Some representative placeholder content for the first slide.</p>
        <img src={indicator} className='indi' alt='indicator' />
      </CardContent>

      <CardContent>
        <form
          className='signupform'
          onSubmit={() => {
            next()
          }}>
          <div className='inputs'>
            <div className='formgroup'>
              <label htmlFor='name'>
                {' '}
                <span className='Red'>*</span>Name of property
              </label>

              <input
                type='text'
                value={name}
                placeholder='Nairobi Apartments'
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className='formgroup'>
              <label htmlFor='nou'>Number of Units</label>
              <input
                type='text'
                value={nou}
                placeholder='10'
                onChange={(e) => setNou(e.target.value)}
              />
            </div>

            <div className='formgroup'>
              <label htmlFor='city'>City</label>
              <select
                name='city'
                id='city'
                value={city}
                onChange={(e) => setCity(e.target.value)}>
                {cities.map((cit, index) => {
                  return (
                    <option value={cit} key={index}>
                      {cit}
                    </option>
                  )
                })}
              </select>
            </div>

            <div className='formgroup'>
              <label htmlFor='country'>Country</label>
              <select
                name='country'
                id='country'
                value={country}
                onChange={(e) => setCountry(e.target.value)}>
                {countries.map((countr, index) => {
                  return (
                    <option value={countr} key={index}>
                      {countr}
                    </option>
                  )
                })}
              </select>
            </div>

            <div className='formgroup'>
              <label htmlFor='address'>
                {' '}
                <span className='Red'>*</span>Address
              </label>
              <input
                type='text'
                value={address}
                placeholder='address'
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>

            <div className='flex-row'>
              <div className='formgroup'>
                <label htmlFor='zip'>Zip Code</label>
                <input
                  type='text'
                  value={zipCode}
                  placeholder='Zip Code'
                  onChange={(e) => setZipCode(e.target.value)}
                />
              </div>
              <div className='formgroup'>
                <label htmlFor='zip'>State</label>
                <input
                  type='text'
                  value={statee}
                  placeholder='Enter State'
                  onChange={(e) => setStatee(e.target.value)}
                />
              </div>
            </div>
          </div>

          <Button type='submit' className='signup_button' variant='contained'>
            Next
          </Button>
        </form>
      </CardContent>

      <CardContent>
        <Link className='green' to='/loading'>
          skip{' '}
        </Link>
      </CardContent>
    </Stack>
  )
}

export default Step1
