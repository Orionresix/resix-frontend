/* eslint-disable react/prop-types */
import React from 'react'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

const Stats = ({ stats }) => {
  const columnSize = stats.length === 3 ? 4 : 3
  return (
    <Paper
      style={{
        padding: '20px',
        minHeight: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        textAlign: 'center',
      }}>
      <Grid container xs={12}>
        {stats.map((item, index) => (
          <Grid key={index} xs={columnSize}>
            <Typography variant='h5' style={{ color: '#00B286' }}>
              {item.title}
            </Typography>
            <Typography variant='h6' style={{ color: '#868E96' }}>
              {item.data}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Paper>
  )
}

export default Stats
