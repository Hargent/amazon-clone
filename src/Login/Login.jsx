import './Login.css';

import {Link, useNavigate} from 'react-router-dom';
import React, {useState} from 'react';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";

import GoogleSignIn from './Google';
import TwitterSignIn from './Twitter'
import {auth,provider} from './firebase';
import {useStateValue} from '../Reducers/StateProvider';

//login with google
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
//login with twitter






function Login({closeLogin}) {
    const [isSignUp,setIsSignUp] = useState(true)
    const [isAgree,setIsAgree] = useState(false)
    const [isDisabled,setIsDisabled] = useState(true)
    const [{basket,user},dispatch] = useStateValue();

    const navigate = useNavigate();
    const [input,setInput] = useState({
        displayName:"",
        email:"",
        password:"",
        confirm__password:"",
    })
    const [error,setError] = useState({
        displayNameError:"",
        emailError:"",
        passwordError:"",
        confirm__passwordError:"",
    })

    function updateInfo(e) {
        const { name, value } = e.target;

        setInput((prevValue) => {
        return {
            ...prevValue,
            [name]: value,
        };
        });
        
    }
    //google login
    function googleSignUp(){
        <GoogleSignIn/>
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
    //twitter signu 
    function twitterSignIn (){
        <TwitterSignIn/>
    }
    
    const Agree =() =>{
        const decide= !isAgree?true:false
        setIsAgree(decide) 
        setIsDisabled(decide)
    }
    const signUp =() =>{    
        if ((input.displayName==="")){
                setInput({
                    password:"",
                    confirm__password:"",
                })
                setError({
                    displayNameError:"❌ username required",
                    emailError:"",
                    passwordError:"",
                    confirm__passwordError:"",
                })
                console.log("username required")
                closeLogin(true)
                setIsSignUp(false)
        }else if(input.email===""){
                setInput({
                    password:"",
                    confirm__password:"",
                })
                setError({
                    displayNameError:"",
                    emailError:"❌ email required",
                    passwordError:"",
                    confirm__passwordError:"",
                })
                console.log("email required")
                closeLogin(true)
                setIsSignUp(false)
        }else if(input.password===""){
                setInput({
                    password:"",
                    confirm__password:"",
                })
                setError({
                    displayNameError:"",
                    emailError:"",
                    passwordError:"❌ password required",
                    confirm__passwordError:"",
                })
                console.log("password required")
                closeLogin(true)
                setIsSignUp(false)
        }else if(input.confirm__password===""){
                setInput({
                    password:"",
                    confirm__password:"",
                })
                setError({
                    displayNameError:"",
                    emailError:"",
                    passwordError:"",
                    confirm__passwordError:"❌ password required",
                })
                console.log("password confirmation required")
                closeLogin(true)
                setIsSignUp(false)
        }else if(input.password !== input.confirm__password){
            setInput({
                password:"",
                confirm__password:"",
            })
            setError({
                displayNameError:"",
                emailError:"",
                passwordError:"❌ password must match",
                confirm__passwordError:"❌ password must match",
            })
            console.log("incorrect password")
            closeLogin(true)
            setIsSignUp(false)
        }else{
            try{
                createUserWithEmailAndPassword(auth,input.email, input.password)
                .then((auth) =>{
                    const userName= auth.user.auth.currentUser.displayName
                    updateProfile(auth.user.auth.currentUser, {'displayName': `${input.displayName}`})
                    .then((user)=>{
                        console.log(user.displayName)
                        console.log('Username saved')
                    }).catch((err)=>{
                            console.log(err.message,'username not saved')
                    })
                    dispatch({
                        type:'SET_USER',
                        displayName:userName
                    })
                    closeLogin(false)
                    console.log('username is', userName)
                }).catch((err) =>{
                    console.log(err.message)
                    closeLogin(true)
                    setIsSignUp(false)
                    // window.location.reload(true);
                });
            }catch(err){
                console.log(err.message)
                setIsSignUp(false)
                closeLogin(true)
                
            }
        }
    }
    const buttonStyle = ()=>{
        let style ="login__signInButton"
        if(!isSignUp){
            style ="disabled__login__signInButton"
        }
        if(isAgree){
            style ="login__signInButton"
        }
        return style
    }
    const Login = ()=>{
        if((input.email==="")&&(input.password==="")){
            console.log("email and password required")
            setError({
                displayNameError:"",
                emailError:`❌ Email required`,
                passwordError:`❌ Password required`,
                confirm__passwordError:"",
            })
        }else if(input.email===""){
            console.log("email required")
            setError({
                displayNameError:"",
                emailError:"❌ Email required",
                passwordError:"",
                confirm__passwordError:"",
            })
        }else if(input.password===""){
            setError({
                displayNameError:"",
                emailError:"",
                passwordError:"❌ password required",
                confirm__passwordError:"",
            })
            console.log("password required")
        }else{
            try{
                signInWithEmailAndPassword(auth,input.email, input.password)
                .then((auth) =>{
                    console.log(auth)
                    console.log(auth.user.auth.currentUser.displayName)
                    if(auth){
                        navigate('/')
                    }
                }).catch((error) =>{
                    console.log(error.message)
                })
            }catch(err){
                closeLogin(false)
                console.log(err.message)
                
            }}
    }
    
    const signIn =(e) =>{
        // closeLogin(false)
        e.preventDefault();
        //firebase login
        (isSignUp?
        Login():signUp()
        )}
        const isRegister = (e) =>{
            const sign = isSignUp?false:true
            setIsSignUp(sign)
            e.preventDefault();
            setInput({
                displayName:"",
                email:"",
                password:"",
                confirm__password:""
            })
            setError({
                displayNameError:"",
                emailError:"",
                passwordError:"",
                confirm__passwordError:"",
            })
        }
    return (
        <div className="login__overlay">
            <div className="login__container outer__container">
                <Link to='/'>
                <img 
                onClick={()=>{closeLogin(false)}}
                className="login__logo"
                src="https://thumbs.dreamstime.com/b/amazon-logo-amazon-logo-white-background-vector-format-avaliable-124289859.jpg"
                alt="Amazon logo" />
                </Link>
                <div className="login__container inner__container">
                    <div className="login__header">
                        <h1>{isSignUp?'Sign in':'Sign Up'}</h1>
                    </div>
                    <form>
                        {!isSignUp && <>
                        <div className="login__input__header">
                            <h5>Username</h5>
                        </div>
                        <input
                        name="displayName"
                        value={input.displayName}
                        type='text'
                        onChange={updateInfo}
                        />
                        <h5 className="login__input__error">{error.displayNameError}</h5>
                        </>}
                        <div className="login__input__header">
                            <h5>Email</h5>
                        </div>
                        <input
                        name="email"
                        value={input.email}
                        type='text'
                        onChange={updateInfo}
                        />
                        <h5 className="login__input__error">{error.emailError}</h5>
                        <div className="login__input__header">
                            <h5>Password</h5>
                        </div>
                        <input
                        name="password"
                        value={input.password}
                        type='password'
                        onChange={updateInfo}
                        />
                        <h5 className="login__input__error" >{error.passwordError}</h5>
                        {!isSignUp && <>
                        <div className="login__input__header">
                            <h5>Password</h5>
                        </div>
                        <input
                        name="confirm__password"
                        value={input.confirm__password}
                        type='password'
                        onChange={updateInfo}
                        />
                        <h5 className="login__input__error">{error.confirm__passwordError}</h5>
                        </>}
                        <button type='submit' disabled={!isSignUp && !isAgree}  onClick={signIn} className={buttonStyle()}>{isSignUp?'Sign in':'Sign up'}</button>
                    </form>
                    <div className="login__terms">
                        {!isSignUp?
                        <div className="sign__in__terms">
                            <input
                            name="agree"
                            value={isAgree.agree}
                            type="checkbox"
                            onChange={Agree} 
                            />
                            <p>
                                By signing-up, you agree to Amazon's Terms and Conditions of Use & Sale. Please see our Privacy Notice , our Cookies Notice and our Interest-Based Ads Notice.
                            </p>
                        </div>:
                        <p>Login today and enjoy a wonderful shopping experience.</p>}
                    </div>
                    <img href="src/Image/icons8-google-48 (1).png" alt=''/>
                    <button  type='submit' onClick={isRegister} className="login__registerButton">{isSignUp?'Create a new Amazon account':'Login to your Amazon account'}</button>
                    <button  onClick={googleSignUp}><img src="data:image/png;base64,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" alt=""/></button>
                    <button className='twitter__signIn__btn'  onClick={twitterSignIn}><img href="src/Image/icons8-google-48 (1).png" alt=''/>Continue with Twitter</button>
                    </div>
            </div>
            <button className={isSignUp?"login__container__cancel":"disabled__login__container__cancel"} onClick={()=>{closeLogin(false)}}>X</button>
            </div>
    )
}

export default Login
