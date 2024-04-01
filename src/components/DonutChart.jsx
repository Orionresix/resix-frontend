/* eslint-disable react/prop-types */
import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart'
import { Paper } from '@mui/material'

const DonutChartComponent = ({ data, title }) => {
  const palette = ['#00B286', '#D9D9D9']

  const details = {
    data,
    innerRadius: 30,
    outerRadius: 50,
  }
  return (
    <Paper className='chartPaper'>
      <h5 className='chartTitle'>{title}</h5>
      <div style={{ width: 350, height: 200 }}>
        <PieChart series={[details]} colors={palette} />
      </div>
    </Paper>
  )
}

export default DonutChartComponent
