import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div class="max-w-screen-xl mx-auto p-5 bg-gray-300">
                <div class="grid grid-cols-4 gap-3">
                    <div>
                        <h1 class="text-gray-700 text-lg font-bold">ICT Solution</h1>
                        <a class="block text-gray-800 hover:text-slate-900" href="/cloud-management" alt="">Cloud Management</a>
                        <a class="block text-gray-800 hover:text-slate-900" href="server-management" alt="">Server Management</a>
                        <a class="text-gray-800 hover:text-slate-900" href="Db-management" alt="">DB Management</a>
                    </div>
                    <div>
                        <h1 class="text-gray-700 text-lg font-bold">Network Solution</h1>
                        <a class="block text-gray-800 hover:text-slate-900" href="data-network" alt="">Data Network</a>
                        <a class="block text-gray-800 hover:text-slate-900" href="video-solution" alt="">Voice & Video Solution</a>
                        <a class="text-gray-800 hover:text-slate-900" href="network-security" alt="">Network Security</a>
                    </div>
                    <div>
                        <h1 class="text-gray-700 text-lg font-bold">Software Development</h1>
                        <a class="block text-gray-800 hover:text-slate-900" href="web-development" alt="">Web Development</a>
                        <a class="block text-gray-800 hover:text-slate-900" href="apps-development" alt="">Apps Development</a>
                        <a class="text-gray-800 hover:text-slate-900" href="pos-solution" alt="">Pos Solution</a>
                    </div>
                    <div class="social-icon-wrapper">
                        <h1 class="text-gray-700 text-lg font-bold mb-2">Connect Social Network</h1>
                        <div class="flex gap-3">
                            <a href="http://www.youtube.com" target="_blank" alt=""><FontAwesomeIcon class="w-8 text-red-700" icon={faYoutube}></FontAwesomeIcon></a>
                            <a href="http://www.instagram.com" target="_blank" alt=""><FontAwesomeIcon class="w-6 text-orange-800" icon={faInstagram}></FontAwesomeIcon></a>
                            <a href="http://www.twitter.com" target="_blank" alt=""><FontAwesomeIcon class="w-7 text-cyan-600" icon={faTwitter}></FontAwesomeIcon></a>
                            <a href="http://www.facebook.com" target="_blank" alt=""><FontAwesomeIcon class="w-7 text-cyan-900" icon={faFacebook}></FontAwesomeIcon></a>
                        </div>
                    </div>
                </div>
                <p class="text-gray-600 text-md text-center mt-3">Copyright 2022 Attrabit | Privacy Policy | All Rights Reserved | Powered by Attrabit IT</p>
            </div>
        </footer>
    );
};

export default Footer;