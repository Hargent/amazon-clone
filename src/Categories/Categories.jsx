import './Categories.css';

import React from 'react';
const headings = [
    {
        heading:'Shop by Category',
        image:['https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/computer120x._SY85_CB468850970_.jpg',
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/August/DashboardCard/PS4_120X._SY85_CB438749318_.jpg',
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Baby120X._SY85_CB468850882_.jpg',
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Toys120X._SY85_CB468851693_.jpg'],
        tag:'Shop now'
    },
    {
        heading:'Health & Personal Care',
        image:'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg'
    },
    {
        heading:'Beauty picks',
        image:'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg',
    },
    {
        heading:'Get fit at home',
        image:'',
    },
    {
        heading:'Computers & Accessories',
        image:'',
    },
    {
        heading:'Deal of the Day',
        image:'',
    },
    {
        heading:'Deals & Promotions',
        image:'',
    },
    {
        heading:'Electronics',
        image:'',
    },
    {
        heading:'Related to items you\'ve viewed',
        image:'',
    },
    {
        heading:'More items to consider',
        image:'',
    },
    {
        heading:'Best Sellers in Kitchen & Dining',
        image:'',
    },
    {
        heading:'Comfy styles for her',
        image:'',
    },
    {
        heading:'Best Sellers in Beauty & Personal Care',
        image:'',
    },
    {
        heading:'For your Fitness Needs',
        image:'',
    },
    {
        heading:'Inspired by your shopping trends',
        image:'',
    },
    {
        heading:'Best Sellers in Computers & Accessories',
        image:'',
    },
    {
        heading:'Create with strip lights',
        image:'',
    },
    {
        heading:'Shop activity trackers and smartwatches',
        image:'',
    },
    {
        heading:'Kindle E readers',
        image:'',
    },
    {
        heading:'More items to consider',
        image:'',
    },
    {
        heading:'Related to items you\'ve viewed',
        image:'',
    },
    {
        heading:'Explore everyday essentials',
        image:'',
    },
    {
        heading:'Best Sellers in Cell Phones & Accessories',
        image:'',
    },
    {
        heading:'Best Sellers in Toys & Games',
        image:'',
    },
    {
        heading:'Best Sellers in Books',
        image:'',
    },
    {
        heading:'Shop Pet supplies',
        image:'',
    },
    {
        heading:'More everyday essentials to explore',
        image:'',
    },
    {
        heading: 'Top Smart Home Products For You',
        image:'',
    },
    {
        heading: 'Your Browsing History',
        image:'',
    }
]


function Categories() {
  return (
    <div>
      <div className="home__categories__container">
                    <div className="row1__a home__category__item">
                        <div className="home__category__header">
                            <h3>Deal of the day</h3>
                            <img src="https://m.media-amazon.com/images/I/51yeHwJttJL._AC_SY230_.jpg" alt="DOD"/>
                            <a>See all deals</a>
                        </div>
                    </div>
                    <div className="row1__b home__category__item">
                        <div className="home__category__header">
                            <h3>Home security made easy with Ring</h3>
                            <div className="row1__b__container">
                                <div className="row1__b__i">
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZDU3MTYxZjAt/ZDU3MTYxZjAt-MDhkNGRlMmEt-w186._SY116_CB625165837_.jpg" alt="ale"/>
                                <h6>Ring Video Doorbell 3</h6>
                                </div>
                                <div className="row1__b__ii">
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZDU3MTYxZjAt/ZDU3MTYxZjAt-OGNlNWQ4NTQt-w186._SY116_CB645954746_.jpg" alt="/"/>
                                <h6>Ring Spotlight Camera</h6>
                                </div>
                                <div className="row1__b__iii">
                                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZDU3MTYxZjAt/ZDU3MTYxZjAt-ZDlmMmNlMmEt-w186._SY116_CB645954746_.jpg" alt=""/>
                                <h6>Ring Alarm 2.0</h6>
                                </div>
                                <div className="row1__b__iv">
                                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZDU3MTYxZjAt/ZDU3MTYxZjAt-ZWY2MzE2NWIt-w186._SY116_CB645954746_.jpg" alt=""/>
                                <h6>Ring Floodlight Camera</h6>
                                </div>
                            </div>
                            <a>More Alexa-enabled devices</a>
                        </div>
                    </div>
                    <div className="row1__c home__category__item">
                        <div className="home__category__header">
                            <h3>Do more with Alexa</h3>
                            <div className="row1__c__container">
                                <div className="row1__c__i">
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Alexa_Voice_Service_AVS_/XCM_CUTTLE_1417348_2250222_US_CUTTLE_186x116_1X_en_US._SY116_CB626537642_.jpg" alt="ale"/>
                                <h6>Speakers</h6>
                                </div>
                                <div className="row1__c__ii">
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZDU3MTYxZjAt/ZDU3MTYxZjAt-OGNlNWQ4NTQt-w186._SY116_CB645954746_.jpg" alt="/"/>
                                <h6>Soundbars</h6>
                                </div>
                                <div className="row1__c__iii">
                                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZDU3MTYxZjAt/ZDU3MTYxZjAt-ZDlmMmNlMmEt-w186._SY116_CB645954746_.jpg" alt=""/>
                                <h6>Headphones</h6>
                                </div>
                                <div className="row1__c__iv">
                                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZDU3MTYxZjAt/ZDU3MTYxZjAt-ZWY2MzE2NWIt-w186._SY116_CB645954746_.jpg" alt=""/>
                                <h6>Smart TVs</h6>
                                </div>
                            </div>
                            <a>Shop all Alexa Built-in devices</a>
                        </div>
                        <div className="home__category__image"></div>    
                    </div>
                    <div className="home__best__prices home__category__item">
                        <div className="home__category__header">
                            <h3>Health & Personal Care</h3>
                            <a>see all deals</a>
                        </div>
                        <div className="home__category__image"></div>    
                    </div>
                    <div className="home__male__section home__category__item">
                        <div className="home__category__header">
                            <h3>Male section</h3>
                            <a>see all deals</a>
                        </div>
                        <div className="home__category__image"></div>    
                    </div>
                    <div className="home__female__section home__category__item">
                        <div className="home__category__header">
                            <h3>Female section</h3>
                            <a>see all deals</a>
                        </div>
                        <div className="home__category__image"></div>    
                    </div>
                    <div className="home__recipes home__category__item">
                        <div className="home__category__header">
                            <h3>Food Recipes</h3>
                            <a>see all deals</a>
                        </div>
                        <a>see all deals</a>
                        <div className="home__category__image"></div>    
                    </div>
                    <div className="home__electronics home__category__item">
                        <div className="home__category__header">
                            <h3>Electronics & Technology</h3>
                        </div>
                        <div className="home__category__image"></div>    
                    </div>
                </div>  
    </div>
  )
}

export default Categories
