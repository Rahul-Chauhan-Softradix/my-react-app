import React from 'react'
import Sidebar from './Common/Sidebar'
import Header from './Common/Header'
import ProductLayout from './Layouts/ProductLayout'

function Products() {
  return (
    <div className='main-layout'>
      <Sidebar></Sidebar>
      <div className='right-section'>
        <Header></Header>
        <div className='body-content'>
          <ProductLayout></ProductLayout>
        </div>
      </div>
    </div>
  )
}

export default Products