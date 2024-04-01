/* eslint-disable react/prop-types */
import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Button } from '@mui/material'

const getStatusColor = (status) => {
  switch (status) {
    case 'In Progress':
      return 'orange'
    case 'Done':
      return 'green'
    case 'Cancelled':
      return 'red'
    default:
      return 'gray'
  }
}

const UnitsTable = ({ data }) => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'unitNumber', headerName: 'Unit Number', width: 150 },
    { field: 'request', headerName: 'Request', flex: 1 },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      renderCell: (params) => (
        <span
          style={{
            backgroundColor: getStatusColor(params.value),
            color: 'white',
            fontSize: '0.5rem',
            padding: '3px 8px',
            borderRadius: '12px',
          }}>
          {params.value}
        </span>
      ),
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: () => <Button size='small'>Action</Button>,
    },
  ]

  return (
    <div style={{ height: 'auto', width: '100%', marginBottom: 30 }}>
      <h3>{data[0]['property']}</h3>
      <DataGrid
        rows={data[0]['orders']}
        columns={columns}
        pageSize={5}
        rowHeight={35}
        rowsPerPageOptions={[5]}
        checkboxSelection={false}
      />
    </div>
  )
}

export default UnitsTable
