import React from 'react';
import './Deliver.css';



function Delivery({closeDelivery}){
return(
<div className="delivery__overlay">
	<div className="delivery__container outer__container">
		<div className="delivery__container inner">
		<div className="delivery__container__title">
		    <p >Choose your location</p> 
		</div>
		<div className="delivery__container__content">
			<h5>Delivery options and delivery speeds may vary for different locations</h5>
			<h4>Manage address book</h4>
			<h5 className="delivery__container__content__switch">or enter a US zip code</h5>
			<div className="delivery__container__content__zip">
				<input  className="delivery__container__content__input" />
				<button className="delivery__container__content__button">Apply</button>
			</div>
			<h5 className="delivery__container__content__switch">or</h5>
			<span class="a-button-text a-declarative" role="radiogroup" data-action="a-dropdown-button">
				<span class="a-dropdown-prompt" id="GLUXCountryValue">Nigeria</span>
			</span>
		</div>
		</div>
		<button className="delivery__container__cancel" onClick={()=>{closeDelivery(false)}}>X</button>
		</div>
</div>
)
};



export default  Delivery;