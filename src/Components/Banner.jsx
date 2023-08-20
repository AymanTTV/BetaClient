import React from 'react';
import Image from '../assets/House.jpeg'
import Search from './Search'
export default function Banner(){
  return (
    <section className='h-full mb-8 xl '>
      <div className='flex lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex1 px-4 lg:px-0'>
          <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
            Your <span className='text-green-400'>Dream</span> <span className='text-gray-300'>Home Awaits: Discover Our Spectacular</span> <span className='text-green-400'>House Rentals</span>!
          </h1>
          
        </div>
        <div className=' hidden sm:block md:block lg:block justify-end items-end lg:mr-20 lg:pr-12 '>
          <img src={Image} alt="" className='rounded'/>
        </div>
      </div>
      <Search />
    
    </section>

  )
}
