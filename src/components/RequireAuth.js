import React from 'react';
import {  useLocation, Navigate, Outlet } from 'react-router-dom'

const RequireAuth = ({ arole }) => {

    const location = useLocation();

    const roles =[
        {
            role: 'user',
           
        }
    ]

    const user = 'vishwanath';



    return (

        roles.find(val => arole?.includes(val.role)) 
        ? <Outlet />
        : user 
        ? <Navigate to='/unAuth' state={{ from: location }} replace />
        : <Navigate to='/login' state={{ from: location }} replace />
    )
}

export default RequireAuth;