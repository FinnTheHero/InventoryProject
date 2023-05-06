import React,{ Component, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export default function Add() {
    // const { name,location,price } = this.state
    // const item = {
    //     name,
    //     location,
    //     price
    // }

    const navigate = useNavigate();
    
    function sendData(item) {
        axios.post('/add', item).catch(err => console.log(err))
    
        //window.location.href = '/inventories'
    }
    
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm()
    
    
    // Render Add Form 
    return(
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>

            <form onSubmit={handleSubmit((data) => {
                sendData(data)
            })} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <label>Choose Location:</label>
                <select {...register('location',{ required: 'Location is required !' })}>
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
                <input {...register('price',{ required: 'Price is required !' })}></input>
                <p>{errors.price?.message}</p>
                
                <input type='submit'></input>
            </form>
            
        </div>
    )
}