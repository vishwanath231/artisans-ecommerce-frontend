import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginScreen from './screens/common/LoginScreen';
import HomeScreen from './screens/common/HomeScreen';
import RegisterScreen from './screens/common/RegisterScreen';
import ContactScreen from './screens/common/ContactScreen';
import SearchScreen from './screens/common/SearchScreen';
import WishlistScreen from './screens/common/WishlistScreen';
import CartScreen from './screens/common/CartScreen';
import ProductScreen from './screens/common/ProductScreen';
// import CopyRights from './components/CopyRights';
import Dashboard from './screens/admin/Dashboard';
import ProductsListScreen from './screens/admin/ProductsListScreen';
import UserListScreen from './screens/admin/UserListScreen';
import MakerListScreen from './screens/admin/MakerListScreen';
import AdminProfileScreen from './screens/admin/AdminProfileScreen';
import AdminOrderListScreen from './screens/admin/AdminOrderListScreen';
import Layout from './components/Layout';
import RequireAuth from './components/RequireAuth';
import MakerScreen from './screens/maker/MakerScreen';
import UnAuthorized from './screens/common/UnAuthorized';
import NotFound from './screens/common/NotFound';
import ShippingAddress from './screens/common/ShippingAddress';
import PaymentMethodScreen from './screens/common/PaymentMethodScreen';
import ShippingSecure from './secure/ShippingSecure';
import PaymentSecure from './secure/PaymentSecure';

const arole = {
    admin: 'admin',
    maker: 'maker'
}


const App = () => {



    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/' element={<HomeScreen /> } />
                    <Route path='login' element={<LoginScreen /> } />
                    <Route path='register' element={<RegisterScreen /> } />
                    <Route path='contact' element={<ContactScreen /> } />
                    <Route path='search' element={<SearchScreen /> } />
                    <Route path='wishlist' element={<WishlistScreen /> } />
                    <Route path='cart' element={<CartScreen /> } />
                    <Route path='product/:id' element={ <ProductScreen /> } />


                     <Route element={<ShippingSecure /> } >
                        <Route path='shipping' element={<ShippingAddress /> } />
                     </Route>

                     <Route element={ <PaymentSecure /> }>
                        <Route path='payment' element={ <PaymentMethodScreen /> } />
                     </Route>
                    
                    <Route path='unAuth' element={<UnAuthorized /> } />

                    <Route element={ <RequireAuth arole={arole.admin} /> } >
                        <Route path='admin/dashboard' element={ <Dashboard /> } />
                        <Route path='admin/userList' element={ <UserListScreen /> } />
                        <Route path='admin/productList' element={ <ProductsListScreen /> } />
                        <Route path='admin/makerList' element={ <MakerListScreen /> } />
                        <Route path='admin/profile' element={ <AdminProfileScreen /> } />
                        <Route path='admin/order' element={ <AdminOrderListScreen /> } />
                    </Route>

                    <Route element={ <RequireAuth arole={arole.maker} /> }>
                        <Route path='maker/dashboard' element={ <MakerScreen /> }  />
                    </Route>

                    <Route path='*' element={ <NotFound /> } />

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App