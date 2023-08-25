import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import { ArrowLeftIcon } from "@heroicons/react/solid";
import BackButton from "../Components/BackButton";
import Navbar2 from "../Components/Navbar2";
import Footer from "../Components/Footer";
export default function Login() {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to go back
  const goBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <>
    < Navbar2 />

    <BackButton />
    
      {/* <!-- component --> */}
      <div className="relative flex min-h-screen text-gray-300 antialiased flex-col justify-start overflow-hidden py-6 sm:py-12">
        <div className="relative py-3 sm:w-96 mx-auto text-center">
          <span className="text-2xl  font-light">Login to your account</span>
          <div className="mt-8 bg-white shadow-md rounded-lg text-left">
            <div className="h-2 bg-[#00df9a] rounded-t-md"></div>
            <div className="px-8 py-6">
              <label className="block font-semibold text-black">Username or Email</label>
              <input
                type="text"
                placeholder="Email"
                className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-[#00a47b] focus:ring-1 rounded-md"
              />
              <label className="block mt-3 font-semibold text-black">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-[#00a47b] focus:ring-1 rounded-md"
              />
              <div className="flex justify-center items-baseline">
                <button
                  type="submit"
                  className="mt-4 bg-[#00df9a] text-white py-2 px-6 rounded-md hover:bg-[#00a47b] "
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
}
