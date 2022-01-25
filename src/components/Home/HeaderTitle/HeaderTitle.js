import React from 'react';

const HeaderTitle = () => {
    return (
        <section>
            <div class="max-w-screen-xl mx-auto">
                <div class="w-2/4 mx-auto text-gray-200">
                    <div>
                        <h2 class="text-6xl pt-44">Attrabit ICT Solution</h2>
                        <p class="py-7">Arcu Mi Porttitor Est Non Felis Aliquam Ullamcorper Sed Porttitor Accumsan Arcu Maecenas Lorem Elit Tristique Quis Iaculis At Euismod Vel Arcu Donec Et Lorem</p>
                    </div>
                    <div class="flex space-x-6">
                        <div>
                            <button class="rounded-full border-2 px-10 py-2 transform duration-300 hover:bg-yellow-400 hover:text-gray-900">Getting Start</button>
                        </div>
                        <div>
                            <button class="rounded-full text-gray-900 bg-yellow-400 px-8 py-3">Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeaderTitle;