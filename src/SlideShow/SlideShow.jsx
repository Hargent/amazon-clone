// /* eslint-disable jsx-a11y/img-redundant-alt */
// /* eslint-disable react/jsx-no-comment-textnodes */



import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './SlideShow.css'
import { Carousel } from 'react-responsive-carousel';

function SlideShow(){
        return (
            <Carousel autoPlay={true} interval={5000} infiniteLoop={true}  showStatus={false}>
                <div className="home__img">
                    <img src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg" />
                </div>
                <div className="home__img">
                    <img src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg" />
                </div>
                <div className="home__img">
                    <img src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3740_.jpg" />
                </div>
                <div className="home__img">
                    <img src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" />
                </div>
            </Carousel>
        );
    }


export default SlideShow;
