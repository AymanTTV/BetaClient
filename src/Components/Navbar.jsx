import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <Link to="/" className="w-full text-3xl font-bold text-[#00df98]">BetaHouse</Link>
        <ul className="hidden md:flex">
          <li className="p-4">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4">
            <Link to="/about">About</Link>
          </li>
          <li className="p-4">
            <Link to="/housetype">Houses</Link>
          </li>
          <li className="p-4">
            <Link to="/contact">Contact</Link>
          </li>
          
        </ul>

        {/* Login and Sign Up buttons */}
        <div className='hidden md:flex space-x-4'>
        <Link to="/login">   <button className='px-4 py-2 text-white border rounded'>Login</button> </Link>
        <Link to="/signup">  <button className='px-8 py-2 bg-[#00df9a] rounded-md text-black'>SignUp</button></Link>
        </div>

        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>

        <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
          <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>BetaHouse</h1>
          <li className="p-4 border-b border-gray-600">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/about">About</Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/housetype">HouseType</Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/contact">Contact</Link>
          </li>

          {/* Mobile Login and Sign Up buttons */}
          <div className='flex flex-col items-center space-y-4 mt-4'>
          <Link to="/login"> <button className='px-4 py-2 text-white border rounded'>Login</button> </Link>
           <Link to="/signup"> <button className='px-4 py-2 bg-[#00df9a] rounded text-black'>Sign Up</button></Link>
          </div>
        </ul>
      </div>
    </>
  )
}
