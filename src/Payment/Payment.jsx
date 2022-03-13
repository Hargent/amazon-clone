
import React,{useState,useEffect} from 'react';
import './Payment.css';
import {useStateValue} from '../Reducers/StateProvider';
import CheckoutProduct from '../Checkout_Products/CheckoutProduct';
import{Link,useNavigate} from 'react-router-dom';
import {CardElement,useStripe,useElements} from '@stripe/react-stripe-js';
import {getBasketTotal} from '../Reducers/reducer';
import CurrencyFormat from 'react-currency-format';
import axios from '../Axios/Axios';
import {db} from '../Login/firebase';
import {collection,doc, setDoc,addDoc} from 'firebase/firestore';





function Payment() {
    const [{basket,user},dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState('disabled');
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const navigate = useNavigate();


    useEffect (()=>{

        const getClientSecret = async () => {   
            const response = await axios({
                method:'post',
                //Stripe expects  currency subunits
                url:`/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();

    },[basket])
    console.log('The secret is >>>',clientSecret)

    const handleSubmit = async (event) => {
        // do all fancy stripe stuff
        event.preventDefault();
        setProcessing(true);

        const  payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            //payment intent = payment confirmation
            const data = {
                    
                }
            // console.log(data.amount)
            const orderRef = doc(db,"orders",user?.uid)
            setDoc(orderRef,{
                basket:basket,
                amount:paymentIntent.amount,
                created:paymentIntent.created,
            },{merge:true}
            ).then(() => {
                console.log("Document successfully written!");
            });

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type:'EMPTY_BASKET'
            })

            navigate("/orders", { replace: true });
        }).catch((err) => {
            setError(err);
        })
    }
    const handleChange = event => {
        //listens for changes in card element and displays any errors
        //as thr customer inputs their card details
        setDisabled(event.empty);
        setError(event.error?event.error.message:'');
    }

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (<Link to="/checkout"><a>{basket?.length} items</a></Link>)
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123, React lane</p>
                        <p>Chemical Engineering street</p>
                        <p>OAU, ife central, Osun State, Nigeria.</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}  
                            />
                            ))}
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className="payment__priceContainer">
                            <CurrencyFormat
                                renderText={(value) => (
                                    <>
                                        <h3>
                                            Order Total:{value}
                                        </h3>
                                    </>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                            />
                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing?<p>Processing</p>:"PAY NOW"}</span>
                            </button>
                            </div>
                            {/* error catching and logginng */}
                            {error&&<div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;
