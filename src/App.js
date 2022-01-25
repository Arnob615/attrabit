import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';
import React from 'react';
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
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div class="main bg-gray-200">
      <Router>
        <div class="max-w-screen-xl mx-auto flex justify-between p-3 items-center">
          <div>
            <img class="w-32 cursor-pointer" src="https://i.ibb.co/PT7fJf1/logo.png" alt=""/>
          </div>
          <div class= "flex text-gray-700">
            <Link class="hover:text-yellow-600 transform px-5 py-2 duration-300 rounded-full" to="/">HOME</Link>
            <Link class="hover:text-yellow-600 transform px-5 py-2 duration-300 rounded-full" to="/networkSolution">
              <a href="">NETWORK SOLUTION</a>
              <ul class="hidden">
                <li><a href="">Data network</a></li>
                <li><a href="">Voice and video solution</a></li>
                <li><a href="">Network Security</a></li>
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
          <FontAwesomeIcon class="w-6 cursor-pointer lg:hidden" icon={faAlignJustify}></FontAwesomeIcon>
        </div>
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
