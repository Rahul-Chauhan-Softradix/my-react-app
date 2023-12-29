import React from 'react'
import Header from './Common/Header'
import Sidebar from './Common/Sidebar'
import DashboardLayout from './Layouts/DashboardLayout'

function AdminDashboard() {
  return (
    <div className='main-layout'>
        <Sidebar></Sidebar>
        <div className='right-section'>
        <Header></Header>
        <div className='body-content'>
          <DashboardLayout></DashboardLayout>
        </div>
        </div>
    </div>
  )
}

export default AdminDashboard