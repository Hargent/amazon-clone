import React,{useState} from 'react';
import './Delivery_location.css';
import {useStateValue} from '../Reducers/StateProvider'



function DeliveryLocation ({closeLocation}){
    const [{basket,country},dispatch] = useStateValue();
    const [endPoint,setEndPoint] = useState('')


const submitLocation = ((e)=>{
    closeLocation(false)
    try{
        dispatch({
            type:'SET_LOCATION',
            location :{
                location:endPoint,
            }
        })
    }catch(err){
            console.log(err)
        }
})
        // .then(()=>{
        //     
        //     console.log("Done")
        // }).catch((err)=>{
        //     console.log("Error is ", err)
        // })// 
    


    return (
        <div className="delivery__location__container">
            <div className="radio__input__container">
                <input 
                type="radio" 
                name="delivery__location"
                className="radio__input"
                value= {endPoint}
                id = "nigeria"
                onChange={()=>{setEndPoint('NIGERIA')}}
                />
                <label for="nigeria" className="radio__input__label">NIGERIA</label>
            </div>
            <div className="radio__input__container">
				<input 
				type="radio" 
				name="delivery__location"
				className="radio__input"
				value= {endPoint}
				id = "valhalla"
                onChange={()=>{setEndPoint('VALHALLA')}}
				/>
				<label for="valhalla" className="radio__input__label">VALHALLA</label>
            </div>
            <div className="radio__input__container">
                <input 
                type="radio" 
                name="delivery__location"
                className="radio__input"
                value= {endPoint}
                id = "china"
                onChange={()=>{setEndPoint('CHINA')}}
                />
                <label for="china" className="radio__input__label">CHINA</label>
            </div>
            <div className="radio__input__container">
                <input 
                type="radio" 
                name="delivery__location"
                className="radio__input"
                value= {endPoint}
                id = "russia"
                onChange={()=>{setEndPoint('RUSSIA')}}
                />
                <label for="russia" className="radio__input__label">RUSSIA</label>
            </div>
            <button className="submit__location__btn" onClick={submitLocation}>OK</button>
        </div> 

    )
}


export default  DeliveryLocation;