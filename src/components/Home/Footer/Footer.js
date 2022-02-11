import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo/logo.png';

const Footer = () => {
    return (
        <footer class="p-10 mt-10">
            <div class="max-w-screen-xl p-5 mx-auto background rounded-3xl transform duration-300 border-t border-b">
                <Fade left duration={2000}>
                    <>
                        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-white py-10 ">

                            {/* Footer address part */}
                            <div>
                                <Link to="/"><img class="w-40 mb-9" src={logo} alt="" /></Link>
                                <div class="">
                                    <div class="flex gap-3 items-center ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 bg-sky-700 p-1 rounded" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <div>
                                        <p> Concord Farhan Building </p>
                                        <p> Road 3, Block J, Baridhara </p>
                                        <p> Dhaka 1212 </p>
                                        </div>
                                    </div>

                                    <div class="flex gap-3 my-3 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 bg-sky-700 p-1 rounded" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <p>info@attrabit.net</p>
                                    </div>

                                    <div class="flex gap-3 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 bg-sky-700 p-1 rounded" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <p>0–192–580–8240 </p>
                                    </div>
                                </div>
                                
                            </div>

                            {/* Our services part */}
                            <div class="">
                                <p class="text-gray-100 text-lg font-medium">OUR SERVICES</p>
                                <div class="flex gap-3 items-center pt-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <a href="/business-consultancy" alt="">Business Consultancy</a>
                                </div>

                                <div class="flex gap-3 items-center py-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <a href="/network-solution" alt="">Network Solution</a>
                                </div>

                                <div class="flex gap-3 items-center pb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <a href="/software-development" alt="">Software Solution</a>
                                </div>

                                <div class="flex gap-3 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <a href="/ict-solution" alt="">Ict Solution</a>
                                </div>
                            </div>

                            {/* Working Hours */}
                            <div class="">
                                <h4 class="text-gray-100 text-lg font-medium">WORKING HOURS</h4>
                                <div class="flex items-center gap-3 pt-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p>9 am - 6 pm , Mon-Sat</p>
                                </div>
                            </div>

                            {/* Social Icon is here */}
                            <div class="social-icon-wrapper">
                                <h1 class="text-gray-100 text-lg">FOLLOW US</h1>
                                <div class="flex gap-3 mt-10">
                                    <a href="http://www.youtube.com" target="_blank" alt="" rel="noreferrer"><FontAwesomeIcon class="w-8 h-8 text-gray-200 bg-red-700 p-2" icon={faYoutube}></FontAwesomeIcon></a>
                                    <a href="http://www.instagram.com" target="_blank" alt="" rel="noreferrer"><FontAwesomeIcon class="w-8 h-8 text-gray-200 bg-orange-800 p-2" icon={faInstagram}></FontAwesomeIcon></a>
                                    <a href="http://www.twitter.com" target="_blank" alt="" rel="noreferrer"><FontAwesomeIcon class="w-8 h-8 text-gray-200 bg-cyan-600 p-2" icon={faTwitter}></FontAwesomeIcon></a>
                                    <a href="https://www.facebook.com/attrabit.net" target="_blank" alt="" rel="noreferrer"><FontAwesomeIcon class="w-8 h-8 bg-sky-700 text-gray-200 p-2" icon={faFacebook}></FontAwesomeIcon></a>
                                </div>
                            </div>
                        </div>
                    </>
                </Fade>
                
                {/* Footer headline */}
                <Fade right duration={2000}>
                    <>
                        <p class="text-gray-400 pb-4 text-md cursor-pointer text-left lg:text-center">Copyright 2021 Attrabit   |   Privacy Policy   |   All Rights Reserved   |   Powered by Attrabit</p>
                    </>
                </Fade>
            </div>
        </footer>
    );
};

export default Footer;