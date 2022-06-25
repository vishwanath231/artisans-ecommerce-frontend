import React,{ useState } from 'react'

const ArtisanRegisterScreen = () => {

    const [option, setOption] = useState('');

    const optional = e => {
        setOption(e.target.value);
    }


    return (
        <div className='px-4 py-6 max-w-3xl mt-28 mb-9 mx-auto '>
        <h2 className='text-4xl font-light uppercase mb-4' >Register</h2>
        <form>
            <div className="mb-6">
                <label htmlFor='username' className="block mb-2 text-sm font-medium text-gray-900 ">Username</label>
                <input type="text" id="username" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name" required />
            </div>

            <div className='mb-6'>
                <label htmlFor='' className="block mb-2 text-sm font-medium text-gray-900 ">Choose Your Contact</label>
                <div className="flex flex-wrap ">
                    <div className="flex items-center mr-4">
                        <input id="phone" onClick={optional} type="radio" value="phone" name="colored-radio" className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500" />
                        <label htmlFor="phone" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone</label>
                    </div>
                    <div className="flex items-center mr-4">
                        <input id="email" onClick={optional} type="radio" value="email" name="colored-radio" className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500" />
                        <label htmlFor="email" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                    </div>
                </div>
            </div>

            {
                option === "email" ? (
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your Email</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="example@support.com" required />
                    </div>
                ) : null
            }

            {
                option === "phone" ? (
                    <div className="mb-6">
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Your Phone</label>
                        <input type="number" id="email" className="no-arrow shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="******" required />
                    </div>
                ) : null
            }
            
            <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                    <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required />
                </div>
                <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900">I agree with the <a href='https://www.termsfeed.com/live/bdb176ea-cb5e-49e5-8332-1686fc4e8baa' target='_blank' rel="noopener noreferrer" className="text-blue-600 hover:underline">terms and conditions</a></label>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Register new account</button>
        </form>

    </div>
    )
}

export default ArtisanRegisterScreen;