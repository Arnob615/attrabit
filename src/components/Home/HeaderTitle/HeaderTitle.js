import React from 'react';

const HeaderTitle = () => {
    return (
        <section>
            <div class="max-w-screen-xl mx-auto">
                <div class="w-2/4 mx-auto text-gray-200">
                    <div>
                        <h2 class="text-center text-3xl md:text-4xl lg:text-5xl lg:pt-44 md:pt-44">ATTRABIT ICT SOLUTION</h2>
                        <p class="py-7 text-justify text-xl md:text-lg lg:text-base ">For Better Tools, Complete ICT Solutions, Software Development you can trust our company blindly. Save time and reduce costs with intuitive Unified Endpoint Management from Attrabit.</p>
                    </div>
                    <div class="md:flex lg:flex justify-evenly pb-10 lg:pb-2">
                        <div>
                            <button class="text-center text-lg px-20 py-4 md:px-9 md:py-4 lg:px-12 lg:py-4 transform duration-300 bg-gray-900 hover:bg-gray-700 hover:translate-x-6">Getting Start</button>
                        </div>
                        <div>
                            <button class="hidden md:block lg:block text-lg text-gray-900 bg-yellow-400 px-12 py-4 md:px-9 md:py-4 lg:px-12 lg:py-4 transform duration-300 hover:bg-yellow-600 hover:-translate-x-6 hover:text-gray-100">Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeaderTitle;