import React, { useState } from 'react';
import product from '../../products.json';
import { FiEye, FiTrash2, FiEdit } from 'react-icons/fi';

const PaymentScreen = () => {

   const [data, setData] = useState(product.products)
   const [row , setRow] = useState(3)
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
        <>
            <form className='flex items-center m-5'>
                <input type='radio' value='Paypal' name='paymentMethod' id='green-radio' className='w-4 h-4 text-green-600 bg-gray-100 border-gray-300'  />
                <label htmlFor='green-radio' className='ml-2 text-sm font-medium text-gray-900'>PayPal or Credit Card</label>
            </form>
            <form>
                <select onChange={rowHandler}>
                    <option value='3'>3</option>
                    <option value='5'>5</option>
                    <option value={data.length}>all</option>
                </select>
            </form>
            <form>
                 <input type='search' name='search' id='search' placeholder='search' onChange={searchHandler} />
            </form>
            <div className="relative overflow-x-auto my-10">
                    <table className="w-full text-sm text-left text-black ">
                        <thead className="text-xs text-black mont-font text-white uppercase bg-[#0b2545]">
                            <tr className='border border-gray-300'>
                                <th className="px-6 py-3 border border-gray-300">ID</th>
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

        </>
    )
}

export default PaymentScreen;