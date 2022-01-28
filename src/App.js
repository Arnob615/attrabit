import React, { useState } from 'react';
import {
  BrowserRouter as Router, Link, Route, Routes
} from "react-router-dom";
import './App.css';
import Contact from './components/Home/Contact/Contact';
import Footer from './components/Home/Footer/Footer';
import Home from './components/Home/Home/Home';
import ICTSolution from './components/Home/Service/ICTSolution/ICTSolution';
import NetworkSolution from './components/Home/Service/NetworkSolution/NetworkSolution';
import SoftwareDevelopment from './components/Home/Service/SoftwareDevelopment/SoftwareDevelopment';


function App() {
  const [click, setClick] = useState(false);

  const handleClick = (e) => {
    setClick("hidden")
  }

  return (
    <div class="main bg-gray-200">
      <Router>
        {/* Nav link start*/}
        <nav>
          <div class="max-w-screen-xl mx-auto flex justify-between p-3 items-center">
            <div class="flex">

              {/* Logo is here */}
              <div>
                <Link to="/">
                  <img class="w-32 cursor-pointer sm:w-36" src="https://i.ibb.co/PT7fJf1/logo.png" alt=""/>
                </Link>
              </div>

              {/* Navbar is here */}
              <div class= "hidden lg:flex text-gray-700 space-x-5 ml-14 items-center lg:text-sm xl:text-base">
                <Link class="hover:text-yellow-600 transform duration-300" to="/">
                  <a href="/home" alt="">HOME</a>
                </Link>
                <Link class="hover:text-yellow-600 transform duration-300" to="/networkSolution">
                  <a href="/network">NETWORK SOLUTION</a>
                </Link>
                <Link class="hover:text-yellow-600 transform duration-300" to="/softwareDevelopment">
                  <a href="/development">SOFTWARE DEVELOPMENT</a>
                </Link>
                <Link class="hover:text-yellow-600 transform duration-300" to="/ictSolution">
                  <a href="/ict">ICT SOLUTION</a>
                </Link>
                <Link class="hover:text-yellow-600 transform duration-300" to="/contact">
                  <a href="/contact">CONTACT US</a>
                </Link>
              </div>
            </div>
            
            {/* Login and Signup is here */}
            <div class="hidden lg:flex space-x-3 items-center">
              <Link class="text-lg bg-yellow-600 px-4 py-1 text-white transform duration-300 hover:bg-yellow-800" to="">Login</Link>
              <Link class="text-lg bg-gray-900 px-4 text-white py-1 transform duration-300 hover:bg-gray-600" to="">Signup</Link>
            </div>
            
            {/* Mobile button is here */}
            <div class="lg:hidden flex items-center">
              <button onClick={() => handleClick(!click)}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* This button is for mobile menu */}
            <div class="hidden">
              <a class="block px-4 py-2 text-sm" href="/home">HOME</a>
              <a class="block px-4 py-2 text-sm" href="/networkSolution">NETWORK SOLUTION</a>
              <a class="block px-4 py-2 text-sm" href="/softwareDevelopment">SOFTWARE DEVELOPMENT</a>
              <a class="block px-4 py-2 text-sm" href="/ictSolution">ICT SOLUTION</a>
              <a class="block px-4 py-2 text-sm" href="/contact">CONTACT</a>
            </div>
        </nav>
        {/* nav link end */}

        {/* Route Components */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/networkSolution" element={<NetworkSolution/>}/>
          <Route path="/softwareDevelopment" element={<SoftwareDevelopment/>}/>
          <Route path="/ICTSolution" element={<ICTSolution/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        
        <div>
          <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
