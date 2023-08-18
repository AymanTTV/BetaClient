import React from 'react';
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="text-gray-300">
      {/* Max width container */}
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        {/* Flex container with multiple sections */}
        <div className="md:flex md:justify-between">
          {/* Company information */}
          <div className="mb-6 md:mb-0">
            <a href="/Home" className="flex items-center text-[#00df98] font-bold text-2xl">
              BetaHouse
            </a>
            <p className="py-4 text-gray-300">
              {/* Company description */}
              BetaHouse is the leading company in Home Rentals
            </p>
          </div>

          {/* Links and Legal sections */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {/* Links section */}
            <div>
              <h2 className="font-medium text-gray-400 pb-3">
                {/* Section title */}
                Links
              </h2>
              <ul className="text-gray-300 font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    {/* Link */}
                    Home
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/about" className="hover:underline">
                    {/* Link */}
                    About
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/housetype" className="hover:underline">
                    {/* Link */}
                    HouseType
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/contact" className="hover:underline">
                    {/* Link */}
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal section */}
            <div>
              <h2 className="font-medium text-gray-400 pb-3">
                {/* Section title */}
                Legal
              </h2>
              <ul className="text-gray-300 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    {/* Link */}
                    Claim
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    {/* Link */}
                    Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    {/* Link */}
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-8" />

        {/* Social icons */}
        <div className="flex mt-4 space-x-5 sm:justify-end sm:mt-0">
          <a href="#" className="text-gray-300 hover:text-gray-900 dark:hover:text-white">
            {/* Facebook icon */}
            <FaFacebookSquare size={18} />
            <span className="sr-only">Facebook page</span>
          </a>
          <a href="#" className="text-gray-300 hover:text-gray-900 dark:hover:text-white">
            {/* Twitter icon */}
            <FaTwitterSquare size={18} />
            <span className="sr-only">Twitter page</span>
          </a>
          <a href="#" className="text-gray-300 hover:text-gray-900 dark:hover:text-white">
            {/* Instagram icon */}
            <FaInstagram size={18} />
            <span className="sr-only">Instagram account</span>
          </a>
        </div>

        {/* Copyright and Links */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-300 sm:text-center dark:text-gray-400">
            {/* Copyright text */}
            &copy; 2023 <Link to="/" className="hover:underline">
              BetaHouse
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
