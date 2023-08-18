import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter, Route, and Routes
import Home from './Pages/Home'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Pages/About';
import HouseType from './Pages/HouseType';
import Contact from './Pages/Contact';
import Signup from './Pages/Signup';
import Login from './Pages/Login';

function App() {
  return (
    <>
    
     <Router> {/* Wrap your App component with the Router */}
       <Routes>
         <Route path="/" element={<Home />} />
           <Route path="about" element={<About />} />
           <Route path="housetype" element={<HouseType />} />
           <Route path="contact" element={<Contact />} />
           <Route path="signup" element={<Signup />} />
           <Route path="login" element={<Login />} />
         
       </Routes>
     </Router>

    </>
  );
}

export default App;
