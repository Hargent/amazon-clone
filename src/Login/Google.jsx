import React, {useState} from 'react';
import './Login.css';
import {Link,useNavigate} from 'react-router-dom';

import {signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import {auth,update,provider} from './firebase';
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';
import {useStateValue} from '../Reducers/StateProvider';


 //google login
function googleSignUp(){

    auth.languageCode = 'it'

    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    });
}


export default googleSignUp;