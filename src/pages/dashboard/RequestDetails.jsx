/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Box, Grid, Typography, Card, CardContent, Paper } from '@mui/material'
import TicketComponent from '../../components/Ticket'

const RequestDetails = ({ tickets }) => {
  const [selectedTicket, setSelectedTicket] = useState(tickets[0])

  const handleTicketClick = (idx) => {
    setSelectedTicket(tickets[idx])
  }

  return (
    <Box sx={{ minHeight: '80vh' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              maxHeight: '50vh',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
            }}>
            {tickets.map((ticket, idx) => (
              <TicketComponent
                key={idx}
                {...ticket}
                isSelected={ticket.id === selectedTicket.id} // Pass isSelected prop
                handleClick={() => handleTicketClick(idx)}
              />
            ))}
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          sx={{ height: '100%' }}
          className='requestDetailsPane'>
          <Paper color='red'>
            <Card sx={{ height: '80vh' }}>
              <CardContent>
                <Typography variant='h6' gutterBottom>
                  {selectedTicket?.title}
                </Typography>
                <Typography variant='body1' gutterBottom>
                  {selectedTicket?.description}
                </Typography>
                <Typography variant='body1' gutterBottom>
                  Status: {selectedTicket?.status}
                </Typography>
                <Typography variant='body1' gutterBottom>
                  Date: {selectedTicket?.date}
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default RequestDetails
