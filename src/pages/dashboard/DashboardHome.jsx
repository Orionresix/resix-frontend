import React from 'react'
import Stats from '../../components/Dashboard/Stats'
import { Box, Grid } from '@mui/material'
import DonutChartComponent from '../../components/DonutChart'
import NyumbaFetch from '../../components/NyumbaFetch'
import TicketComponent from '../../components/Ticket'

const DashboardHome = () => {
  const data = [
    { title: 'Total maintenance request', data: 'Nothing to show yet' },
    { title: 'Total open work orders', data: 0 },
    { title: 'Overdue requests', data: 0 },
    { title: 'Total expenses', data: 0 },
  ]
  const propertyStats = [
    { id: 0, value: 20, label: 'Property A' },
    { id: 1, value: 15, label: 'Property B' },
  ]
  const dummyTickets = [
    {
      ticketNumber: 1,
      description: 'Description 1',
      status: 'Open',
      date: '2023-12-01',
    },
    {
      ticketNumber: 2,
      description: 'Description 2',
      status: 'In Progress',
      date: '2023-12-02',
    },
    {
      ticketNumber: 3,
      description: 'Description 3',
      status: 'Resolved',
      date: '2023-12-03',
    },
    {
      ticketNumber: 4,
      description: 'Description 4',
      status: 'Closed',
      date: '2023-12-04',
    },
  ]

  return (
    <div>
      <Stats stats={data} />
      <Box className='dailyRequests'>
        <Box>
          <Grid container spacing={2}>
            {dummyTickets.map((ticket, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <TicketComponent {...ticket} xs={6} />
              </Grid>
            ))}
          </Grid>
          <Box display='flex' justifyContent='space-between'>
            <DonutChartComponent
              data={propertyStats}
              title='Maintenance Request by property'
            />
            <DonutChartComponent
              data={propertyStats}
              title='Total Maintenance costs'
            />
          </Box>
        </Box>
        <NyumbaFetch />
      </Box>
    </div>
  )
}

export default DashboardHome
