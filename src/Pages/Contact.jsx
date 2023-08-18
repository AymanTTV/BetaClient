import React from "react";
import Navbar from "../Components/Navbar";
import Footer from '../Components/Footer';


export default function Contact(){
    return(
        <>
        <Navbar />
        <div className="container my-24 mx-auto md:px-6 px-5 py-5 bg-[#17181a]">
  {/* Qeeybta Designka */}
  <section className="mb-32">
    <div className="flex flex-wrap">
      {/* Contact Information */}
      <div className="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
        <h2 className="mb-6 text-3xl font-bold text-[#00df9a]">Contact us</h2>
        <p className="mb-6 text-gray-300">
          In Betahouse we are always online for customer care so nala soo wadaag Macamiil
        </p>
        <p className="mb-2 text-gray-300">
          Somalia Mogadishu
        </p>
        <p className="mb-2 text-gray-300">
          +25261XXXXXX
        </p>
        <p className="mb-2 text-gray-300">
          info@betahouse.com
        </p>
      </div>
      {/* Contact Form */}
      <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
      
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      
      <form action="#" className="space-y-8">
          <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required />
          </div>
          <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
  </div>
      </div>
    </div>
  </section>
  {/* soo dhamaatay */}
</div>

        <Footer />
        </>
    )
}