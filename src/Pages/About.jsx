import React from 'react';
import { FaLandmark, FaUserFriends } from 'react-icons/fa';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import HouseImage from '../assets/House.jpeg';

export default function About() {
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
                Welcome to BetaHouse - Your Real Estate Partner in Mogadishu, Somalia
              </h2>
              <p className="mt-6 text-gray-600">
                BetaHouse is a premier real estate company based in Mogadishu, Somalia.
              </p>
              <p className="mt-4 text-gray-600">
                Our dedicated team of passionate developers and professionals are committed to
                providing you with the best real estate solutions. Nobis minus voluptatibus pariatur
                dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta
                veniam aspernatur quam mollitia.
              </p>
            </div>
          </div>
        </div>
      </div>
      
       {/* Services Section */}
       <div className="bg-white py-16">
        <div className="container m-auto px-6">
          <h1 className="mb-8 text-center text-3xl font-bold text-black">Services BetaHouse Could Offer</h1>
          <ul className="grid place-content-center sm:grid-cols-2 gap-8">
            <li className="flex">
              <div className="px-4 text-5xl font-extralight text-[#00df98]">
                01.
              </div>
              <div>
                <div className="text-xl font-bold text-[#00df98]">Property Research</div>
                <p className="max-w-xs py-2 text-sm text-gray-600">
                  Our team conducts in-depth property research, collecting data and insights to
                  provide you with the best real estate options tailored to your needs.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="px-4 text-5xl font-extralight text-[#00df98]">
                02.
              </div>
              <div>
                <div className="text-xl font-bold text-[#00df98]">Strategic Planning</div>
                <p className="max-w-xs py-2 text-sm text-gray-600">
                  We develop data-driven strategies to ensure your real estate journey aligns with
                  your objectives, paving the way for success and growth.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="px-4 text-5xl font-extralight text-[#00df98]">
                03.
              </div>
              <div>
                <div className="text-xl font-bold text-[#00df98]">Design Services</div>
                <p className="max-w-xs py-2 text-sm text-gray-600">
                  Our design team creates visually stunning and user-friendly interfaces for your
                  real estate properties, enhancing the overall user experience.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="px-4 text-5xl font-extralight text-[#00df98]">
                04.
              </div>
              <div>
                <div className="text-xl font-bold text-[#00df98]">Development Solutions</div>
                <p className="max-w-xs py-2 text-sm text-gray-600">
                  We specialize in developing customized real estate solutions that cater to your
                  specific needs, ensuring optimal functionality and user engagement.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

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
