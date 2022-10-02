import React from 'react'
import './Navbar.scss'
import SearchIcon from '@mui/icons-material/Search'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import ListOutlinedIcon from '@mui/icons-material/ListOutlined'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <img src="../img/avatar1.jpg" alt="" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
