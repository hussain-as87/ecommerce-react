import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({ auth, children }) => {
    if (auth === false) {
        if (localStorage.getItem("token")){
            return <Navigate to="/" replace/>
        }
        return <Navigate to="/login" replace />
    }

    return children ? children : <Outlet />
}

export default ProtectedRoute