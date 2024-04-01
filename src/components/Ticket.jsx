/* eslint-disable react/prop-types */
import React from 'react'
import { Card, CardContent, Typography, Box, Chip } from '@mui/material'

const colors = {
  new: '#7A7B7C',
  done: '#3CA38F',
  progress: 'orange',
  cancelled: 'red',
}

const TicketComponent = ({
  ticketNumber,
  description,
  status,
  date,
  title,
  handleClick,
  isSelected,
}) => {
  const styles = {
    border: isSelected ? '1px solid green' : null,
    padding: '10px',
    marginBottom: '5px',
    cursor: 'pointer',
    backgroundColor: '#FAF9F6',
    boxShadow: isSelected ? 'default' : 'none',
  }
  return (
    <Card sx={styles} onClick={handleClick}>
      <CardContent>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='h6' gutterBottom>
            Ticket #{ticketNumber}
          </Typography>
          <Chip
            label={status === 'progress' ? 'IN PROGRESS' : status.toUpperCase()}
            sx={{
              backgroundColor: colors[status],
              color: '#fff',
              fontSize: 10,
            }}
            size='small'
          />
        </Box>
        <Typography variant='body2' gutterBottom>
          {description}
        </Typography>
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Chip label={title} size='small' />
          <Typography variant='body2'>{date}</Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default TicketComponent
