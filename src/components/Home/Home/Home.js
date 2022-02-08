import React from 'react';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Service from '../Service/Service';
import Technology from '../Technology/Technology';

const Home = () => {
    return (
        <>
            <Header/>
            <Service/>
            <Technology/>
            <Contact/>
        </>
    );
};

export default Home;