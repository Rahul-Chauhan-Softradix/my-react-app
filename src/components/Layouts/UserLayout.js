import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function UserLayout() {
    const [currentPage, setCurrentPage] = useState(0)
    const navigate = useNavigate()
    let [data, setData] = useState([])
    let [response, setResponse] = useState({})

    const nextPage = () => {
        setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        setCurrentPage(currentPage - 1)
    }
    let token = localStorage.getItem('authToken')

    useEffect(() => {
        if (!token) {
            navigate('/login')
        }
        let fetchData = async () => {
            await axios({
                method: 'post',
                url: 'http://localhost:3000/user/list',
                data: {
                    "start": currentPage * 10,
                    "limit": 10,
                    "search": ""
                },
                headers: { 'authorization': token }
            })
                .then((response) => {
                    setData(response.data.data)
                    setResponse(response.data)
                })
                .catch((error) => {
                    console.log(error)
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

export default UserLayout