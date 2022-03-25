import "./Pay__Stack.css";

import React,{ useState,useEffect,useRef } from 'react';

import { PaystackButton } from 'react-paystack';
import {getBasketTotal} from '../Reducers/reducer';
import {useStateValue} from '../Reducers/StateProvider';

function PayStack({value, closePayStack}) {
    const [{basket,user},dispatch] = useStateValue();  
    const priceValue = value
    const amount = priceValue * 100 // Remember, set in kobo!
    const publicKey = "pk_test_238b9333c36906a08b17959af2f002ed634b5b28";
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const modalRef = useRef();

    const placeHolderName = user?.displayName;
    const placeHolderEmail= user?.email

    

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
        onClose: () => alert("Wait! You need complete the transaction for your goods to be delivered."),
    }

    useEffect(()=>{
		const handlerOne = (event)=>{
			if(!modalRef.current.contains(event.target)){
				closePayStack(false)
			}
		};
		document.addEventListener("mousedown",handlerOne)
		return ()=>{
			document.removeEventListener("mousedown",handlerOne)
		}
	})




    return (
        <div className="pay__stack__overlay__effect">
            <div className="pay__stack__container" ref={modalRef}>
                <div className="pay__stack__container__item">
                    <div className="pay__stack__container__checkout"></div>
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
                            placeholder={placeHolderName}
                            onChange={(e) => setName(e.target.value)}
                        />
                        </div>
                        <div className="pay__stack__checkout__field">
                        <label>Email</label>
                        <input
                            type="text"
                            id="email"
                            placeholder={placeHolderEmail}
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
