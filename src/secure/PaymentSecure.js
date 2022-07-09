import React from 'react';
import { useLocation, Outlet, Navigate } from 'react-router-dom';

const PaymentSecure = () => {

    const location = useLocation()

    const user = true;
    const cart = true;
    const shipping = true;

    return user ? cart ? shipping ? <Outlet /> : <Navigate to='/shipping' state={{ from: location }} replace /> : <Navigate to='/' state={{ from: location }} replace /> : <Navigate to='/login' state={{ from: location }} replace />
}

export default PaymentSecure;