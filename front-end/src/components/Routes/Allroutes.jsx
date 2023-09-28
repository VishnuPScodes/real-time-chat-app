import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../../pages/Login/Login'
import LandingPage from '../../pages/LandingPage/LandingPage'
import ProfilePage from '../../pages/ProfilePage/ProfilePage'
import PrivateRoute from '../PrivateRoute'
function Allroutes() {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<PrivateRoute>
                <LandingPage />
            </PrivateRoute>} />
            <Route path='/profile' element={<ProfilePage />} />
        </Routes>
    )
}

export default Allroutes