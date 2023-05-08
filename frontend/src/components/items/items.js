import React from 'react'
import { usePagination } from '../pagination/usePagination'
import Pagination from 'react-bootstrap/Pagination'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import fetchItems from './apiCall'

export default function Items() {
    const {itemArray, currentPage, totalPages, setCurrentPage} = usePagination(fetchItems)
    console.log(itemArray)

    const renderData = itemArray.map((data) => {
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
                
                {(currentPage > 1)?<Pagination.Item onClick={() => {setCurrentPage(currentPage - 1)}}>{currentPage - 1}</Pagination.Item>:""}
                <Pagination.Item active>{currentPage}</Pagination.Item>
                {(currentPage < (totalPages - 1))?<Pagination.Item onClick={() => {setCurrentPage(currentPage + 1)}}>{currentPage + 1}</Pagination.Item>:""}

                <Pagination.Last onClick={() => {setCurrentPage(totalPages - 1)}}/>
            </Pagination>
        </div>
    )
}