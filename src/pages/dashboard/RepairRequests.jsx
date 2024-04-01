/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
import { React, useState } from 'react'
import UnitsTable from '../../components/UnitTable'
import Box from '@mui/material/Box'
import ActionNav from '../../components/ActionNav'
import DragIndicator from '@mui/icons-material/DragIndicator'
import Reorder from '@mui/icons-material/Reorder'
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault' // Import DisabledByDefault icon
import RequestDetails from './RequestDetails'

const RepairRequests = () => {
  const [currentView, setCurrentView] = useState('TableView') // Initial view state

  const dummyData = [
    {
      property: 'The Grove',
      orders: [
        {
          id: 1,
          unitNumber: 'A101',
          request: 'Repair plumbing',
          status: 'In Progress',
          title: 'Request title',
        },
        {
          id: 2,
          unitNumber: 'B205',
          request: 'Fix electrical issue',
          status: 'In Progress',
          title: 'Request title',
        },
        {
          id: 3,
          unitNumber: 'C304',
          request: 'Paint walls',
          status: 'Done',
          title: 'Request title',
        },
        {
          id: 4,
          unitNumber: 'D403',
          request: 'Replace light fixtures',
          status: 'In Progress',
          title: 'Request title',
        },
        {
          id: 5,
          unitNumber: 'E502',
          request: 'Repair HVAC',
          status: 'In Progress',
          title: 'Request title',
        },
      ],
    },
  ]
  const tickets = [
    { id: 1, title: 'Task 1', status: 'new' },
    { id: 2, title: 'Task 2', status: 'progress' },
    {
      ticketNumber: 1,
      description: 'Description 1',
      status: 'new',
      date: '2023-12-01',
      title: 'Request title',
    },
  ]
  const TableView = () => (
    <>
      <Box>
        <UnitsTable data={dummyData} />
      </Box>
      <Box>
        <UnitsTable data={dummyData} />
      </Box>
    </>
  )

  const handleIconClick = (iconIndex) => {
    const newView = iconIndex === 0 ? 'TableView' : 'RequestDetails' // Determine view based on index
    setCurrentView(newView)
  }

  const icons = [
    currentView === 'TableView' ? (
      <DisabledByDefaultIcon />
    ) : (
      <Reorder onClick={() => handleIconClick(0)} />
    ),
    currentView === 'RequestDetails' ? (
      <DisabledByDefaultIcon />
    ) : (
      <DragIndicator onClick={() => handleIconClick(1)} />
    ),
  ]

  const renderView = () => {
    switch (currentView) {
      case 'TableView':
        return <TableView />
      case 'RequestDetails':
        return <RequestDetails tickets={tickets} /> // Replace with actual rendering logic for RequestDetails
      default:
        return null
    }
  }

  return (
    <>
      <ActionNav title='Repair requests' icons={icons} />
      {renderView()}
    </>
  )
}

export default RepairRequests
