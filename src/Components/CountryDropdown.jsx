import React, {useState, useContext} from 'react';
import {RiMapPinLine, RiArrowDownSLine, RiArrowUpLine} from 'react-icons/ri'
import {Menu} from '@headlessui/react'
import {HouseContext} from './HouseContext'
export default function CountryDropdown(){
  const {country, setCountry, countries} = useContext(HouseContext)
  const[isOpen, setIsOpen] = useState(false)
  return (
    <Menu as='div' className='dropdown relative text-gray-300'>
      <Menu.Button onClick={()=> setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
        <RiMapPinLine className='dropdown-icon-primary'/>
        <div>
          <div className='text-[15px] font-medium leading-tight'> {country}</div>
          <div className='text-[13px]'>Select your place</div>
          </div>
          {
            isOpen? (
              <RiArrowUpLine className='dropdown-icon-secondary'/>
            ) : (
              <RiArrowDownSLine className='dropdown-icon-secondary'/>
            )
          }
        
      </Menu.Button>
      <Menu.Items className='dropdown-menu text-gray-300'>
          {countries.map((country, index) => {
            return <Menu.Item onClick={()=>setCountry(country)} className='cursor-pointer hover:text-green-500 transition' as='li' key={index}>
              {country}
            </Menu.Item>
          })}

      </Menu.Items>
    </Menu>
  )
}
