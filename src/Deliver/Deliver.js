import React, {useState,useEffect}from 'react';
import './Deliver.css';
import DeliveryLocation from './Delivery_location';
import {useStateValue} from '../Reducers/StateProvider';



function Delivery({closeDelivery}){

	const [Location, setLocation] = useState(false);
	const [{country},dispatch] = useStateValue();

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


return(
<div className="delivery__overlay">
	<div className="delivery__container outer__container">
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
			<button className="delivery__location__btn" onClick={isLocation}>
                <div>
                    <span>{place}</span>
                </div>
            </button>
            {Location && <DeliveryLocation closeLocation={setLocation} />}
				
			</div>
		</div>
		</div>
		<button className="delivery__container__cancel" onClick={()=>{closeDelivery(false)}}>X</button>
		</div>
</div>
)
};



export default  Delivery;