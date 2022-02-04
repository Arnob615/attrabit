import firebase from 'firebase/compat/app';
import React from 'react';
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
            <div class="max-w-screen-xl mx-auto">

                {/* Signup Form Wrapper */}
                <div class="container background p-20 rounded-3xl text-gray-200 bg-sky-900">
                    <h2 class="text-center text-4xl">Create an account</h2>

                    {/* Signup Form */}
                    <form class="p-10">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="name" name="name" className="form-control w-full lg:w-full h-12 p-2 rounded mb-5 text-black" placeholder="Full Name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" className="form-control w-full lg:w-full h-12 p-2 rounded mb-5 text-black" placeholder="Email Address" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" className="form-control w-full h-12 lg:w-full p-2 rounded mb-5 text-black" placeholder="Password" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" name="confirmPassword" className="form-control w-full h-12 lg:w-full p-2 rounded mb-5 text-black" placeholder="Confirm Password" required />
                        </div>

                        {/* Login Form Link */}
                        <div class="flex justify-around mb-5 text-lg cursor-pointer">
                            <p>Already have an account?</p>
                            <Link class="text-yellow-300 hover:text-yellow-500 transform duration-300 hover:scale-105" to="/login">Login</Link>
                        </div>

                        <div className="form-group">
                            <input type="submit" value="Sign Up" className="text-gray-100 text-lg cursor-pointer w-full h-12 bg-yellow-600 hover:bg-yellow-700 rounded mb-10" />
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

export default Signup;