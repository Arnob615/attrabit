import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FacebookAuthProvider, getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import firebaseConfig from '../../firebase/firebase.config';
import initializeAuthentication from '../../firebase/firebase.initialize';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

initializeAuthentication();

const OthersLogin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useState({
        isLoggedIn: false,
        result: ""
    });

    const {isLoggedIn, result} = user;
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const handleOthersLogin = (provider) => {
        signInWithPopup(auth, provider)
        .then((result) => {
            const newUser = result.user;
            const authUser = {...loggedInUser};
            authUser.name = newUser.displayName;
            authUser.email = newUser.email;
            setLoggedInUser(authUser);
            
            const updateUser = {...user};
            updateUser.isLoggedIn = true;
            updateUser.result = "Successfully Log In ✔✔";
            setUser(updateUser);

        }).catch((error) => {
            const errorMessage = error.message;
            const updateUser = {...user};
            updateUser.isLoggedIn = false;
            updateUser.result = errorMessage;
            setUser(updateUser);
        });
    }

    return (
        <div>
            <div>
                {
                    isLoggedIn ? <p className="alert alert-success text-center text-green-600">{result}</p> 
                    :  <p className="alert-warning text-center text-red-600">{result}</p>
                }
                <div class="flex gap-10 justify-center">
                    <FontAwesomeIcon onClick={() => handleOthersLogin(googleProvider)} class="w-7 text-center text-sky-600 hover:text-sky-400 cursor-pointer transform duration-300" icon={faGoogle}></FontAwesomeIcon>
                    <FontAwesomeIcon onClick={() => handleOthersLogin(facebookProvider)} class="w-8 text-center transform text-cyan-600 hover:text-cyan-500 cursor-pointer duration-300" icon={faFacebook}></FontAwesomeIcon>
                </div>
                
            </div>
        </div>
    );
};

export default OthersLogin;