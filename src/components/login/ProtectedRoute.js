import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth0();

    if (!isAuthenticated) {
        return <Navigate to='/' />
    }

    return children ? children : <Outlet/> 
}