import React from 'react'
import './Table.scss'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

const Tables = () => {
  const rows = [
    {
      id: '1',
      img: './img/avatar2.jpg',
      name: 'Jinish Shrestha',
      department: 'Development',
      supervisor: 'Subarna Shakya',
      date: '30/9/2022',
      status: 'Online',
    },
    {
      id: '2',
      img: './img/avatar3.jpg',
      name: 'Babina Banjara',
      department: 'Accounting',
      supervisor: 'Subarna Shakya',
      date: '25/9/2022',
      status: 'Offline',
    },
    {
      id: '3',
      img: './img/avatar4.jpg',
      name: 'Rasik Nepal',
      department: 'Development',
      supervisor: 'Subarna Shakya',
      date: '28/9/2022',
      status: 'Online',
    },
  ]
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">New Hires</TableCell>
            <TableCell className="tableCell">Department</TableCell>
            <TableCell className="tableCell">Supervisor</TableCell>
            <TableCell className="tableCell">Status</TableCell>
            <TableCell className="tableCell">Start Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.name}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.department}</TableCell>
              <TableCell className="tableCell">{row.supervisor}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Tables
