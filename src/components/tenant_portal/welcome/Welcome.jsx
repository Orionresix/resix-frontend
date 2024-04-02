import React from 'react'

const Welcome = () => {
  return (
    <div>
    <img src={image} alt="image"  />
    <h1>Welcome to Resix</h1>
    <p>You can easily request for maintence repairs by clicking the button below
      To track the progress of your report , sign using the details
    </p>
     <div>
     <Button type='submit' className='welcome_button' variant='contained'>
            Request Maintenance
          </Button>

          <Button type='submit' className='welcome_button' variant='contained'>
            Sign in 
          </Button>
     </div>

    </div>
  )
}

export default Welcome