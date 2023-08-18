import React from 'react';
import House from '../assets/House.jpeg';
import { Link } from 'react-router-dom';
export default function HomesSection(){
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4 rounded-lg' src={House} alt='/' />
        <div className='flex flex-col justify-center ml-5'>
          <p className='text-[#00df9a] font-bold '>Homes</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Discover Your Dream Home with BetaHouse</h1>
          <p>
          Explore a world of comfort and elegance as you embark on a journey 
          to find your perfect home with BetaHouse. Our carefully curated 
          selection of properties offers a diverse range of styles and locations, 
          ensuring that your dream home becomes a reality. Experience the joy of luxurious living 
          and thoughtful design, where every corner exudes a sense of belonging. 
          
          Let us guide you through the process of finding a house that resonates with your aspirations and suits your lifestyle. 
          Your new chapter begins here with BetaHouse.
          </p>
          <Link to="/houseType">
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Houses</button>
          </Link>
        </div>
      </div>
    </div>
  );
}


