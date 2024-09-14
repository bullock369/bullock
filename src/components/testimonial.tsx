'use client';

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Testimonial = () => {
  // JSON-like data structure
  const testimonialData = {
    "name": "Testimonial",
    "props": {
      "deviceType": "mobile"
    },
    "responsive": {
      "desktop": {
        "breakpoint": { "max": 3000, "min": 1024 },
        "items": 3
      },
      "tablet": {
        "breakpoint": { "max": 1024, "min": 464 },
        "items": 2
      },
      "mobile": {
        "breakpoint": { "max": 464, "min": 0 },
        "items": 1
      }
    },
    "carouselProps": {
      "swipeable": true,
      "draggable": true,
      "showDots": true,
      "ssr": true,
      "infinite": true,
      "autoPlay": true,
      "autoPlaySpeed": 3000,
      "keyBoardControl": true,
      "customTransition": "all .5",
      "transitionDuration": 100,
      "containerClass": "carousel-container",
      "removeArrowOnDeviceType": ["tablet", "mobile"],
      "deviceType": "mobile",
      "dotListClass": "owl-dots",
      "itemClass": "carousel-item-padding-40-px"
    },
    "items": [
      {
        "imageSrc": "assets/img/testimonial/03.jpg",
        "author": "Reid E Butt",
        "role": "Clients",
        "quote": "There are many variations of passages available but the majority have suffered alteration in some form by injected popularity belief believable.",
        "rate": 5
      },
      {
        "imageSrc": "assets/img/testimonial/03.jpg",
        "author": "Parker Jimenez",
        "role": "Clients",
        "quote": "There are many variations of passages available but the majority have suffered alteration in some form by injected popularity belief believable.",
        "rate": 4
      },
      {
        "imageSrc": "assets/img/testimonial/03.jpg",
        "author": "Reid E Butt",
        "role": "Clients",
        "quote": "There are many variations of passages available but the majority have suffered alteration in some form by injected popularity belief believable.",
        "rate": 5
      },
      {
        "imageSrc": "assets/img/testimonial/03.jpg",
        "author": "Parker Jimenez",
        "role": "Clients",
        "quote": "There are many variations of passages available but the majority have suffered alteration in some form by injected popularity belief believable.",
        "rate": 5
      }
    ]
  };

  // Destructure data from testimonialData
  const { props, responsive, carouselProps, items } = testimonialData;

  return (
    <div className="testimonial-area py-120 ">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto wow fadeInDown" data-wow-duration="1s" data-wow-delay=".25s" style={{ visibility: "visible", animationDuration: "1s", animationDelay: "0.25s", animationName: "fadeInDown" }}>
            <div className="site-heading text-center">
              <span className="site-title-tagline">
                <i className="fas fa-bring-forward" /> Testimonials
              </span>
              <h2 className="site-title text-white">
                What Client <span>Say&apos;s</span>
              </h2>
              <div className="heading-divider" />
            </div>
          </div>
        </div>
      </div>
      <Carousel responsive={responsive} {...carouselProps} >
        {items.map((item, index) => (
          <div key={index} className="container owl-item " style={{ marginRight: 30 }}>
            <div className=" testimonial-single">
              <div className="testimonial-content">
                <div className="testimonial-author-img">
                  <img src={item.imageSrc} alt="" />
                </div>
                <div className="testimonial-author-info">
                  <h4>{item.author}</h4>
                  <p>{item.role}</p>
                </div>
              </div>
              <div className="testimonial-quote">
                <div className="testimonial-quote-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.871 3.871 0 0 1-2.748-1.179m10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.871 3.871 0 0 1-2.748-1.179"/></svg>
                </div>
                <p>{item.quote}</p>
              </div>
              <div className="testimonial-rate flex">
                {[...Array(item.rate)].map((star, i) => (
                  <span key={i} className="flex" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21z"/></svg>
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonial;
