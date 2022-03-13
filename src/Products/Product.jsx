import React from 'react';
import './Product.css';
import StarRateIcon from '@mui/icons-material/StarRate';
import {useStateValue} from '../Reducers/StateProvider'

function Product({id, title,image,price,rating}) {

    const [{basket},dispatch] = useStateValue();
    const addToBasket = () =>{
        //dispatch the item into the data layer
        dispatch({
            type:'ADD_TO_BASKET',
            item :{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            },
        });
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
            
            <div className="product__rating">
                    {Array(rating).fill().map((_,i) => (
                    <p><StarRateIcon/></p>
                    ))}
            </div>
            </div>
            <img src={image} alt="The-Lean-Startup"/>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product;