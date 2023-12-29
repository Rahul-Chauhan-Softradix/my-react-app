import React from 'react'
import dsahboardLogo from '../../asstes/img/dashboard.png'
import vendorLogo from '../../asstes/img/clientslogo.png'
import userLogo from '../../asstes/img/userslogo.png'
import categoriesLogo from '../../asstes/img/catagories.png'
import productsLogo from '../../asstes/img/products.png'

import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      {/* <img className='sidebar-logo' src={sidebarLogo} alt=''></img> */}
      <div className='sidebar-list'>
      <div>
          <Link to="/dashboard">
            <img className='sidebar-link' src={dsahboardLogo} alt='' />
          </Link>
        </div>
        <div>
          <Link to="/vendors">
            <img className='sidebar-link' src={vendorLogo} alt='' />
          </Link>
        </div>
        <div>
          <Link to="/users">
            <img className='sidebar-link' src={userLogo} alt='' />
          </Link>
        </div>
        <div>
          <Link to="/categories">
            <img className='sidebar-link' src={categoriesLogo} alt='' />
          </Link>
        </div>
        <div>
          <Link to="/products">
            <img className='sidebar-link' src={productsLogo} alt='' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar