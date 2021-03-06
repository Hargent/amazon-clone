import React, {useState,useEffect, useRef}from 'react';
import './Deliver.css';
import {useStateValue} from '../Reducers/StateProvider';
import DeliveryCountry from './ChooseCountry';
import DoneButton from './DoneButton';



function Delivery({closeDelivery}){

	const [Location, setLocation] = useState(false);
	const [{country},dispatch] = useStateValue();
	const modalRef = useRef();

	const isLocation = ()=> {
		if (!Location){
			setLocation(true)
		}else{
			setLocation(false)
		}
	}
	let place;
	let name = country?.location
	if (name === undefined){
		place = 'Country'
	}else{
		place = name
	}
	useEffect(()=>{
		const handlerOne = (event)=>{
			if(!modalRef.current.contains(event.target)){
				closeDelivery(false)
			}
		};
		document.addEventListener("mousedown",handlerOne)
		return ()=>{
			document.removeEventListener("mousedown",handlerOne)
		}
	})


return(
<div className="delivery__overlay" >
	<div className="delivery__container outer__container" ref={modalRef}>
		<div className="delivery__container inner">
		<div className="delivery__container__title">
			<p >Choose your location</p> 
		</div>
		<div className="delivery__container__content">
			<h5 className="delivery__container__content__header1">Delivery options and delivery speeds may vary for different locations.</h5>
			<h4 className="delivery__container__content__header2">Manage address book</h4>
			<div className="delivery__container__content__divider__container">
				<h5 className="delivery__container__content__divider">or enter a US zip code</h5>
			</div>
			<div className="delivery__container__content__zip__content">
				<input  className="delivery__container__zip__content__input" />
				<button className="delivery__container__zip__content__button">Apply</button>
			</div>
			<div className="delivery__container__content__divider__container">
				<h5 className="delivery__container__content__divider__two">or</h5>
			</div>
			<div >
				<DeliveryCountry/>
			<div className="delivery__location__btn__container">
				<button className="delivery__location__btn" onClick={()=>{closeDelivery(false)}}><DoneButton /></button>
            </div>
			</div>
		</div>
		</div>
	</div>
</div>
)
};



export default  Delivery;