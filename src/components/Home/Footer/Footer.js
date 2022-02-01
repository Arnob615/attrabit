import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer class="p-10">
            <div class="max-w-screen-xl mx-auto p-5 background g-stone-700 pt-24 rounded-3xl">
                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-3 text-white ">

                    {/* ICT Solution Content */}
                    <div class="text-center">
                        <h1 class="text-gray-100 text-lg">ICT SOLUTION</h1>
                        <a class="block text-gray-300 text-md pt-5 hover:text-slate-900" href="/cloud management" alt="">Cloud Management</a>
                        <a class="block text-gray-300 text-md hover:text-slate-900 py-3" href="#server storage management" alt="">Server Management</a>
                        <a class="text-gray-300 text-md hover:text-slate-900" href="Db-management" alt="">DB Management</a>
                    </div>

                    {/* Network solution Content */}
                    <div class="text-center">
                        <h1 class="text-gray-100 text-lg">NETWORK SOLUTION</h1>
                        <a class="block text-gray-300 text-md hover:text-slate-900 pt-5" href="data-network" alt="">Data Network</a>
                        <a class="block text-gray-300 text-md hover:text-slate-900 py-3" href="video-solution" alt="">Voice & Video Solution</a>
                        <a class="text-gray-300 text-md hover:text-slate-900" href="network-security" alt="">Network Security</a>
                    </div>

                    {/* Software Development Content */}
                    <div class="text-center">
                        <h1 class="text-gray-100 text-lg">SOFTWARE DEVELOPMENT</h1>
                        <a class="block text-gray-300 text-md hover:text-slate-900 pt-5" href="web-development" alt="">Web Development</a>
                        <a class="block text-gray-300 text-md hover:text-slate-900 py-3" href="apps-development" alt="">Apps Development</a>
                        <a class="text-gray-300 text-md hover:text-slate-900" href="pos-solution" alt="">Pos Solution</a>
                    </div>

                    {/* Social Icon is here */}
                    <div class="social-icon-wrapper text-center">
                        <h1 class="text-gray-100 text-lg">GET IN TOUCH</h1>
                        <div class="flex gap-3 justify-center mt-10">
                            <a href="http://www.youtube.com" target="_blank" alt="" rel="noreferrer"><FontAwesomeIcon class="w-8 text-red-700" icon={faYoutube}></FontAwesomeIcon></a>
                            <a href="http://www.instagram.com" target="_blank" alt="" rel="noreferrer"><FontAwesomeIcon class="w-6 text-orange-800" icon={faInstagram}></FontAwesomeIcon></a>
                            <a href="http://www.twitter.com" target="_blank" alt="" rel="noreferrer"><FontAwesomeIcon class="w-7 text-cyan-600" icon={faTwitter}></FontAwesomeIcon></a>
                            <a href="http://www.facebook.com" target="_blank" alt="" rel="noreferrer"><FontAwesomeIcon class="w-7 text-cyan-600" icon={faFacebook}></FontAwesomeIcon></a>
                        </div>
                    </div>
                </div>
                
                {/* Footer headline */}
                <p class="text-gray-400 text-md text-center mt-14 cursor-pointer">terms of purchase <span class="px-10">security and privacy</span> Attrabit IT </p>
            </div>
        </footer>
    );
};

export default Footer;