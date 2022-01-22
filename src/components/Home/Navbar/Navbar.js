import React from 'react';

const Navbar = () => {
    return (
        <section>
            <div class="bg-slate-400">
                <nav class="max-w-screen-xl mx-auto flex justify-between items-center p-4">
                    <div>
                        <img class="w-36 cursor-pointer" src="https://i.ibb.co/PT7fJf1/logo.png" alt=""/>
                    </div>
                    <div>
                        <ul class="flex space-x-10 text-white">
                            <li class="hover:bg-yellow-600 transform px-5 py-2 duration-500 rounded-full"> <a href="/home">Home</a> </li>
                            <li class="hover:bg-yellow-600 transform px-5 py-2 duration-500 rounded-full"> <a href="/about">About</a> </li>
                            <li class="hover:bg-yellow-600 transform px-5 py-2 duration-500 rounded-full"> <a href="/service">Service</a> </li>
                            <li class="hover:bg-yellow-600 transform px-5 py-2 duration-500 rounded-full"> <a href="/contact">Contact</a> </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </section>
    );
};

export default Navbar;