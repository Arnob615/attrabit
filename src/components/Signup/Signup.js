import firebase from 'firebase/compat/app';
import React from 'react';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
import firebaseConfig from '../../firebase/firebase.config';
import initializeAuthentication from '../../firebase/firebase.initialize';
import OthersLogin from '../OthersLogin/OthersLogin';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

initializeAuthentication();

const Signup = () => {

    return (
        <div class="p-10">
            <div class="max-w-screen-md mx-auto">

                {/* Signup Form Wrapper */}
                <Fade right duration={2000}>
                    <>
                        <div class="container background p-20 rounded-3xl text-gray-200 bg-gray-700">
                            <h2 class="text-center text-4xl">Create an account</h2>

                            {/* Signup Form */}
                            <form className="p-10">
                                <div className="form-group">
                                    <input type="name" name="name" className="form-control w-full lg:w-full h-14 p-2 rounded mb-5 text-black border border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-700 focus:ring-1" placeholder="Your Name" required />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="email" className="form-control w-full lg:w-full h-14 p-2 rounded mb-5 text-black border border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-700 focus:ring-1" placeholder="Your Email" required />
                                </div>
                                <div className="form-group">
                                    <input type="password" name="password" className="form-control w-full h-14 lg:w-full p-2 rounded mb-5 text-black border border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-700 focus:ring-1" placeholder="Your Password" required />
                                </div>
                                <div className="form-group">
                                    <input type="password" name="confirmPassword" className="form-control w-full h-14 lg:w-full p-2 rounded mb-5 text-black border border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-700 focus:ring-1" placeholder="Confirm Password" required />
                                </div>

                                {/* Login Form Link */}
                                <div className="flex justify-around mb-5 text-lg cursor-pointer">
                                    <p>Already have an account?</p>
                                    <Link class="text-yellow-300 hover:text-yellow-400 transform duration-300 hover:scale-105" to="/login">Login</Link>
                                </div>

                                <div className="form-group">
                                    <input type="submit" value="Sign Up" className="text-gray-900 text-lg cursor-pointer w-full h-14 transform duration-300 bg-gray-200 hover:bg-gray-500 hover:text-gray-200 rounded mb-10" />
                                </div>

                                {/* Others login system */}
                                <div class="mb-10">
                                    <h3 class="text-center text-lg"> or use one of this options </h3>
                                </div>

                                <div>
                                    <OthersLogin/>
                                </div>

                            </form>
                        </div>
                    </>
                </Fade>
            </div>

        </div>
    );
};

export default Signup;