import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ProductLayout() {
    let token = localStorage.getItem('authToken')
    let [data, setData] = useState([])
    let [response, setResponse] = useState({})
    let [currentPage, setCurrentPage] = useState(0)
    const navigate = useNavigate()

    const prevPage = () => {
        setCurrentPage(currentPage + 1)
    }

    const nextPage = () => {
        setCurrentPage(currentPage - 1)
    }

    useEffect(() => {
        if (!token) {
            navigate('/login')
        }
        axios({
            method: 'post',
            url: 'http://localhost:3000/product/list',
            data: {
                "start": currentPage * 10,
                "limit": 10,
                "search": ""
            },
            headers: { 'authorization': token }
        })
            .then((response) => {
                console.log(response)
                setData(response.data.data)
                setResponse(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [currentPage])
    return (
        <div>ProductLayout</div>
    )
}

export default ProductLayout