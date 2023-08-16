import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";


export default function Home(){
    return(
        <>
        <Navbar />

        <div className='mt-0 mb-20 bg-white'><h1 className="w-full text-3xl font-bold text-[#00df98] text-center mt-0"> Home Page</h1></div>




        <Footer />
        </>
    )
}