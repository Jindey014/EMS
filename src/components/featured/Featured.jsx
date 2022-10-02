import React from 'react'
import './Featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={60} text={'60%'} strokeWidth={6} />
        </div>
        <p className="title">Total revenue made today</p>
        <p className="amount">Rs 6,00,000</p>
        
      </div>
    </div>
  )
}

export default Featured
