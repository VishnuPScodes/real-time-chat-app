
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom';

function PrivateRoute({ children }) {
    console.log('here')
    const auth = useSelector((state) => state.auth);
    const navigate = useNavigate();
    console.log('auth is', auth);
    if (!auth) {
        console.log('inside');
        navigate('/login');
        return null
        // < Navigate to = { '/login'} />
    }
    else {
        return children
    }

}

export default PrivateRoute