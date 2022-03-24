import './Login.css';

import {TwitterAuthProvider, signInWithPopup} from "firebase/auth";

import {auth} from './firebase';

function TwitterLogin(){
    const provider = new TwitterAuthProvider();
    auth.languageCode = 'it';
    provider.setCustomParameters({
        'lang': 'es'
      });
     signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
        // You can use these server side with your app's credentials to access the Twitter API.
        const credential = TwitterAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const secret = credential.secret;
    
        // The signed-in user info.
        const user = result.user;
        // ...
        console.log(`Token : ${token},Secret:${secret}, User : ${user} `)
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = TwitterAuthProvider.credentialFromError(error);
        // ...
        console.log(`Error : ${errorCode} >>> ${errorMessage} ; Email : ${email}; Credential : ${credential}`)
      });
}

export default TwitterLogin;