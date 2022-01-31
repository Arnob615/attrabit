import React, { useState } from 'react';
import { Fade } from 'react-reveal';
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
import Login from './components/Login/Login';
import ScrollToTop from './components/scroll/ScrollToTop';
import Signup from './components/Signup/Signup';


function App() {
  const [isShow, setIsShow] = useState(false);
  const [changeNavbar, setChangeNavbar] = useState(false);

  const handleClick = () => {
    setIsShow(!isShow);
  }

  // When scrolling the navbar it changes background Color
  const changeBackground = () => {
    if (window.scrollY >= 120) {
      setChangeNavbar(true);
    } else {
      setChangeNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (
    <main class="bg-gray-200">
      <Router>
        {/* Nav link start*/}
          <nav class={changeNavbar ? 'bg-gray-900 fixed inset-x-0 top-0 z-50' : 'bg-gray-800'}>
            <div class="max-w-screen-xl mx-auto flex justify-between p-3 items-center h-16">
              <div class="flex">
                {/* Logo is here */}
                <div>
                  <Link to="/">
                    <img class="w-32 cursor-pointer sm:w-36" src="https://i.ibb.co/JB0hP3M/logo2.png" alt=""/>
                  </Link>
                </div>

                {/* Main Navbar part */}
                <div class= "hidden lg:flex text-gray-200 space-x-5 ml-14 items-center text-sm">
                  <Link class=" transform duration-300 bg-yellow-600 px-4 py-1 rounded hover:bg-yellow-800" to="/">
                    <a href="/home" alt="">HOME</a>
                  </Link>
                  <Link class="hover:text-yellow-400 transform duration-300" to="/networkSolution">
                    <a href="/network">NETWORK SOLUTION</a>
                  </Link>
                  <Link class="hover:text-yellow-400 transform duration-300" to="/softwareDevelopment">
                    <a href="/development">SOFTWARE DEVELOPMENT</a>
                  </Link>
                  <Link class="hover:text-yellow-400 transform duration-300" to="/ictSolution">
                    <a href="/ict">ICT SOLUTION</a>
                  </Link>
                  <Link class="hover:text-yellow-400 transform duration-300" to="/contact">
                    <a href="/contact">CONTACT US</a>
                  </Link>
                </div>
              </div>
              
              {/* Login and Signup is here part */}
              <div class="hidden lg:flex space-x-3 items-center">
                <Link class="text-sm bg-yellow-600 px-4 py-1 rounded text-white transform duration-300 hover:bg-yellow-800" to="/login">LOGIN</Link>
                <Link class="text-sm bg-gray-500 px-4 py-1 text-white rounded transform duration-300 hover:bg-gray-600" to="signup">SIGN UP</Link>
              </div>
              
              {/* Mobile button icon part */}
              <div class="lg:hidden flex items-center">
                <button class="text-white" onClick={() => handleClick()}>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* This Navbar is for mobile menu */}
              <div class={isShow ? 'block' : 'hidden'} >
                <a class="block px-4 py-2 text-sm text-gray-100 hover:bg-gray-500 hover:text-gray-100 transform duration-300" href="/home">HOME</a>
                <a class="block px-4 py-2 text-sm text-gray-100 hover:bg-gray-500 hover:text-gray-100 transform duration-300" href="/networkSolution">NETWORK SOLUTION</a>
                <a class="block px-4 py-2 text-sm text-gray-100 hover:bg-gray-500 hover:text-gray-100 transform duration-300" href="/softwareDevelopment">SOFTWARE DEVELOPMENT</a>
                <a class="block px-4 py-2 text-sm text-gray-100 hover:bg-gray-500 hover:text-gray-100 transform duration-300" href="/ictSolution">ICT SOLUTION</a>
                <a class="block px-4 py-2 text-sm text-gray-100 hover:bg-gray-500 hover:text-gray-100 transform duration-300" href="/contact">CONTACT</a>
              </div>
            </nav>
        {/* nav link end */}

        {/* Routes Components */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/networkSolution" element={<NetworkSolution/>}/>
          <Route path="/softwareDevelopment" element={<SoftwareDevelopment/>}/>
          <Route path="/ICTSolution" element={<ICTSolution/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
        
        {/* Footer Part */}
        <div>
          <Footer/>
        </div>
      </Router>
      <ScrollToTop/>
    </main>
  );
}

export default App;
