import React, { useState } from 'react';
import product from '../../products.json';
import { FiEye, FiTrash2, FiEdit } from 'react-icons/fi';
import { Box, InputLabel, MenuItem, FormControl, Select  } from '@mui/material';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'


const PaymentScreen = () => {

    const [data, setData] = useState(product.products)
    const [row , setRow] = useState(5)
    const [currentPage, setCurrentPage] = useState(1);

    const rowHandler = (e) => {
        const { value } = e.target;
        setRow(value)
    }



    const indexOfLastData = currentPage * row;
    const indexOfFirstData = indexOfLastData - row;
    const currentData = data.slice(indexOfFirstData, indexOfLastData)   

    
    const pageNumbers = [];  

    for (let i = 1; i<= Math.ceil(data.length / row); i++){
        pageNumbers.push(i)
    }


    const paginate = (val) => setCurrentPage(val);

   const searchHandler = (e) => {

        const { value} =e.target;

        if(value){
            const filter = data.filter((val) => {
                return Object.values(val).join('').toLowerCase().includes(value.toLowerCase())
            })
            setData(filter)
        }else{
            setData(product.products)
        }
    }

    return (
        <div className='p-4'>
            <div className='w-20 mb-1'>
                <Box>
                    <FormControl fullWidth>
                        <InputLabel id='row-label'>Row</InputLabel>
                        <Select
                            labelId='row-label'
                            id='row'
                            value={row}
                            label='Row'
                            onChange={rowHandler}
                        >
                            <MenuItem value='5'>5</MenuItem>
                            <MenuItem value='10'>10</MenuItem>
                            <MenuItem value='15'>15</MenuItem>
                            <MenuItem value='20'>20</MenuItem>
                            <MenuItem value={data.length}>All</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>
            <div className='w-full md:w-72 '>
                <input
                    name='search'
                    type='search'
                    onChange={searchHandler}
                    placeholder='search...'
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-[#edf2f4] focus:ring-[#83c5be] focus:border-[#83c5be] w-full p-2.5"
                />
            </div>
            <div className='flex items-center justify-around'>
                    <button className={ pageNumbers.length >= currentPage ? currentPage === 1 ? 'text-red-400 text-lg' : 'text-green-500 text-lg' : 'text-red-500 text-lg'} onClick={pageNumbers.length >= currentPage ?  () => currentPage !== 1 ?  setCurrentPage(currentPage -1) : setCurrentPage(currentPage) :  () => setCurrentPage(currentPage) }><FiChevronLeft /> </button>
                    <div className='text-lg'>{currentPage}</div>
                    <button className={currentPage >= pageNumbers.length ? 'text-red-400 text-lg' : 'text-green-500 text-lg'} onClick={currentPage >= pageNumbers.length ? () => setCurrentPage(currentPage) : () => setCurrentPage(currentPage + 1)}><FiChevronRight /> </button>
                </div>
            <div className="relative overflow-x-auto my-10" style={{ height: '420px' }}>
                    <table className="w-full text-sm text-left text-black ">
                        <thead className="text-xs text-black mont-font text-white uppercase bg-[#0b2545]">
                            <tr className='border border-gray-300'>
                                <th className="px-6 py-3 border border-gray-300">ID</th>
                                <th className="px-6 py-3 border border-gray-300">IMAGE</th>
                                <th className="px-6 py-3 border border-gray-300">NAME</th>
                                <th className="px-6 py-3 border border-gray-300">PRICE</th>
                                <th className="px-6 py-3 border border-gray-300">CATEGORY</th>
                                <th className="px-6 py-3 border border-gray-300">BRAND</th>
                                <th className="px-6 py-3 border border-gray-300">
                                    <span className="sr-only">ACTION</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                currentData.map((val) => (
                                    <tr className="bg-white border border-gray-300 transition duration-300 ease-in-out hover:bg-gray-200 sen-font" key={val._id}>
                                        <td className="px-6 py-4 border border-gray-300">{val._id}</td>
                                        <td className="px-6 py-4 border border-gray-300">
                                            <img src={val.image} className='w-10 h-10' alt={val.name} />
                                        </td>
                                        <td className="px-6 py-4 border border-gray-300">{val.name}</td>
                                        <td className="px-6 py-4 border border-gray-300">{val.price}</td>
                                        <td className="px-6 py-4 border border-gray-300">{val.category}</td>
                                        <td className="px-6 py-4 border border-gray-300">{val.brand}</td>
                                        <td className='px-4 py-2 border border-gray-300'>
                                            <button className='px-3 py-1' >
                                                <FiEye className='text-blue-800 text-base' />
                                            </button>
                                            <button className='px-3 py-1 mr-1' >
                                                <FiEdit className='text-green-600 text-base' />
                                            </button>
                                            <button className='px-3 py-1' >
                                                <FiTrash2 className='text-red-700 text-base'/> 
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                
                <ul className='flex items-center'>
                    {pageNumbers.map((val) => (
                        <li key={val}>
                            <button className='m-2' onClick={() => paginate(val)}>{val}</button>
                        </li>
                    ))}                
                </ul>
        </div>
    )
}

export default PaymentScreen;