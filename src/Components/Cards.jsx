import React from 'react';
import Single from '../assets/fillo.png'
import Double from '../assets/2floor.png'
import Triple from '../assets/3floor.png'

export default function Cards(){
  return (
    
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='mt-0 mb-20 bg-white'><h1 className="w-full text-3xl font-bold text-[#00df98] text-center mt-0">Houses Prices</h1></div>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Fillo</h2>
              <p className='text-center text-4xl font-bold'>$150</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Filo</p>
                  <p className='py-2 border-b mx-8'>2 bathrooms+</p>
                  <p className='py-2 border-b mx-8'>4 rooms+</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Check</button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Dabaq</h2>
              <p className='text-center text-4xl font-bold'>$250</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Labo Dabaq</p>
                  <p className='py-2 border-b mx-8'>3 Bathrooms+</p>
                  <p className='py-2 border-b mx-8'>6 Rooms+</p>
              </div>
              <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Check</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Saddex Dabaq</h2>
              <p className='text-center text-4xl font-bold'>$300</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Saddex Dabaq+</p>
                  <p className='py-2 border-b mx-8'>4 Bathrooms+</p>
                  <p className='py-2 border-b mx-8'>6 Rooms+</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Check</button>
          </div>
      </div>
    </div>
  );
}

