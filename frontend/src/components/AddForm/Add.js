import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/button'

export default function Add() {
    const navigate = useNavigate();

    // Send Post request
    function sendData(item) {
        axios.post('/inventories', item).catch(err => console.log(err))
        navigate('/')
    }

    // React-Hook-Form
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm()
    
    
    // Render Form
    return(
        <div className='d-flex justify-content-center align-items-center'>
            <form onSubmit={handleSubmit((data) => {
                sendData(data)
            })} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <label>Choose Location:</label>
                <select  variant="success" id="dropdown-basic" {...register('location',{ required: 'Location is required !' })}>
                    <option></option>
                    <option value='Main Office'>Main Office</option>
                    <option value='Cavea City Mall'>Cavea City Mall</option>
                    <option value='Cavea Tbilisi Mall'>Cavea Tbilisi Mall</option>
                    <option value='Cavea Gallery'>Cavea Gallery</option>
                    <option value='Cavea East Point'>Cavea East Point</option>
                </select>
                <p>{errors.location?.message}</p>

                <label>Name :</label>
                <input {...register('name',{ required: 'Name is required !' })}></input>
                <p>{errors.name?.message}</p>

                <label>Price :</label>
                <input type='number' {...register('price',{ required: 'Price is required !', max: {value: 500, message: "Can't be more than 500" } })}></input>
                <p>{errors.price?.message}</p>
                
                <Button type='submit' variant="success">Add Item</Button>{' '}
            </form>
            
        </div>
    )
}