import React from 'react';
import { Link } from 'react-router-dom';
import initializeAuthentication from '../../firebase/firebase.initialize';
import OthersLogin from '../OthersLogin/OthersLogin';

initializeAuthentication();

const Login = () => {
    
    return (
        <div class="p-10">
            <div class="max-w-screen-xl mx-auto">

                {/* Login Form Wrapper */}
                <div class="container background p-20 rounded-3xl text-gray-200 bg-sky-900">
                    <h2 class="text-center text-4xl">Login Form </h2>

                    {/* Login Form */}
                    <form class="p-10">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" className="form-control w-full h-12 p-2 rounded mb-5 text-black" placeholder="Email Address" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" className="form-control w-full h-12 p-2 rounded mb-5 text-black" placeholder="Password" required />
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
                            <Link class="text-yellow-300 hover:text-yellow-500 transform duration-300 hover:scale-105" to="/signup">Create an account</Link>
                        </div>

                        <div className="form-group">
                            <input type="submit" value="Login" className="text-gray-100 text-lg cursor-pointer w-full h-12 bg-yellow-600 hover:bg-yellow-700 rounded mb-10" />
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
            </div>
        </div>
    );
};

export default Login;