import React, {useState} from 'react';
import './Login.css';
import {Link,useNavigate} from 'react-router-dom';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {auth,update,provider} from './firebase';
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';
import {updateProfile } from "firebase/auth";
import {useStateValue} from '../Reducers/StateProvider';

//login with google






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
                    <button  type='submit' onClick={isRegister} className="login__registerButton">{isSignUp?'Create a new Amazon account':'Login to your Amazon account'}</button>
                </div>
            </div>
            <button className={isSignUp?"login__container__cancel":"disabled__login__container__cancel"} onClick={()=>{closeLogin(false)}}>X</button>
            <button className='google__signIn__btn'  onClick={googleSignUp}><img href='https://img.icons8.com/color/344/google-logo.png'/></button>
        </div>
    )
}

export default Login
