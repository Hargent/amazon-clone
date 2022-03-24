import './Categories.css';

import React from 'react';

function Categories() {
  return (
    <div>
      <div className="home__categories__container">
                    <div className="home__new__arrival home__category__item">
                        <div className="home__category__header">
                            <h3>New Arrivals</h3>
                        </div>
                        <div className="home__category__image"></div>    
                    </div>
                    <div className="home__advert home__category__item">
                        <div className="home__category__header">
                            <h3>Ads</h3>
                        </div>
                        <div className="home__category__image">
                          <img src="C:/PROJECTS/amazon-clone/src/Image/6385958.jpg" alt="test"/>
                        </div>    
                    </div>
                    <div className="home__discounted home__category__item">
                        <div className="home__category__header">
                            <h3>Top Discounts<span>50%</span> Off</h3>
                        </div>
                        <div className="home__category__image"></div>    
                    </div>
                    <div className="home__best__prices home__category__item">
                        <div className="home__category__header">
                            <h3>Best Prices <span>10%</span>off</h3>
                        </div>
                        <div className="home__category__image"></div>    
                    </div>
                    <div className="home__male__section home__category__item">
                        <div className="home__category__header">
                            <h3>Male section</h3>
                        </div>
                        <div className="home__category__image"></div>    
                    </div>
                    <div className="home__female__section home__category__item">
                        <div className="home__category__header">
                            <h3>Female section</h3>
                        </div>
                        <div className="home__category__image"></div>    
                    </div>
                    <div className="home__recipes home__category__item">
                        <div className="home__category__header">
                            <h3>Food Recipes</h3>
                        </div>
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
