
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router';

function PrivateRoute({ children }) {
    const auth = useSelector((state) => state.auth);
    const navigate = useNavigate();
    if (!auth) {
        navigate('/login')
    }
    else {
        return children
    }

}

export default PrivateRoute