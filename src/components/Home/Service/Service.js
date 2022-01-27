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
            <div class="max-w-screen-xl mx-auto">
                <h1 class="ml-2 text-4xl md:text-center lg:text-center mt-20 mb-10 text-gray-800">OUR SERVICES</h1>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-7 p-3">
                    <div class="">
                        <img class="w-80 md:w-72 lg:w-72 transform transition-all duration-500 hover:-translate-y-7" src="https://i.ibb.co/xGWYzxf/Social-network-3d-render-concept.jpg" alt=""/>
                        <h1 class="text-3xl md:text-2xl lg:text-2xl text-gray-800 mt-2">Network Solution</h1>
                        <p class="text-gray-600 my-2 text-justify text-lg">Attrabit is a Japanese firm dedicated to providing services and products to help our customers realize more utilization...</p>
                        <button onClick={handleNetworkSolution} class="bg-gray-900 text-white px-7 py-2 transform duration-300 hover:translate-x-4 hover:bg-gray-700">More Details</button>
                    </div>
                    
                    <div>
                        <img class="w-80 md:w-72 lg:w-72 transform transition-all duration-300 hover:-translate-y-7" src="https://i.ibb.co/gZ6P8zw/Social-network-3d-render-concept.jpg" alt=""/>
                        <h1 class="text-3xl md:text-2xl lg:text-2xl text-gray-800 mt-2">Software Development</h1>
                        <p class="text-gray-600 my-2 text-justify text-lg">Attrabit is a leading software development outsourcing company focusing on IT consulting and programming services...</p>
                        <button onClick={handleSoftwareDevelopment} class="bg-gray-900 text-white px-7 py-2 transform duration-300 hover:translate-x-4 hover:bg-gray-700">More Details</button>
                    </div>

                    <div>
                        <img class="w-80 md:w-72 lg:w-72 transform transition-all duration-500 hover:-translate-y-7" src="https://i.ibb.co/YPs3Dy1/ICT-Solution.png" alt=""/>
                        <h1 class="text-3xl md:text-2xl lg:text-2xl text-gray-800 mt-2">ICT Solution</h1>
                        <p class="text-gray-600 my-2 text-justify text-lg">Within our global network of skills and experience we combine a unique insight into how ICT can embrace, support...</p>
                        <button onClick={handleIctSolution} class="bg-gray-900 text-white px-7 py-2 transform duration-300 hover:translate-x-4 hover:bg-gray-700">More Details</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;