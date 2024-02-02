import axios from 'axios'
import React, { useEffect, useState } from 'react'

function CategoryLayout() {
    let token = localStorage.getItem('authToken')
    let [data, setData] = useState([])
    let [response, setResponse] = useState({})
    let [currentPage, setCurrentPage] = useState(0)
    const prevPage = () => {
        setCurrentPage(currentPage - 1)
    }
    const nextPage = () => {
        setCurrentPage(currentPage + 1)
    }
    useEffect(() => {
        let fetchData = () => {
            axios({
                method: 'post',
                url: 'http://localhost:3000/category/list',
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
    }, [])

    return (
        <div className='dashboard-layout'>
            <div className='vendor-layout'>
                <div className="list-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>User Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((data, index) => (
                                <tr key={index} className='active'>
                                    <td>{data.category_name ? data.category_name : 'N/A'}</td>
                                    <td>{data.user_detail && data.user_detail.first_name ? data.user_detail.first_name : 'N/A'}</td>
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

export default CategoryLayout