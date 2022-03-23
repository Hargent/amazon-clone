// /* eslint-disable jsx-a11y/img-redundant-alt */
// /* eslint-disable react/jsx-no-comment-textnodes */

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './SlideShow.css'

import { Carousel } from 'react-responsive-carousel';
import React from 'react';

function SlideShow(){

    const images =["https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg","https://m.media-amazon.com/images/I/71qid7QFWJL._SX3740_.jpg","https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg",'https://m.media-amazon.com/images/I/71KChS6ZVdL._SX3000_.jpg']
        return (
            <Carousel autoPlay={true} interval={5000} infiniteLoop={true}  showStatus={false}>
                {images.map(item=>(
                    <div className="home__slide__img">
                        <img src={item} alt='' />
                    </div>
                ))}
                </Carousel>
        );
    }


export default SlideShow;
