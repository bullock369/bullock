
'use client';

import React from 'react'
import { Icon } from "@iconify/react";
const chooseItems = [
  {
    icon: "tabler:user-cog",
    uilIcon: "tabler:user-cog",
    title: "Skilled Technicians",
    description: "There are many variations of available the majority."
  },
  {
    icon: "mdi:award",
    uilIcon: "mdi:award",
    title: "Quality Guarantee",
    description: "There are many variations of available the majority."
  },
  {
    icon: "flaticon-padlock-1",
    uilIcon: "uil:lock-alt",
    title: "Your Trusted Partner",
    description: "There are many variations of available the majority."
  },
  {
    icon: "mdi:calendar-check-outline",
    uilIcon: "mdi:calendar-check-outline",
    title: "07+ Years Experience",
    description: "There are many variations of available the majority."
  }
];

const ChooseUs = () => {
  return (
    
    <div className="choose-area py-28">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6">
        <div
          className="choose-content wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay=".25s"
          style={{
            visibility: "visible",
            animationDuration: "1s",
            animationDelay: "0.25s",
            animationName: "fadeInUp"
          }}
        >
          <div className="site-heading mb-3">
            <span className="site-title-tagline flex mb-4">
              <Icon icon="mdi:star-check-outline" className="w-8 h-8 text-[#24acb7] mr-4" /> Why Choose Us
            </span>
            <h2 className="site-title">
              When You Need Solutions <span>We Are</span> Always Here
            </h2>
          </div>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable.
          </p>
          <div className="choose-wrapper mt-4">
          <div className="grid md:grid-cols-2 gap-6">
      {chooseItems.map((item, index) => (
        <div key={index} className="choose-item">
          <div className="choose-item-content">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                {item.uilIcon && (
                  <Icon icon={item.uilIcon} className="w-8 h-8 text-[#24acb7]" />
                )}
              </div>
              <div>
                <h4 className="text-xl text-black font-bold">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div
          className="choose-img wow fadeInRight"
          data-wow-duration="1s"
          data-wow-delay=".25s"
          style={{
            visibility: "visible",
            animationDuration: "1s",
            animationDelay: "0.25s",
            animationName: "fadeInRight"
          }}
        >
          <a
            className="play-btn popup-youtube"
            href="https://www.youtube.com/watch?v=ckHzmP1evNU"
          >
            <i className="fas fa-play" />
          </a>
          <img src="assets/img/choose/first.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default ChooseUs