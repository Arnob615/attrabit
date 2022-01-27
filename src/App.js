import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

  const handleButton = () => {
    setClick(!click);
  }
  return (
    <div class="main bg-gray-200">
      <Router>
        {/* Nav link start*/}
        <nav class="max-w-screen-xl mx-auto flex justify-between p-3 items-center">
          <Link to="/">
            <img class="w-32 cursor-pointer sm:w-36" src="https://i.ibb.co/PT7fJf1/logo.png" alt=""/>
          </Link>
          <div class= "hidden lg:flex text-gray-700">
            <Link class="hover:text-yellow-600 transform px-5 py-2 duration-300 rounded-full" to="/">
              <a href="" alt="">HOME</a>
            </Link>
            <Link class="hover:text-yellow-600 transform px-5 py-2 duration-300 rounded-full" to="/networkSolution">
              <a href="">NETWORK SOLUTION</a>
              <ul class="hidden">
                <li><a href="" alt="">Data network</a></li>
                <li><a href="" alt="">Voice and video solution</a></li>
                <li><a href="" alt="">Network Security</a></li>
              </ul>
            </Link>
            <Link class="hover:text-yellow-600 transform px-5 py-2 duration-300 rounded-full" to="/softwareDevelopment">
              <a href="">SOFTWARE DEVELOPMENT</a>
            </Link>
            <Link class="hover:text-yellow-600 transform px-5 py-2 duration-300 rounded-full" to="/ictSolution">
              <a href="">ICT SOLUTION</a>
            </Link>
            <Link class="hover:text-yellow-600 transform px-5 py-2 duration-300 rounded-full" to="/contact">
              <a href="">CONTACT US</a>
            </Link>
          </div>
          <button onClick={ handleButton }>
            <FontAwesomeIcon class="w-6 lg:hidden cursor-pointer" icon={faAlignJustify}></FontAwesomeIcon>
          </button>
        </nav>
        {/* nav link end */}
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
