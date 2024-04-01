import React from 'react'
import { Outlet } from 'react-router-dom'
import './OnboardingPage.css'
const OnboardingPage = () => {
  return (
    <div className='Center'>
      {/* <CssBaseline/> */}
      {/* <Container> */}
      <Outlet />
      {/* </Container> */}
    </div>
  )
}

export default OnboardingPage
