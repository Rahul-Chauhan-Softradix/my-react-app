import { React } from 'react'
import Sidebar from './Common/Sidebar'
import Header from './Common/Header'
import VendorLayouts from './Layouts/VendorLayouts'


function Vendors() {
  return (
    <>
      <div className='main-layout'>
        <Sidebar></Sidebar>
        <div className='right-section'>
          <Header></Header>
          <div className='body-content'>
            <VendorLayouts ></VendorLayouts>
          </div>
        </div>
      </div>
    </>
  )
}

export default Vendors