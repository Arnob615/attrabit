import React from 'react';
// import { useHistory } from 'react-router';

const Service = () => {
    // const history = useHistory();
    // const handleButton = e => {
    //     history.push('/networkSolution', { params: e });
    // }

    return (
        <section>
            <div class="max-w-screen-xl mx-auto">
                <h1 class="text-4xl text-center mt-20 mb-10 text-gray-800">Our Services</h1>
                <div class="grid grid-cols-3 p-3">
                    <div>
                        <img class="w-36" src="https://i.ibb.co/xGWYzxf/Social-network-3d-render-concept.jpg" alt=""/>
                        <h1 class="text-2xl text-gray-800 mt-2">Network Solution</h1>
                        <p class="text-gray-600 my-2">Indo Tech is a Japanese firm dedicated to providing services and products to help our customers realize more utilization and...</p>
                        <button class="bg-blue-900 text-white px-3 py-1 transform duration-300 hover:bg-yellow-400 hover:text-blue-900 hover:text-gray-900">Read Detais...</button>
                    </div>
                    
                    <div>
                        <img class="w-36" src="https://i.ibb.co/gZ6P8zw/Social-network-3d-render-concept.jpg" alt=""/>
                        <h1 class="text-2xl text-gray-800 mt-2">Software Development</h1>
                        <p class="text-gray-600 my-2">Indo Tech is a leading software development outsourcing company focusing on IT consulting and offshore programming services...</p>
                        <button class="bg-blue-900 text-white px-3 py-1 transform duration-300 hover:bg-yellow-400 hover:text-blue-900 hover:text-gray-900">Read Details...</button>
                    </div>

                    <div>
                        <img class="w-36" src="https://i.ibb.co/YPs3Dy1/ICT-Solution.png" alt=""/>
                        <h1 class="text-2xl text-gray-800 mt-2">ICT Solution</h1>
                        <p class="text-gray-600 my-2">Within our global network of skills and experience we combine a unique insight into how ICT can embrace, support and drive strategic business...</p>
                        <button class="bg-blue-900 text-white px-3 py-1 transform duration-300 hover:bg-yellow-400 hover:text-blue-900 hover:text-gray-900">Read Details...</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;