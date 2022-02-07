import React from 'react';
import { Fade } from 'react-reveal';
import { useNavigate } from 'react-router';
import businessConsultancy from '../../../images/Business-consultancy.png';
import ictSolution from '../../../images/Ict-solution2.png';
import network from '../../../images/network.png';
import software from '../../../images/Software-development.png';

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
                <Fade bottom duration={2000}>
                    <div>
                        <h1 class="text-4xl text-center mt-20 text-gray-200">OUR SERVICES</h1>
                    </div>
                </Fade>
                <p class="text-gray-400 text-center my-2">You just need to sit back and see your problems solved, business operations accelerated and team productivity boosted.</p>

                {/* All Content Wrapper */}
                <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-3 pt-20 border-10">
                {/* Business Consultancy content part */}
                    <div class="w-72 border-4 border-sky-600 p-6 rounded-2xl mx-auto transform transition-all duration-300 hover:-translate-y-7">
                        <img class="w-80 h-40 rounded-2xl md:w-72 lg:w-72  mt-5" src={businessConsultancy} alt=""/>
                        <h1 class="text-center text-3xl md:text-2xl lg:text-2xl text-gray-200 my-6">BUSINESS</h1>
                        <p class="text-gray-400 my-2 text-center text-base">Our consortium of seasoned consultants positions itself as a dynamic and client-centric consultancy firm in the...</p>
                        <button onClick={handleNetworkSolution} class="bg-gray-700 mt-6 text-gray-200 px-7 py-3 rounded transform duration-300 hover:translate-x-4 hover:bg-gray-500 mx-auto flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                            </svg>
                            <span>More Details</span>
                         </button>
                    </div>

                    {/* Network Solution Content start */}
                    <div class="w-72 border-4 border-sky-600 p-6 rounded-2xl mx-auto mt-9 md:mt-0 transform transition-all duration-300 hover:-translate-y-7">
                        <img class="w-80 h-40 rounded-2xl md:w-72 lg:w-72 mt-5" src={network} alt=""/>
                        <h1 class="text-center text-3xl md:text-2xl lg:text-2xl text-gray-200 my-6">NETWORK</h1>
                        <p class="text-gray-400 my-2 text-center text-base">Attrabit is a Japanese firm dedicated to providing services and products to help our customers realize more utilization...</p>
                        <button onClick={handleNetworkSolution} class="bg-gray-700 mt-6 text-gray-200 px-7 py-3 rounded transform duration-300 hover:translate-x-4 hover:bg-gray-500 mx-auto flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                            </svg>
                            <span>More Details</span>
                         </button>
                    </div>
                    
                    {/* Software Development Content start */}
                    <div class=" w-72 border-4 border-sky-600 p-6 rounded-2xl mx-auto mt-9 md:mt-5 lg:mt-0 transform transition-all duration-300 hover:-translate-y-7">
                        <img class="w-80 h-40 rounded-2xl md:w-72 lg:w-72 mt-5" src={software} alt=""/>
                        <h1 class="text-center text-3xl md:text-2xl lg:text-2xl text-gray-200 my-6">SOFTWARE</h1>
                        <p class="text-gray-400 my-2 text-center text-base">Attrabit is a leading software development outsourcing company focusing on IT consulting and programming...</p>
                        <button onClick={handleSoftwareDevelopment} class="bg-gray-700 mt-6 text-gray-200 px-7 py-3 rounded transform duration-300 hover:translate-x-4 hover:bg-gray-500 mx-auto flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                            </svg>
                            <span>More Details</span>
                        </button>
                    </div>

                    {/* ICT Solution Content start */}
                    <div class="w-72 border-4 border-sky-600 p-6 rounded-2xl mx-auto mt-9 lg:mt-5 xl:mt-0 transform transition-all duration-300 hover:-translate-y-7">
                        <img class="w-80 h-40 rounded-2xl md:w-72 lg:w-72 mt-5" src={ictSolution} alt=""/>
                        <h1 class="text-3xl md:text-2xl lg:text-2xl text-gray-200 text-center my-6">ICT SOLUTION</h1>
                        <p class="text-gray-400 my-2 text-center text-base">Within our global network of skills and experience we combine a unique insight into how ICT can embrace, support and...</p>
                        <button onClick={handleIctSolution} class="bg-gray-700 text-gray-200 mt-6 px-7 py-3 rounded transform duration-300 hover:translate-x-4 hover:bg-gray-500 mx-auto flex">
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