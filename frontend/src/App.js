import React from 'react'
import Items from './components/items/items'
import Navbar from './components/nav/navbar'
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Items/>} />
                <Route path="/add" element={<Items/>} />
            </Routes>
        </div>
    )
}

export default App;