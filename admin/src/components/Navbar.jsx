import React from 'react'
import { assets } from '../assets/assets.js';

const Navbar = ({ setToken }) => {
    return (
        <div className='flex items-center py-1 px-[4%] justify-between'>
            <img src={assets.logo} alt="" className="w-[max(6%,50px)] h-[6%]" />
            <button onClick={() => setToken('')} className="bg-gray-600 text-white px-5 py-2 sm:py-2 rounded-full text-xs sm:text-sm ">Logout</button>
        </div>
    )
}

export default Navbar
