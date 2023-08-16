// import React, { useState } from 'react';
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

// export default function Navbar() {
//   const [nav, setNav] = useState(false);

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   return (
//     <>
//       <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
//         <h1 className='w-full text-3xl font-bold text-[#00df98]'>BetaHouse</h1>
//         <ul className='hidden md:flex'>
//           <li className='p-4 '>Home</li>
//           <li className='p-4 '>About</li>
//           <li className='p-4 '>HouseType</li>
//           <li className='p-4 '>Contact</li>
//         </ul>

        // {/* Login and Sign Up buttons */}
        // <div className='hidden md:flex space-x-4'>
        //   <button className='px-4 py-2 text-white border rounded'>Login</button>
        //   <button className='px-4 py-2 bg-[#00df9a] rounded-md text-black'>Sign Up</button>
        // </div>

//         {/* Mobile menu icon */}
//         <div onClick={handleNav} className='block md:hidden'>
//           {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <ul
//         className={
//           nav
//             ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
//             : 'ease-in-out duration-500 fixed left-[-100%]'
//         }
//       >
//         <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>BetaHouse</h1>
//         <li className='p-4 border-b border-gray-600'>Home</li>
//         <li className='p-4 border-b border-gray-600'>About</li>
//         <li className='p-4 border-b border-gray-600'>HouseType</li>
//         <li className='p-4 border-b border-gray-600'>Contact</li>
        
        // {/* Mobile Login and Sign Up buttons */}
        // <div className='flex flex-col items-center space-y-4 mt-4'>
        //   <button className='px-4 py-2 text-white border rounded'>Login</button>
        //   <button className='px-4 py-2 bg-[#00df9a] rounded text-black'>Sign Up</button>
        // </div>
//       </ul>
//     </>
//   );
// }
