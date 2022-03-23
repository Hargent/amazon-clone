import './Top__Footer.css';

import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import React from 'react';

function Top__Footer() {
    return (
        <div className="Top__Footer">
            <div className="Top__Footer__page__scroll__container">
                <a className="Top__Footer__page__scroll" href="#home"><span><ArrowDropUpIcon/></span><p>Back to Top</p></a>
            </div>
            <div className="Top__Footer__content">
                <p>Amazon.com</p>
                <p>Your Orders</p>
                <p>Your Lists</p>
                <p>Gift Cards & Registry</p>
                <p>Find a Gift</p>
                <p>Your Account</p>
                <p>Browsing History</p>
                <p>Sell products on Amazon</p>
                <p>Returns</p>
                <p>Customer Service</p>
            </div>
        </div>
    )
}

export default Top__Footer
