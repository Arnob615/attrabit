import { faAccessibleIcon, faConnectdevelop } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Fade } from 'react-reveal';
import technology from '../../../images/Technology.png';

const Technology = () => {
    return (
        <section class="p-10">
            <div class="max-w-screen-xl mx-auto my-24">
                <Fade right duration={2000}>
                    <div>
                        <h1 class="text-center md:text-left text-3xl mb-10 p-6 text-gray-200">ADVANCED TECHNOLOGY</h1>
                    </div>
                </Fade>

                {/* All Content Wrapper Start */}
                    <div class="grid lg:grid-cols-2 items-center justify-between">
                        {/* Left Content Articles z*/}
                        <Fade left duration={2000}>
                            <div class="p-6">
                                <p class="mb-8 text-gray-400 text-base text-center md:text-justify">We focus on Cloud Computing, Blockchain technology to ensure security and performance</p>
                                <div class="grid md:grid-cols-2 gap-7">
                                    <div>
                                        <FontAwesomeIcon class="w-14 md:w-10 mx-auto md:mx-0 lg:w-10 hover:text-white bg-sky-600 p-2 rounded-full cursor-pointer duration-300" icon={faConnectdevelop}></FontAwesomeIcon>
                                        <h1 class="text-3xl md:text-2xl lg:text-2xl text-gray-200 my-5 text-center md:text-justify">Security</h1>
                                        <p class="text-gray-400 text-base text-center md:text-justify">IT combines the authentication of both users and devices with the authorization of access to various assets to ensure the highest level of security.</p>
                                    </div>

                                    <div>
                                        <FontAwesomeIcon class="mx-auto md:mx-0 w-14 md:w-10 lg:w-10 hover:text-white bg-sky-600 p-2 rounded-full cursor-pointer duration-300" icon={faAccessibleIcon}></FontAwesomeIcon>
                                        <h1 class="text-3xl md:text-2xl lg:text-2xl text-gray-200 my-5 text-center md:text-justify">Performance</h1>
                                        <p class="text-gray-400 text-base text-center md:text-justify">We focus on the excellent support and service we provide to our customers.</p>
                                    </div>
                                </div>
                            </div>
                        </Fade>

                        {/* Right Content Image */}
                        <div class="w-11/12 lg:w-10/12 md:pl-10 mx-auto mt-8 lg:mt-0 animate-pulse">
                            <img class="rounded-3xl" src={technology} alt=""/>
                        </div>
                    </div>
            </div>
        </section>
    );
};

export default Technology;