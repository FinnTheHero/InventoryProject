import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Add from './components/AddForm/Add'
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Items from './components/Items/Items'

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