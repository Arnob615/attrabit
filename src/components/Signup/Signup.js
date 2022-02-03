import { faFacebook, faGithub, faGoogle, faYahoo } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, OAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import initializeAuthentication from '../../firebase/firebase.initialize';

initializeAuthentication();

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const yahooProvider = new OAuthProvider('yahoo.com');

const Signup = () => {
    const [googleUser, setGoogleUser] = useState({});
    const [githubUser, setGithubUser] = useState({});
    const [facebookUser, setFacebookUser] = useState({});
    const [yahooUser, setYahooUser] = useState({});

    // Login With Google
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const { displayName, email, photoURL } = result.user;
                const loginUser = {
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setGoogleUser(loginUser);
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    // Login With Github
    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const { displayName, email } = result.user;
                const githubUser = {
                    name: displayName,
                    email: email,
                }
                setGithubUser(githubUser);
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    // Login With Facebook
    const handleFacebookSignIn = () => {
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                const { displayName, email} = result.user;
                const facebookUser = {
                    name: displayName,
                    email: email,
                }
                setFacebookUser(facebookUser);
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    // Login With Facebook
    const handleYahooSignIn = () => {
        signInWithPopup(auth, yahooProvider)
            .then(result => {
                const { displayName, yahoo} = result.user;
                const yahooUser = {
                    name: displayName,
                    yahoo: yahoo,
                }
                setYahooUser(yahooUser);
            })
            .catch(error => {
                console.log(error.message)
            })
    }

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

                        {/* Submit button */}
                        <div className="form-group">
                            <input type="submit" value="Sign Up" className="text-gray-100 text-lg cursor-pointer w-full h-12 bg-yellow-600 hover:bg-yellow-700 rounded h-10 mb-10" />
                        </div>

                        {/* Others login system */}
                        <div class="mb-10">
                            <h3 class="text-center text-lg"> or use one of this options </h3>
                        </div>

                        {/* Google, Github and facebook Icons */}
                        <div class="flex gap-10 justify-center">
                            <FontAwesomeIcon onClick={handleGoogleSignIn} class="w-7 text-center text-sky-600 hover:text-sky-400 cursor-pointer transform duration-300" icon={faGoogle}></FontAwesomeIcon>
                            <FontAwesomeIcon onClick={handleGithubSignIn} class="w-8 text-center text-black hover:text-gray-800 cursor-pointer transform duration-300" icon={faGithub}></FontAwesomeIcon>
                            <FontAwesomeIcon onClick={handleFacebookSignIn} class="w-8 text-center transform text-cyan-700 hover:text-cyan-600 cursor-pointer duration-300" icon={faFacebook}></FontAwesomeIcon>
                            <FontAwesomeIcon onClick={handleYahooSignIn} class="w-9 text-center transform text-blue-600 hover:text-blue-400 cursor-pointer duration-300" icon={faYahoo}></FontAwesomeIcon>
                        </div>

                        {/* login User details display  */}
                        {
                            googleUser.email && <div>
                                <h2>Welcome to {googleUser.name} </h2>
                                <p>You are sign in with {googleUser.email} </p>
                                <img src={googleUser.photo} alt="" />
                            </div>
                        }
                        {/* github user details display */}
                        {
                            githubUser.email && <div>
                                <h2>Welcome to {githubUser.name} </h2>
                                <p>You are sign in with {githubUser.email} </p>
                            </div>
                        }
                        {/* Facebook user details display */}
                        {
                            facebookUser.email && <div>
                                <h2>Welcome to {facebookUser.name} </h2>
                                <p>You are sign in with {facebookUser.email} </p>
                            </div>
                        }
                        {/* Yahoo user details display */}
                        {
                            yahooUser.yahoo && <div>
                                <h2>Welcome to {yahooUser.name} </h2>
                                <p>You are sign in with {yahooUser.yahoo} </p>
                            </div>
                        }
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Signup;