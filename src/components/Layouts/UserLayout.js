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
    }, [])

    let nameList = <li></li>
    let emailList = <li></li>
    let statusList = <li></li>
    
    return (
        <div>UserLayout</div>
    )
}

export default UserLayout