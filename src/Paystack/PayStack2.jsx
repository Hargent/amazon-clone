import "./Pay__Stack.css";

import React,{ useState } from 'react';

import { PaystackButton } from 'react-paystack';
import {getBasketTotal} from '../Reducers/reducer';
import {useStateValue} from '../Reducers/StateProvider';

function PayStack() {
    const [{basket,user},dispatch] = useStateValue();  

    const amount = 1000000 // Remember, set in kobo!
    const publicKey = "pk_test_238b9333c36906a08b17959af2f002ed634b5b28";
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    

    const componentProps = {
        email,
        amount,
        metadata: {
        name,
        phone,
        },
        publicKey,
        text: "Pay Now",
        onSuccess: () =>
        alert("Thanks for doing business with us! Come back soon!!"),
        onClose: () => alert("Wait! You need this oil, don't go!!!!"),
    }
    return (
        <div className="pay__stack">
        <div className="pay__stack__container">
            <div className="pay__stack__container__item">
            <div className="pay__stack__container__overlay__effect"></div>
            <div className="pay__stack__item__details">
                <p className="pay__stack__item__details__title">Checkout</p>
                <p className="pay__stack__item__details__amount">NGN{amount / 100}</p>
            </div>
            </div>
            <div className="pay__stack__checkout">
                <div className="pay__stack__checkout__form">
                    <div className="pay__stack__checkout__field">
                    <label>Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder={user?.displayName}
                        onChange={(e) => setName(e.target.value)}
                    />
                    </div>
                    <div className="pay__stack__checkout__field">
                    <label>Email</label>
                    <input
                        type="text"
                        id="email"
                        placeholder={user?.email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    </div>
                    <div className="pay__stack__checkout__field">
                    <label>Phone</label>
                    <input
                        type="text"
                        id="phone"
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    </div>
                    <PaystackButton className="paystack__button" {...componentProps} />
                </div>
            </div>
            </div>
        </div>
    )
}

export default PayStack;
