'use client';

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSlider = () => {
  // Slider settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <button className="hero-slider__button hero-slider__button--prev"><i className="fa fa-2x fa-chevron-left" aria-hidden="true"></i></button>,
    nextArrow: <button className="hero-slider__button hero-slider__button--next"><i className="fa fa-2x fa-chevron-right" aria-hidden="true"></i></button>
  };

  return (
    <section id="hero-slider">
      <div className="hero-slider__wrapper">
        <Slider {...settings}>
          <div>
            <div className="hero-slider__slide" style={{ backgroundImage: `url('/assets/img/slider/slider-1.jpg')` }}>
              <h1>BEST SALE</h1>
              <h4><span className="left-wing"></span>THE BLACK PHANTOM<span className="right-wing"></span></h4>
            </div>
          </div>
          <div>
            <div className="hero-slider__slide" style={{ backgroundImage: `url('/assets/img/slider/slider-2.jpg')` }}>
              <h1>BEST SALE</h1>
              <h4><span className="left-wing"></span>THE BLACK PHANTOM<span className="right-wing"></span></h4>
            </div>
          </div>
          <div>
            <div className="hero-slider__slide" style={{ backgroundImage: `url('/assets/img/slider/slider-3.jpg')` }}>
              <h1>BEST SALE</h1>
              <h4><span className="left-wing"></span>THE BLACK PHANTOM<span className="right-wing"></span></h4>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default HeroSlider;
