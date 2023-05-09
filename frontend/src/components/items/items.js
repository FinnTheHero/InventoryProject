import { React, useState } from 'react'
import { UsePagination } from '../Pagination/UsePagination'
import Pagination from 'react-bootstrap/Pagination'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import axios from 'axios'
import { useForm } from 'react-hook-form'

export default function Items() {
    const [refresh, setRefresh] = useState(false)
    const { itemArray, currentPage, totalPages, setCurrentPage, setSort, setSortBy, setLocation} = UsePagination(refresh, setRefresh)

    const handleDelete = (data) => {
        axios.delete(`/inventories/${data.id}`)
        .catch(err => console.log(err))

        setRefresh(true)
    }

    // Generate List Data For Rendering
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

    // React-Hook-Form
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm()
    
    // Render List  
    return(
        <div className='d-flex flex-column'>
            <form onSubmit={handleSubmit((data) => {
                setLocation(data.location)
                setSort(data.sort)
                setSortBy(data.sortBy)
                })} className='m-3 d-flex align-items-center justify-content-center flex-row'>
                <label>Search By Location : </label>
                <select {...register('location')} className='m-2'>
                    <option value=''>All locations</option>
                    <option value='Main Office'>Main Office</option>
                    <option value='Cavea City Mall'>Cavea City Mall</option>
                    <option value='Cavea Tbilisi Mall'>Cavea Tbilisi Mall</option>
                    <option value='Cavea Gallery'>Cavea Gallery</option>
                    <option value='Cavea East Point'>Cavea East Point</option>
                </select>

                <label>Sort By : </label>
                <select {...register('sort')} className='m-2'>
                    <option value=''>Id</option>
                    <option value='name'>Name</option>
                    <option value='price'>Price</option>
                </select>

                <label>Direction : </label>
                <select {...register('sortBy')} className='m-2'>
                    <option value='ASC'>Ascending</option>
                    <option value='DESC'>Descending</option>
                </select>
                <Button type='submit' variant="success">Search</Button>{' '}
            </form>

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

            <Pagination className='d-flex align-items-center justify-content-center flex-row'>
                <Pagination.First onClick={() => {setCurrentPage(0)}}/>
                
                {(currentPage > 0)?<Pagination.Item onClick={() => {setCurrentPage(currentPage - 1)}}>{currentPage}</Pagination.Item>:""}
                <Pagination.Item active>{currentPage + 1}</Pagination.Item>
                {(currentPage < (totalPages - 1))?<Pagination.Item onClick={() => {setCurrentPage(currentPage + 1)}}>{currentPage + 2}</Pagination.Item>:""}

                <Pagination.Last onClick={() => {setCurrentPage(totalPages - 1)}}/>
            </Pagination>
        </div>
    )
}