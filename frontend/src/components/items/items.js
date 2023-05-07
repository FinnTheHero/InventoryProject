import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import axios from 'axios'

// Create Item Component
export default function Items() {
    const [info, setInfo] = useState([])
    
    useEffect(() => {
        axios.get('/inventories')
            .then((response) => {
                setInfo(response.data.content)
            })
            .catch(err => console.log(err))
    },[])

    const renderData = info.map((data) => {
        return(
            <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.location}</td>
                <td>{data.price}</td>
                <td><Button variant='outline-danger'>Delete</Button></td>
            </tr>
        )
    })

    // Render Data    
    return(
        <div>         
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Price</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {renderData}
                </tbody>
            </Table>
        </div>
    )
}