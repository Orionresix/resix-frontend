import React, { useState } from 'react'
import { Box, Typography, TextField, Button } from '@mui/material'
import Bot from '../assets/Bot.png'

const NyumbaFetch = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value)
  }

  const handleSearch = () => {
    // Implement your search logic here
    console.log('Search query:', searchQuery)
  }

  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='space-between'
      padding={4}
      className='chatBox'
      borderRadius={2}
      boxShadow={3}>
      <img src={Bot} />
      <Typography variant='h5' component='h1' gutterBottom>
        Rafiki-Nyumba
      </Typography>
      <Typography variant='body1' align='center' gutterBottom>
        Hi, my name is NyumbaMate, your personal assistant, here to help make
        your work easier
      </Typography>
      <Typography variant='body1' align='center' gutterBottom>
        You may ask me anything concerning all of the maintenance requests, I am
        here to streamline your job
      </Typography>
      <Typography variant='body1' align='center' gutterBottom>
        Here are maintenance requests that are likely to take 30mins or less to
        resolve
      </Typography>
      <Box display='flex' alignItems='center' marginTop={2}>
        <TextField
          label='Search requests'
          variant='outlined'
          value={searchQuery}
          onChange={handleSearchChange}
          InputProps={{
            endAdornment: (
              <Button
                variant='contained'
                color='primary'
                onClick={handleSearch}>
                Search
              </Button>
            ),
          }}
        />
      </Box>
    </Box>
  )
}

export default NyumbaFetch
