import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';
import Technology from '../Technology/Technology';

const Home = () => {
    return (
        <div>
            <Header/>
            <Service/>
            <Technology/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;