import React from 'react'
import './Widget.scss'
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined'

const Widget = ({ type }) => {
  let data

  switch (type) {
    case 'total':
      data = {
        title: 'TOTAL EMPLOYEES',
        counter: '1000',
        growth: '100',
      }
      break
    case 'newEmployee':
      data = {
        title: 'NEW EMPLOYEES',
        counter: '100',
        growth: '20',
      }
      break
    case 'earning':
      data = {
        title: 'EARNING',
        counter: 'Rs 10,00,000',
        growth: 'Rs 50,000',
      }
      break

    default:
      break
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.counter}</span>
        <span className="growth">
          {data.growth} <ArrowUpwardOutlinedIcon className="arrow" />
        </span>
      </div>
    </div>
  )
}

export default Widget
