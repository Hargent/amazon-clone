import React from 'react';
import logo from './logo.svg';
import { usePaystackPayment, PaystackButton, PaystackConsumer } from './dist/index.es';
import './Paystack';
import {useStateValue} from '../Reducers/StateProvider';
import {getBasketTotal} from '../Reducers/reducer';


const LIVE_API_KEY = 'pk_live_280e3a33006ecfa0876dffb3d027c41878a202a1'
const LIVE_API_SECRET = 'sk_live_2dc42f1d80c549102b7f437f4f36442972921c18'
const TEST_API_KEY = 'pk_test_238b9333c36906a08b17959af2f002ed634b5b28'

const [{basket,user},dispatch] = useStateValue();

const config = {
    reference: (new Date()).getTime().toString(),
    email: user?.email,
    amount: getBasketTotal(basket),
    publicKey: 'pk_live_9555ee2309d44add3c9dc417fe56d6c9f72f0082',
    firstname: 'cool',
    lastname: 'story',
    // split: { //if you want to use transaction split
    //     "type": "percentage",
    //     "bearer_type": "all",
    //     "subaccounts": [
    //         {
    //             "subaccount": "ACCT_mtl3xzwjfhcldkw",
    //             "share": 30
    //         },
    //         {
    //             "subaccount": "ACCT_y19ht107y44o294",
    //             "share": 20
    //         }
     //   ]
   // }
};

const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
};

const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
}

const PaystackHookExample = () => {
    const initializePayment = usePaystackPayment(config);
    return (
        <div>
            <button onClick={() => {
                initializePayment(onSuccess, onClose)
            }}>Paystack Hooks Implementation</button>
        </div>
    );
};

function Paystack() {
    const componentProps = {
        ...config,
        text: 'Paystack Button Implementation',
        onSuccess,
        onClose
    };

    return (
        <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
            </a>
        </header>
            <PaystackHookExample />
            <PaystackButton {...componentProps} />
            <PaystackConsumer {...componentProps} >
                {({initializePayment}) => <button onClick={() => initializePayment()}>Paystack Consumer Implementation</button>}
            </PaystackConsumer>
        </div>
    );
}

export default Paystack;
