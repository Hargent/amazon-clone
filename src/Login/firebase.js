import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';
import { getAuth,updateProfile } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";





const firebaseConfig = {
    apiKey: "AIzaSyCcAhTdRlTbbbXZ3JpWLXkSh9zEOhr-4Ds",
    authDomain: "clone-2bf0a.firebaseapp.com",
    projectId: "clone-2bf0a",
    storageBucket: "clone-2bf0a.appspot.com",
    messagingSenderId: "582926062597",
    appId: "1:582926062597:web:72657dd71fa2dea377f86c",
    measurementId: "G-3MXWHDXYDE"
  };
  


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


const provider = new GoogleAuthProvider();

const auth = getAuth();



const update = updateProfile ();
const analytics = getAnalytics(app);



export{ db, auth,update,provider, analytics};



