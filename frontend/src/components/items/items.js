import { React, useState } from 'react'
import { usePagination } from '../pagination/usePagination'
import Pagination from 'react-bootstrap/Pagination'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import fetchItems from './apiCall'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Items() {
    const navigate = useNavigate();
    const [refresh, setRefresh] = useState(false)

    const handleDelete = (data) => {
        setRefresh(true)
        navigate('/')
        
        axios.delete(`/inventory/${data.id}`)
            .catch(err => console.log(err))
    }
    
    const {itemArray, currentPage, totalPages, setCurrentPage} = usePagination(fetchItems,refresh,setRefresh)
    

    const renderData = itemArray.map((data, index) => {
        return(
            <tr key={data.id}>
                <td>{(index + 1) + (currentPage*20)}</td>
                <td>{data.name}</td>
                <td>{data.location}</td>
                <td>{data.price}</td>
                <td>
                    <Button variant='outline-danger' onClick={() => {
                        handleDelete(data)
                    }}>
                        Delete
                    </Button>
                </td>
            </tr>
        )
    })

    
    // Render Data    
    return(
        <div className='d-flex align-items-center justify-content-center flex-column'>
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

            <Pagination>
                <Pagination.First onClick={() => {setCurrentPage(0)}}/>
                
                {(currentPage > 1)?<Pagination.Item onClick={() => {setCurrentPage(currentPage - 1)}}>{currentPage}</Pagination.Item>:""}
                <Pagination.Item active>{currentPage + 1}</Pagination.Item>
                {(currentPage < (totalPages - 1))?<Pagination.Item onClick={() => {setCurrentPage(currentPage + 1)}}>{currentPage + 2}</Pagination.Item>:""}

                <Pagination.Last onClick={() => {setCurrentPage(totalPages - 1)}}/>
            </Pagination>
        </div>
    )
}