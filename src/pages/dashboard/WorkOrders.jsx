/* eslint-disable react/jsx-key */
import React from 'react'
import { Box, Typography } from '@mui/material'
import TicketComponent from '../../components/Ticket'
import ActionNav from '../../components/ActionNav'
import DragIndicator from '@mui/icons-material/DragIndicator'

const workOrders = [
  // Define your work orders here with details like id, title, description etc.
  { id: 1, title: 'Task 1', status: 'new' },
  { id: 2, title: 'Task 2', status: 'progress' },
  {
    ticketNumber: 1,
    description: 'Description 1',
    status: 'new',
    date: '2023-12-01',
    title: 'Request title',
  },
  {
    ticketNumber: 1,
    description: 'Description 1',
    status: 'done',
    date: '2023-12-01',
    title: 'Request title',
  },
  {
    ticketNumber: 1,
    description: 'Description 1',
    status: 'done',
    date: '2023-12-01',
    title: 'Request title',
  },
  {
    ticketNumber: 1,
    description: 'Description 1',
    status: 'cancelled',
    date: '2023-12-01',
    title: 'Request title',
  },
]

const colors = {
  New: '#7A7B7C',
  Done: '#3CA38F',
  progress: 'orange',
  Cancelled: 'red',
}

const columns = {
  New: {
    id: 'New',
    title: 'New',
    tasks: workOrders.filter((task) => task.status === 'new'),
  },
  'In Progress': {
    id: 'In Progress',
    title: 'In Progress',
    tasks: workOrders.filter((task) => task.status === 'progress'),
  },
  Done: {
    id: 'Done',
    title: 'Done',
    tasks: workOrders.filter((task) => task.status === 'done'),
  },
  Cancelled: {
    id: 'Cancelled',
    title: 'Cancelled',
    tasks: workOrders.filter((task) => task.status === 'cancelled'),
  },
}

function WorkOrdersBoard() {
  const icons = [<DragIndicator />]
  return (
    <>
      <ActionNav title='Work orders' icons={icons} />
      <Box display='flex' flexWrap='wrap'>
        {Object.entries(columns).map(([columnId, column]) => (
          <Box key={columnId} style={{ margin: 10, flex: 1 }}>
            <Typography>{column.title}</Typography>
            <hr
              color={colors[column.title] || 'orange'}
              className='kabaanDivider'
            />
            {column.tasks.map((task, idx) => (
              <TicketComponent {...task} key={idx} />
            ))}
          </Box>
        ))}
      </Box>
    </>
  )
}

export default WorkOrdersBoard
