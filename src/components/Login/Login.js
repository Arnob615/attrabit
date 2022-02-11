import React from 'react';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
import initializeAuthentication from '../../firebase/firebase.initialize';
import OthersLogin from '../OthersLogin/OthersLogin';

initializeAuthentication();

const Login = () => {
    
    return (
        <div class="p-10">
            <div class="max-w-screen-md mx-auto">

                {/* Login Form Wrapper */}
                <Fade left duration={2000}>
                    <>
                        <div class="container background p-20 rounded-3xl text-gray-200 bg-gray-700">
                            <h2 class="text-center text-4xl">Login Form </h2>

                            {/* Login Form */}
                            <form class="p-10">
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="text" name="email" className="form-control w-full h-12 p-2 rounded mb-5 text-black border border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-700 focus:ring-1" placeholder="Email Address" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" className="form-control w-full h-12 p-2 rounded mb-5 text-black border border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-700 focus:ring-1" placeholder="Password" required />
                                </div>

                                {/* Checkbox and Forgot password part */}
                                <div className="from-group">
                                    <div className="flex justify-between mb-3">
                                        <div>
                                            <input type="checkbox" className="cursor-pointer" /> Remember Me
                                        </div>
                                        <div>
                                            <Link to="#">Forgot Password?</Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Create new account Link */}
                                <div class="flex justify-around mb-5 text-lg cursor-pointer">
                                    <p>Don't have an account?</p>
                                    <Link class="text-yellow-300 hover:text-yellow-400 transform duration-300 hover:scale-105" to="/signup">Create an account</Link>
                                </div>

                                <div className="form-group">
                                    <input type="submit" value="Login" className="text-gray-100 text-lg cursor-pointer w-full h-12 transform duration-300 bg-sky-900 hover:bg-sky-800 rounded mb-10" />
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

export default Login;