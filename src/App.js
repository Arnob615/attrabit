import React from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home/Home';
import Navbar from './components/Home/Navbar/Navbar';

function App() {
  return (
    <div class="main bg-gray-200">
      <Router>
        <Navbar/>
        <Home/>
      </Router>
    </div>
  );
}

export default App;
