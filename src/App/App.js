/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import React,{useEffect } from 'react';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Checkout from '../Checkout/Checkout';
import Payment from '../Payment/Payment';
import Login from '../Login/Login';
import Orders from '../Orders/Orders';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import {onAuthStateChanged } from "firebase/auth";
import {auth} from '../Login/firebase';
import {useStateValue}  from '../Reducers/StateProvider';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from  '@stripe/react-stripe-js';


const promise = loadStripe('pk_test_51KaxcTDN48fJO0vuojtAupq1pu5JfhYf7KoHioAHTb5w3tq24SAMNRI9waQrwibArbR9TPXODgwsv5srXpj2Vw1300L7YSLI0u')


function App() {
  const [{},dispatch] = useStateValue();

  useEffect(() => {
    //T'is will only run once when the app component loads
    onAuthStateChanged(auth, (user) => {
      if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          dispatch({
            type:'SET_USER',
            user: user
          })
          const uid = user.uid;
          console.log(`${user}is Signed in`)
          console.log(`User id is:  ${uid}`)
          // ...
      } else {
        dispatch({
          type:'SET_USER',
          user: null
        })
          console.log("User is signed out ...")
      }
      });
  },[])
  return (
    <Router>
        <div className="app">
          <Routes>
            <Route path='/orders' element={
              <div>
                <Header />
                <Orders/>
              </div>
            }/>
            {/* Login page */}
            <Route path="/login"element={
              <Login/>
            } />
            {/* checkout page */}
            <Route path='/checkout' element={
            <div>
                <Header />
                <Checkout/>
            </div> 
            } />
            {/* payment page */}
            <Route path='/payment' element={
              <Elements stripe={promise}>
                <div>
                    <Header/>
                    <Payment/>
                </div> 
              </Elements>
            } />
            {/* Home page */}
            <Route exact path='/' element={
            <div>
              <Header />
                <Home/>
            </div> 
            } />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
