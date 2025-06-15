"use client";

import React from "react";
import { Icon } from "@iconify/react";

const aboutList = [
  {
    icon: "uil:arrow-circle-right",
    text: "At vero eos et accusamus et iusto odio"
  },
  {
    icon: "uil:arrow-circle-right",
    text: "Established fact that a reader will be distracted"
  },
  {
    icon: "uil:arrow-circle-right",
    text: "Sed ut perspiciatis unde omnis iste natus sit"
  }
];

const AboutUs = () => {
  return (
    <div>
      <div className="about-area py-28">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="about-left wow fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay=".25s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.25s",
                  animationName: "fadeInLeft",
                }}
              >
                <div className="about-img">
                  <div className="about-img-1">
                    <img src="assets/img/about/01.jpg" alt="" />
                  </div>
                  <div className="about-img-2">
                    <img src="assets/img/about/02.jpg" alt="" />
                  </div>
                </div>
                <div className="about-shape">
                  <img src="assets/img/shape/01.png" alt="" />
                </div>
                <div className="about-experience">
                  <h1>07+</h1>
                  <div className="about-experience-text">
                    Years Of <br /> Experience
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about-right wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".25s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.25s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="site-heading mb-3">
                  <span className="site-title-tagline">
                    <i className="fas fa-bring-forward" /> About Us
                  </span>
                  <h2 className="site-title">
                    We Provide Quality <span>Repair</span> Services
                  </h2>
                </div>
                <p className="about-text">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don&apos;t look
                  even slightly believable.
                </p>
                <div className="about-list-wrapper">
                  <ul className="about-list list-unstyled">
                  {aboutList.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <Icon icon={item.icon} className="mr-2 text-[#24acb7] " />
                      {item.text}
                    </li>
                  ))}
                </ul>
                </div>
                <a href="/about-us" className="theme-btn mt-4 flex w-fit">
                  Discover More
                  <span > <Icon icon="ph:arrow-right-light" className="ml-2 w-6 h-6"/></span> 
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
