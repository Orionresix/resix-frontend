import React from 'react'
import CardContent from '@mui/material/CardContent'
import './Onboarding.css'
import logo from '../../assets/logo .png'
import indicator from '../../assets/Indicator2.svg'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Switch from '@mui/material/Switch'
import { Home, Upload } from '@mui/icons-material'

function createData(Unit_Number, Description, Type, Status, Lease_Number) {
  return { Unit_Number, Description, Type, Status, Lease_Number }
}

const rows = [
  createData(1234567, '1 bed', 'Leasable', 'Occupied', 123456789),
  createData(1234567, '2 bed', 'Service', 'Vacant', 123456789),
  createData(12345678, '2 bed', 'Leasable', 'Vacant', 123456789),
]

const label = { inputProps: { 'aria-label': 'Switch demo' } }

const Step2 = () => {
  return (
    <div className='container'>
      <CardContent className='Welcome'>
        <h3>Step 2 of 3</h3>
        <p>Some representative placeholder content for the first slide.</p>
        <img src={indicator} className='indi' alt='indicator' />
      </CardContent>
      <Stack sx={{ maxWidth: 878 }} variant='outlined' className='card'>
        <CardContent className='Welcome'>
          <img src={logo} alt='logo' />
        </CardContent>

        <CardContent className='Welcome'>
          <h3>Add Units</h3>
        </CardContent>

        <CardContent>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell>Unit Number</TableCell>
                  <TableCell align='right'>Description</TableCell>
                  <TableCell align='right'>Type</TableCell>
                  <TableCell align='right'>Status</TableCell>
                  <TableCell align='right'>Lease Number</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component='th' scope='row'>
                      {row.Unit_Number}
                    </TableCell>
                    <TableCell align='right'>{row.Description}</TableCell>
                    <TableCell align='right'>{row.Type}</TableCell>
                    <TableCell align='right'>
                      {row.Status === 'Occupied' ? (
                        <Switch className='green' {...label} defaultChecked />
                      ) : (
                        <Switch {...label} />
                      )}
                    </TableCell>
                    <TableCell align='right'>{row.Lease_Number}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>

        <div className='flex-column-right'>
          <Link to='/' className='flex-row green'>
            <Home />
            <p>Add more units</p>
          </Link>
          <Link to='/' className='flex-row green'>
            <Upload />
            <p>Upload exel sheet</p>
          </Link>
        </div>

        <div className='flex-column2'>
          <Link to='/dashboard/home' className='no_deco'>
            <Button type='submit' className='signup_button' variant='contained'>
              Next
            </Button>
          </Link>
          <br /> <br />
          <Link className='green' to='/dashboard/home'>
            skip{' '}
          </Link>
        </div>
      </Stack>
    </div>
  )
}

export default Step2
