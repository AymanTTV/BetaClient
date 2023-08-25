import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export default function Navbar2() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className='flex justify-center items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <Link to="/" className="text-3xl font-bold text-[#00df98]">BetaHouse</Link>
      </div>
    </>
  );
}
