import React from 'react';
import { faAws, faSuperpowers, } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Technology = () => {
    return (
        <section>
            <div class="max-w-screen-xl mx-auto p-3">
                <h1 class="text-3xl mt-24 mb-10 text-gray-800">ADVANCED TECHNOLOGY</h1>
                <div class="content_wrapper grid grid-cols-2 items-center">
                    <div class="left_content">
                        <p class="mb-8 text-gray-600">We focus on Cloud Computing, Blockchain technology to ensure security and performance</p>
                        <div class="grid grid-cols-2">
                            <div>
                                <div >
                                    <FontAwesomeIcon class="w-10 hover:text-white bg-yellow-600 p-2 rounded-full cursor-pointer duration-300" icon={faAws}></FontAwesomeIcon>
                                    <h1 class="text-2xl text-gray-900 my-3">Security</h1>
                                </div>
                                <p class="text-gray-600">IT combines the authentication of both users and devices with the authorization of access to various assets to ensure the highest level of security.</p>
                            </div>

                            <div  class="ml-4">
                                <div>
                                    <FontAwesomeIcon class="w-9 hover:text-white bg-yellow-600 p-2 rounded-full cursor-pointer duration-300" icon={faSuperpowers}></FontAwesomeIcon>
                                    <h1 class="text-2xl text-gray-900 my-3">Performance</h1>
                                </div>
                                <p class="text-gray-600">We focus on the excellent support and service we provide to our customers.</p>
                            </div>
                        </div>
                    </div>
                    <div class="right_content w-10/12">
                        <img src="https://i.ibb.co/rHhsFRF/Technology.png" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Technology;