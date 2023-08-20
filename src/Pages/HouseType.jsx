import React from "react";
import Navbar from "../Components/Navbar";
import Footer from '../Components/Footer';
import Banner from "../Components/Banner";
import HouseList from '../Components/HouseList';

export default function HouseType(){
    return(
        <>
        <Navbar />
        <Banner />
        <HouseList />
        <Footer />
        </>
    )
}