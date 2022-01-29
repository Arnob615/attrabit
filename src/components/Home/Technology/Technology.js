import { faAccessibleIcon, faConnectdevelop } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Technology = () => {
    return (
        <section>
            <div class="max-w-screen-xl mx-auto p-3">
                <h1 class="text-3xl mt-24 mb-10 text-gray-800 ">ADVANCED TECHNOLOGY</h1>

                {/* All Content Wrapper Start */}
                <div class="grid lg:grid-cols-2 items-center">
                    {/* Left Content Articles */}
                    <div class="left_content">
                        <p class="mb-8 text-gray-600 text-lg">We focus on Cloud Computing, Blockchain technology to ensure security and performance</p>
                        <div class="grid md:grid-cols-2 gap-7">
                            <div>
                                <FontAwesomeIcon class="w-14 md:w-10 lg:w-10 hover:text-white bg-yellow-600 p-2 rounded-full cursor-pointer duration-300" icon={faConnectdevelop}></FontAwesomeIcon>
                                <h1 class="text-3xl md:text-2xl lg:text-2xl text-gray-900 my-3">Security</h1>
                                <p class="text-gray-600 text-lg text-justify">IT combines the authentication of both users and devices with the authorization of access to various assets to ensure the highest level of security.</p>
                            </div>

                            <div>
                                <FontAwesomeIcon class="w-14 md:w-10 lg:w-10 hover:text-white bg-yellow-600 p-2 rounded-full cursor-pointer duration-300" icon={faAccessibleIcon}></FontAwesomeIcon>
                                <h1 class="text-3xl md:text-2xl lg:text-2xl text-gray-900 my-3">Performance</h1>
                                <p class="text-gray-600 text-lg text-justify">We focus on the excellent support and service we provide to our customers.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Content Image */}
                    <div class="right_content w-11/12 lg:w-10/12 md:pl-10 animate-bounce">
                        <img src="https://i.ibb.co/rHhsFRF/Technology.png" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Technology;