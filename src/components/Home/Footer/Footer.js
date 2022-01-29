import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div class="max-w-screen-xl mx-auto p-5 bg-gray-300">
                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-3">

                    {/* ICT Solution Content */}
                    <div class="text-center">
                        <h1 class="text-gray-700 text-md">ICT SOLUTION</h1>
                        <a class="block text-gray-600 text-md hover:text-slate-900" href="/cloud management" alt="">Cloud Management</a>
                        <a class="block text-gray-600 text-md hover:text-slate-900" href="#server storage management" alt="">Server Management</a>
                        <a class="text-gray-600 text-md hover:text-slate-900" href="Db-management" alt="">DB Management</a>
                    </div>

                    {/* Network solution Content */}
                    <div class="text-center">
                        <h1 class="text-gray-700 text-MD">NETWORK SOLUTION</h1>
                        <a class="block text-gray-600 text-md hover:text-slate-900" href="data-network" alt="">Data Network</a>
                        <a class="block text-gray-600 text-md hover:text-slate-900" href="video-solution" alt="">Voice & Video Solution</a>
                        <a class="text-gray-600 text-md hover:text-slate-900" href="network-security" alt="">Network Security</a>
                    </div>

                    {/* Software Development Content */}
                    <div class="text-center">
                        <h1 class="text-gray-700 text-md">SOFTWARE DEVELOPMENT</h1>
                        <a class="block text-gray-600 text-md hover:text-slate-900" href="web-development" alt="">Web Development</a>
                        <a class="block text-gray-600 text-md hover:text-slate-900" href="apps-development" alt="">Apps Development</a>
                        <a class="text-gray-600 text-md hover:text-slate-900" href="pos-solution" alt="">Pos Solution</a>
                    </div>

                    {/* Social Icon is here */}
                    <div class="social-icon-wrapper text-center">
                        <h1 class="text-gray-700 text-md">CONNECT SOCIAL NETWORK</h1>
                        <div class="flex gap-3 justify-center">
                            <a href="http://www.youtube.com" target="_blank" alt="" rel="noreferrer"><FontAwesomeIcon class="w-8 text-red-700" icon={faYoutube}></FontAwesomeIcon></a>
                            <a href="http://www.instagram.com" target="_blank" alt="" rel="noreferrer"><FontAwesomeIcon class="w-6 text-orange-800" icon={faInstagram}></FontAwesomeIcon></a>
                            <a href="http://www.twitter.com" target="_blank" alt="" rel="noreferrer"><FontAwesomeIcon class="w-7 text-cyan-600" icon={faTwitter}></FontAwesomeIcon></a>
                            <a href="http://www.facebook.com" target="_blank" alt="" rel="noreferrer"><FontAwesomeIcon class="w-7 text-cyan-900" icon={faFacebook}></FontAwesomeIcon></a>
                        </div>
                    </div>
                </div>
                
                {/* Footer headline */}
                <p class="text-gray-800 bg-white text-md text-center mt-3 cursor-pointer">Copyright 2022 Attrabit | Privacy Policy | All Rights Reserved | Powered by Attrabit IT</p>
            </div>
        </footer>
    );
};

export default Footer;