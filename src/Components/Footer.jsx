import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

export default function Footer(){
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>BetaHouse</h1>
        <p className='py-4'>BetaHouse Waa Companyga ugu wata Guri Kireynta</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-gray-400'>Links</h6>
        <ul>
            <a href="#" className='decoration-solid decoration-green'><li className='py-2 text-sm'>Home</li></a>
            <a href="#" className='decoration-solid decoration-green'><li className='py-2 text-sm'>About</li></a>
            <a href="#" className='decoration-solid decoration-green'><li className='py-2 text-sm'>HouseType</li></a>
            <a href="#" className='decoration-solid decoration-green'><li className='py-2 text-sm'>Contact</li></a>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Legal</h6>
        <ul>
        <a href="#" className='decoration-solid decoration-green'><li className='py-2 text-sm'>Claim</li></a>
            <a href="#" className='decoration-solid decoration-green'><li className='py-2 text-sm'>Policy</li></a>
            <a href="#" className='decoration-solid decoration-green'><li className='py-2 text-sm'>Terms</li></a>
        </ul>
    </div>
      </div>
    </div>
  );
}


