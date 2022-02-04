import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Fade } from 'react-reveal';

const Footer = () => {
    return (
        <footer class="p-10 mt-10">
            <div class="max-w-screen-xl mx-auto p-5 background rounded-3xl transform duration-300 border-t border-b">
                <Fade left duration={2000}>
                    <>
                        <div class="grid md:grid-cols-2 lg:grid-cols-5 gap-3 text-white py-10 ">

                            {/* Business Consultancy Content */}
                            <div class="text-center">
                                <h1 class="text-gray-100 text-lg">CONSULTANCY</h1>
                                <a class="block pt-5 text-md transform duration-300 text-gray-400 text-md hover:text-gray-200" href="/Fdi market research" alt="">FDI Market Research</a>
                                <a class="block text-md transform duration-300 text-gray-400 text-md hover:text-gray-200 py-3" href="#company formation" alt="">Company Formation</a>
                                <a class="text-md transform duration-300 text-gray-400 hover:text-gray-200" href="operation management" alt="">Operation Management</a>
                            </div>

                            {/* ICT Solution Content */}
                            <div class="text-center">
                                <h1 class="text-gray-100 text-lg">ICT SOLUTION</h1>
                                <a class="block pt-5 text-md transform duration-300 text-gray-400 text-md hover:text-gray-200" href="/cloud management" alt="">Cloud Management</a>
                                <a class="block text-md transform duration-300 text-gray-400 text-md hover:text-gray-200 py-3" href="#server storage management" alt="">Server Management</a>
                                <a class="text-md transform duration-300 text-gray-400 hover:text-gray-200" href="Db-management" alt="">DB Management</a>
                            </div>

                            {/* Network solution Content */}
                            <div class="text-center">
                                <h1 class="text-gray-100 text-lg">NETWORK</h1>
                                <a class="block transform duration-300 text-gray-400 text-md hover:text-gray-200 pt-5" href="data-network" alt="">Data Network</a>
                                <a class="block transform duration-300 text-gray-400 text-md hover:text-gray-200 py-3" href="video-solution" alt="">Voice & Video Solution</a>
                                <a class="text-gray-400 transform duration-300  text-md hover:text-gray-200" href="network-security" alt="">Network Security</a>
                            </div>

                            {/* Software Development Content */}
                            <div class="text-center">
                                <h1 class="text-gray-100 text-lg">SOFTWARE</h1>
                                <a class="block transform duration-300 text-gray-400 text-md hover:text-gray-200 pt-5" href="web-development" alt="">Web Development</a>
                                <a class="block transform duration-300 text-gray-400 text-md hover:text-gray-200 py-3" href="apps-development" alt="">Apps Development</a>
                                <a class="text-gray-400 transform duration-300 text-md hover:text-gray-200" href="pos-solution" alt="">Pos Solution</a>
                            </div>

                            {/* Social Icon is here */}
                            <div class="social-icon-wrapper text-center">
                                <h1 class="text-gray-100 text-lg">FOLLOW US</h1>
                                <div class="flex gap-3 justify-center mt-10">
                                    <a href="http://www.youtube.com" target="_blank" alt="" rel="noreferrer"><FontAwesomeIcon class="w-8 text-red-700" icon={faYoutube}></FontAwesomeIcon></a>
                                    <a href="http://www.instagram.com" target="_blank" alt="" rel="noreferrer"><FontAwesomeIcon class="w-6 text-orange-800" icon={faInstagram}></FontAwesomeIcon></a>
                                    <a href="http://www.twitter.com" target="_blank" alt="" rel="noreferrer"><FontAwesomeIcon class="w-7 text-cyan-600" icon={faTwitter}></FontAwesomeIcon></a>
                                    <a href="http://www.facebook.com" target="_blank" alt="" rel="noreferrer"><FontAwesomeIcon class="w-7 text-cyan-600" icon={faFacebook}></FontAwesomeIcon></a>
                                </div>
                            </div>
                        </div>
                    </>
                </Fade>
                
                {/* Footer headline */}
                <Fade right duration={2000}>
                    <>
                        <p class="text-gray-400 text-md text-center p-10 cursor-pointer">Copyright 2021 Attrabit   |   Privacy Policy   |   All Rights Reserved   |   Powered by Attrabit</p>
                    </>
                </Fade>
            </div>
        </footer>
    );
};

export default Footer;