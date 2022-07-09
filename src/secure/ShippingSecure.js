import React from 'react';
import { useLocation, Outlet, Navigate } from 'react-router-dom';

const ShippingSecure = () => {

    const location = useLocation()

    const user = true;
    const cart = true;

    return user ? cart ? <Outlet /> : <Navigate to='/' state={{ from: location }} replace /> : <Navigate to='/login' state={{ from: location }} replace />
}

export default ShippingSecure;