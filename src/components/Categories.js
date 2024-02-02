import React from 'react'
import Sidebar from './Common/Sidebar'
import Header from './Common/Header'
import CategoryLayout from './Layouts/CategoryLayout'

export default function Categories() {
  return (
    <div className='main-layout'>
      <Sidebar></Sidebar>
      <div className='right-section'>
        <Header></Header>
        <div className='body-content'>
          <CategoryLayout></CategoryLayout>
        </div>
      </div>
    </div>
  )
}
