import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function VendorLayouts() {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  let token = localStorage.getItem('authToken');
  const navigate = useNavigate()
  let [data, setData] = useState([])
  let [response, setResponse] = useState({})

  useEffect(() => {
    if (!token) {
      navigate('/login')
    }
    async function fetchData() {
      await axios({
        method: 'post',
        url: 'http://localhost:3000/vendor/list',
        headers: { 'authorization': token },
        data: { start: currentPage * 10, limit: 10, search: '' }
      })
        .then((response) => {
          setData(response.data.data)
          setResponse(response.data)
        })
        .catch((error) => {
          console.log('error', error)
        })
    }
    fetchData()
  }, [currentPage])


  return (
    <div className='dashboard-layout'>
      <div className='vendor-layout'>
        <div className="list-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((data, index) => (
                <tr key={index} className={data.status ? 'active' : 'inactive'}>
                  <td>{data.first_name ? data.first_name : 'N/A'}</td>
                  <td>{data.email ? data.email : 'N/A'}</td>
                  <td>{data.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            <button onClick={prevPage} disabled={currentPage === 0}>
              Previous
            </button>
            <button
              onClick={nextPage}
              disabled={currentPage * 10 + data.length >= response.recordsFiltered}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VendorLayouts