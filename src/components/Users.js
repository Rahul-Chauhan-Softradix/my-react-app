import React from 'react'
import Sidebar from './Common/Sidebar'
import Header from './Common/Header'
import UserLayout from './Layouts/UserLayout'

function Users() {
  return (
    <>
      <div className='main-layout'>
        <Sidebar></Sidebar>
        <div className='right-section'>
          <Header></Header>
          <div className='body-content'>
            <UserLayout ></UserLayout>
          </div>
        </div>
      </div>
    </>
  )
}

export default Users