import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../../pages/Login/Login'

function Allroutes() {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
        </Routes>
    )
}

export default Allroutes