import React from 'react';
import { useNavigate } from 'react-router';

const Service = () => {
    let navigate = useNavigate();
    const handleNetworkSolution = () => {
        navigate("/networkSolution")
    }
    const handleIctSolution = () => {
        navigate("/ICTSolution")
    }
    const handleSoftwareDevelopment = () => {
        navigate("/softwareDevelopment")
    }

    return (
        <section>
            <div class="max-w-screen-xl mx-auto pt-12">
                <h1 class="ml-2 text-4xl md:text-center lg:text-center mt-20 mb-20 text-gray-100">OUR SERVICES</h1>

                {/* All Content Wrapper */}
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-7 p-3">
                    {/* Network Solution Content start */}
                    <div>
                        <img class="w-80 rounded-3xl md:w-72 lg:w-72 transform transition-all duration-500 hover:-translate-y-7" src="https://i.ibb.co/xGWYzxf/Social-network-3d-render-concept.jpg" alt=""/>
                        <h1 class="text-3xl md:text-2xl lg:text-2xl text-gray-100 my-4">Network Solution</h1>
                        <p class="text-gray-300 my-2 text-justify text-base">Attrabit is a Japanese firm dedicated to providing services and products to help our customers realize more utilization...</p>
                        <button onClick={handleNetworkSolution} class="bg-gray-900 mt-4 text-white px-7 py-3 rounded transform duration-300 hover:translate-x-4 hover:bg-gray-700 flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                            </svg>
                            <span>More Details</span>
                         </button>
                    </div>
                    
                    {/* Software Development Content start */}
                    <div class="py-10 md:py-0">
                        <img class="w-80 rounded-3xl md:w-72 lg:w-72 transform transition-all duration-300 hover:-translate-y-7" src="https://i.ibb.co/gZ6P8zw/Social-network-3d-render-concept.jpg" alt=""/>
                        <h1 class="text-3xl md:text-2xl lg:text-2xl text-gray-100 my-4">Software Development</h1>
                        <p class="text-gray-300 my-2 text-justify text-base">Attrabit is a leading software development outsourcing company focusing on IT consulting and programming services...</p>
                        <button onClick={handleSoftwareDevelopment} class="bg-gray-900 mt-4 text-white px-7 py-3 rounded transform duration-300 hover:translate-x-4 hover:bg-gray-700 flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                            </svg>
                            <span>More Details</span>
                        </button>
                    </div>

                    {/* ICT Solution Content start */}
                    <div>
                        <img class="w-80 rounded-3xl md:w-72 lg:w-72 transform transition-all duration-500 hover:-translate-y-7" src="https://i.ibb.co/YPs3Dy1/ICT-Solution.png" alt=""/>
                        <h1 class="text-3xl md:text-2xl lg:text-2xl text-gray-100 my-4">ICT Solution</h1>
                        <p class="text-gray-300 my-2 text-justify text-base">Within our global network of skills and experience we combine a unique insight into how ICT can embrace, support...</p>
                        <button onClick={handleIctSolution} class="bg-gray-900 text-white mt-4 px-7 py-3 rounded transform duration-300 hover:translate-x-4 hover:bg-gray-700 flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                            </svg>
                            <span>More Details</span>
                        </button>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Service;