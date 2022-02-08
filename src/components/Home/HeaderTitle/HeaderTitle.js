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
                        <div class="w-2/4 mx-auto">
                            <p class="py-7 text-center text-lg text-gray-200">For Better experience, Complete ICT Solutions Software Development you can trust our company blindly. Save time and reduce costs with intuitive Unified Endpoint Management from Attrabit</p>
                        </div>

                        {/* One button codding */}
                        {/* <div class="w-2/4 mx-auto md:flex lg:flex justify-evenly">
                            <Zoom>
                                <div class="justify-center">
                                    <Link to="/contact">
                                        <button class="text-lg text-gray-300 bg-sky-700 hover:bg-sky-600 px-12 py-4 transform duration-300 rounded hover:scale-90 hover:text-gray-100">Contact Us</button>
                                    </Link>
                                </div>
                            </Zoom>
                        </div> */}
                    </div>

                    {/* Button part */}
                    <div class="w-2/4 mx-auto md:flex lg:flex justify-evenly pb-10 lg:pb-2">
                        <Zoom>
                            <div>
                                <Link to="/Login">
                                    <button class="text-center text-lg px-16 py-4 md:px-9 md:py-4 lg:px-12 lg:py-4 transform duration-300 rounded bg-gray-800 hover:bg-gray-700 hover:translate-x-6">Get Started</button>
                                </Link>
                            </div>
                        </Zoom>
                        <Zoom>
                            <div class="justify-center">
                                <Link to="/contact">
                                    <button class="hidden md:block lg:block text-lg text-gray-300 bg-sky-700 hover:bg-sky-600  px-12 py-4 md:px-9 md:py-4 lg:px-12 lg:py-4 transform duration-300 rounded hover:-translate-x-6 hover:text-gray-100">Contact Us</button>
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