import React from 'react'
import Items from './components/items/Items'
import Navbar from './components/nav/Navbar'
import Add from './components/add/Add'
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Items/>} />
                <Route path="/add" element={<Add/>} />
            </Routes>
        </div>
    )
}

export default App;