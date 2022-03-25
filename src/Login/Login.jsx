import './Login.css';

import {Link, useNavigate} from 'react-router-dom';
import React, {useState,useEffect,useRef} from 'react';
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
    const modalRef = useRef();

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

        useEffect(()=>{
            const handlerOne = (event)=>{
                if(!modalRef.current.contains(event.target)){
                    closeLogin(false)
                }
            };
            document.addEventListener("mousedown",handlerOne)
            return ()=>{
                document.removeEventListener("mousedown",handlerOne)
            }
        })

    return (
        <div className="login__overlay">
            <div className="login__container outer__container" ref={modalRef}>
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
                    
                    <button  type='submit' onClick={isRegister} className="login__registerButton">{isSignUp?'Create a new Amazon account':'Login to your Amazon account'}</button>
                    <div className="other__login__gateways">
                        <img onClick={googleSignUp} className="google__sign__in__btn" src="data:image/png;base64,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" alt=""/>
                        <img onClick={twitterSignIn} className='twitter__signIn__btn' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAFjUlEQVRoge2ZaWxVVRDHf3Pvfa+vfaVsQtkUhAQqEE20+MGIYFUSSSQiWhEBozEGKzEukZiooYmJexCMK1+MQaE2sgSjEdGqiQkurQofKEU0tEGgSKXQvXcZPxRZ3r3v3fvaB3yQ/8c5c2b+c+6ZuWfOgYu4iP83JCdWKtWITe0qdfHKRKVU0ckC44DkSY0OhQOCNKhonYlRY+/Or6VSvIG6HlgAGztGW7b3iIosBS7NcnaTqK5zYsZbLEge6i+F/gXwUetQy7IqFR4CEv11fhLdAmuduL2S+UNbs52cdQBmVdsdiLwDjMx2bgiaUa1wFw7alM2k6AFUq2lpxyqFR7OmlgVEWeMYyScpFzeSfiSr72vCLGhfDzJ/QOwiQze7nYWLuF+6wzTDA6hW09TOKtA7c8ItMnSrO7JwATeKk0nLCDNjaceq808eQOZZRzpeDdXKNHgyYTfmjlTWUMRY4JYXbE6nkD6A6n8GmxqvB0afC2ZZoNl1nCu4d8ixoMG0W8jUvOe58OQBii3Lqkw3GPwFqttHmcqfQH4uGFgCj06O8cBEi0lJg1Zb+f5vlxfqbX495hE3YO5ok5Iig5fq7SAT3a4nk7gnedBnO9Chp8tVJC35FSUxvv3b5aeW8KOMIVB1XYLbx5qnZCPyhPnjLG4dbVFzxGXmCIN9bcqc79JWzYQlXoUDz/rs+1Qr1VCRJZlI3Xe5xaczE0wbHFrEuG+CdRb5s1iZfSv/Y4vH2/tsFo8PXE8AFFlMpfoc+gSxqV2lwGWZSI3LNxgeF7bNSnD9iGBy/+HBibGM4wA3F5s8Ny3O5gMZSr4wPjal8+pUsS8AV72bwhzuPtG3dUYlhK9mJ3hiSixtOZse4SsBlH3TxYEuzajjGlqWKvNZF+SaMGer955ONEvglavibJuV4MohfrLJ9LviFDyF/R2ZyQOISGmqzOdR0SlhhqqbHDY0nf25y4pN6ubk8+WsBA9OtLiiyIhEHuBobzh5AFUtSZX5XAiMCTO0fXaC9Y0Ol8SFW0adzgGhL5Cy4sx5kYrmkK1zhn3ffylojQrDDMUMWDsjL5LTKNh1PHJnOShVEC3DUvBivU20NYuGbYcjHf0DERRAe9ikLw65LNrRwwl74GF0urDtUOQA2lIFAUmM73cdhC1/Ocys6Wb7AFYPYO0fNi1Rkxh8zX9AEksD6PQwY++V5rF0QsQykwbtjvLansCzTyBEZE+qLKiM1kUxtryuh7V/OHgD2EXLans53B3dgKrWpsp8AZhifB3FWKcLFXU9zNjexWsNNjtbPY5nkRNv/m5T1ZSxW/TB9KQmVeYLwN6dXws0RTW6s9Xj6Z29LPmhhx1Ho5XDl/fYPP5rb1QXfVAa7YaCX1LF/k1cKZ5Uta1TkWfS2co3YXhcKCkymDHMYN5YixnDwityS6+y4rdePtif3coDiOi6oKvIrBuaWSNNVk6LcUPIKfRMdLrw7j6bF3bbtPav9KZtaNL2xNbH7WsyXWJNSAq3jbG4drjB1CKDMflCUUwQ4LitNHYou4571DS7fHbQpc3pf7aLssZZWPhY4FjaWR+2FJmxvD1c+L642Y3bJenuTdNv3MXDT6C6HHJ6asgWCrIs06VvxsxzFw7aJMobuecVDQKr3buTWzLphJYOx0g+CfJJ7mhFhW51JPlUmFa0y93PNc9sa99w3i53RTa5hQWLmCs9YarRjtNzpceVwrsEVnNuc0IFXncpKI9CHvrzwFHdOR/13gGKs6aXGc2I8XCme9AgZN3QuOUFm924XSLwBhB6fx8B3aKsceN2SbbkIRePfI5XochSQu6SfFAaRXSdYxlvn/9HvlRUqhEr6bzGFS0TpFRFJ4syjtP9dbsKB0Rlr6I/m57U2A0Fv+TimfUiLuL/jn8BGQPqGfFR4OMAAAAASUVORK5CYII=" alt="Twitter"/>
                    </div>
                </div>
            </div>
            </div>
    )
}

export default Login
