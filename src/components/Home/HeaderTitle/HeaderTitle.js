import React from 'react';
import { Zoom } from 'react-reveal';
import { Link } from 'react-router-dom';

const HeaderTitle = () => {
    return (
        <section>
            <div class="max-w-screen-xl mx-auto">
                <div class="mx-auto text-gray-200">
                    
                    {/* Content part */}
                    <div class="pt-32 md:pt-40">
                        <h2 class="text-center text-gray-200 text-xl md:text-3xl lg:text-4xl xl:text-5xl tracking-wider ">ATTRACTIVE AND ABSOLUTE SOLUTION</h2>
                        <div class="w-3/4 mx-auto">
                            <p class="py-7 text-center text-lg text-gray-200">For Better experience, Complete ICT Solutions Software Development you can trust our company blindly. Save time and reduce costs with intuitive Unified Endpoint Management from Attrabit</p>
                        </div>
                    </div>

                    {/* Button part */}
                    <div class="w-3/4 mx-auto grid grid-rows-2 md:flex justify-center gap-8 md:gap-10">
                        <Zoom>
                            <div>
                                <Link to="/Login">
                                    <button class="text-center mx-auto text-lg px-24 py-4 md:px-9 md:py-4 lg:px-12 lg:py-4 transform duration-300 rounded bg-gray-800 hover:bg-gray-700 hover:-translate-y-4">Get Started</button>
                                </Link>
                            </div>
                        </Zoom>
                        <Zoom>
                            <div class="">
                                <Link to="/contact">
                                    <button class="text-lg text-gray-300 bg-sky-700 hover:bg-sky-600 px-24 py-4 md:px-9 md:py-4 lg:px-12 lg:py-4 transform duration-300 rounded hover:-translate-y-4 hover:text-gray-100">Contact Us</button>
                                </Link>
                            </div>
                        </Zoom>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeaderTitle;