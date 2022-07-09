import React from 'react';
import { Link } from 'react-router-dom';
import IMAGE from '../../assets/svg/401.svg';

const UnAuthorized = () => {
    return (
        <div className='container w-full min-h-screen bg-gray-50'>
            <div className='flex justify-center mx-auto'>
                <img src={ IMAGE } width='400' alt='401 UnAuthorized' />
            </div>
            <div className='text-center tracking-wide mont-font'>
                <div className='text-7xl font-black text-[#c91237] mb-4'>401</div>
                <div className='text-3xl font-bold'>UnAuthorized</div>
            </div>
            <p className='text-center font-medium'>Something Missing</p>
            <div className='text-center mt-6'>
               <Link to='/' className='text-base text-white font-medium bg-[#c91237] py-2 px-4 mont-font rounded shadow'>
                   Go Back
               </Link>
            </div>
        </div>
    )
}

export default UnAuthorized;
