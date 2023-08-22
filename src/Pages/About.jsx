import React, { useState, useEffect } from 'react';
import { FaLandmark, FaUserFriends } from 'react-icons/fa';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import HouseImage from '../assets/House.jpeg';
import { GetAllAbout, AddAbout, UpdateAbout } from '../api/About';
import Services from '../Components/Servicees';
export default function About() {

  const [faahfaahinYar, setFaahfaahinYar] = useState('');
  const [faahfaahin, setFaahfaahin] = useState('');

  useEffect(() => {
    // Fetch About data when component mounts
    const fetchAbout = async () => {
      try {
        const response = await GetAllAbout();
        if (response.data.length > 0) {
          const aboutData = response.data[0];
          setFaahfaahinYar(aboutData.faahfaahinYar);
          setFaahfaahin(aboutData.faahfaahin);
        }
      } catch (error) {
        console.error('Error fetching About:', error);
      }
    };

    fetchAbout();
  }, []);


  return (
    <>
      <Navbar />

      {/* Short Description Section */}
      <div className="bg-black py-16">
        <div className="container m-auto px-6 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:w-5/12">
              <img src={HouseImage} alt="image" loading="lazy" width="500" height="500" />
            </div>
            <div className="md:w-7/12">
            <h2 className="text-2xl text-[#00df98] font-bold md:text-4xl">
                {faahfaahinYar}
              </h2>
              <p className="mt-4 text-gray-600">
                {faahfaahin}
              </p>
            </div>
          </div>
        </div>
      </div>
      
       <Services />

      {/* Company History Section */}
      <div className=" text-white py-16">
        <div className="container m-auto px-6 md:px-12 xl:px-6">
          <div className="text-center">
            <FaLandmark className="text-5xl mx-auto mb-4 text-[#00df98]" />
            <h2 className="text-2xl font-bold md:text-4xl text-[#00df98]">
              Company History
            </h2>
          </div>
          <p className="mt-6 text-gray-300 text-center">
            BetaHouse was founded in [2023] with a vision to transform the real estate landscape in
            Mogadishu. Our journey began with a commitment to excellence, innovation, and customer
            satisfaction. Over the years, we have grown into a trusted partner for those seeking
            exceptional real estate solutions.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
