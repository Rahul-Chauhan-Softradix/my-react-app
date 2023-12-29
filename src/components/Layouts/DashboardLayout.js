import axios from 'axios';
import React, { useEffect, useState } from 'react'
import vendorLogo from '../../asstes/img/clientslogo.png'
import userLogo from '../../asstes/img/userslogo.png'
import categoriesLogo from '../../asstes/img/catagories.png'
import productsLogo from '../../asstes/img/products.png'
import { Link,useNavigate } from 'react-router-dom';

function DashboardLayout() {
  let [data, setData] = useState({})
  let token = localStorage.getItem('authToken');
  const navigate = useNavigate()
  useEffect(() => {
    if(!token || token == null){
      navigate('/login')
    }
    async function fetchData() {
      await axios({
        method: 'get',
        url: 'http://localhost:3000/dashboard/count',
        headers: { 'authorization': token }
      })
        .then((response) => {
          setData(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
    fetchData();
  }, []);

  return (
    <div className='dashboard-layout'>
      <Link to="/vendors">
        <div className='dashboard-box'>
          <div className='Boxcontent'>
            <div>
              <p>Vendors</p>
              <span>{data.data && data.data.totalVendor ? data.data.totalVendor : null}</span>
            </div>
            <div>
              <img src={vendorLogo} width="100px" alt=""></img>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/users">
        <div className='dashboard-box'>
          <div className='Boxcontent'>
            <div>
              <p>Users</p>
              <span>{data.data && data.data.totalUser ? data.data.totalUser : null}</span>
            </div>
            <div>
              <img src={userLogo} width="100px" alt=""></img>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/categories">
        <div className='dashboard-box'>
          <div className='Boxcontent'>
            <div>
              <p>Categories</p>
              <span>{data.data && data.data.totalCategories ? data.data.totalCategories : null}</span>
            </div>
            <div>
              <img src={categoriesLogo} width="100px" alt=""></img>
            </div>
          </div>
        </div>
      </Link>
      <Link to="/products">
        <div className='dashboard-box'>
          <div className='Boxcontent'>
            <div>
              <p>Products</p>
              <span>{data.data && data.data.totalProducts ? data.data.totalProducts : null}</span>
            </div>
            <div>
              <img src={productsLogo} width="100px" alt=""></img>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default DashboardLayout