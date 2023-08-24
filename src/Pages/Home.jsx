import React from "react";
import Navbar from "../Components/Navbar";
import Qurxis from "../Components/Qurxis";
import Footer from "../Components/Footer";
import HomesSection from "../Components/HomeSection";
import Newsletter from "../Components/Newsletter";
import Cards from "../Components/Cards";
import Crousel from "../Components/Crousel.jsx";


export default function Home(){
    return(
        <>
      <Navbar />
      <Qurxis />
      <HomesSection />
      <Newsletter />
      <Cards />
      <Crousel />
      <Footer />
      
        </>
    )
}