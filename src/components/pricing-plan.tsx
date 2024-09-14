'use client';

import React from 'react'

const priceData = [
    {
      "name": "Basic",
      "amount": "$59.66",
      "description": "One Time Payment",
      "features": [
        "Unlimited Data Recovery",
        "Data Security And Backup",
        "Operating System Installation",
        "Unlimited Support Tickets",
        "24/7 Customer Support"
      ]
    },
    {
      "name": "Enterprise",
      "amount": "$120.78",
      "description": "One Time Payment",
      "features": [
        "Unlimited Data Recovery",
        "Data Security And Backup",
        "Operating System Installation",
        "Unlimited Support Tickets",
        "24/7 Customer Support"
      ]
    },
    {
      "name": "Premium",
      "amount": "$150.96",
      "description": "One Time Payment",
      "features": [
        "Unlimited Data Recovery",
        "Data Security And Backup",
        "Operating System Installation",
        "Unlimited Support Tickets",
        "24/7 Customer Support"
      ]
    }
  ];
  

const PricingPlan = () => {
  return (
    <div className="pricing-area bg py-120">
    <div className="container">
      <div className="row">
        <div
          className="col-lg-6 mx-auto wow fadeInDown"
          data-wow-duration="1s"
          data-wow-delay=".25s"
          style={{
            visibility: "visible",
            animationDuration: "1s",
            animationDelay: "0.25s",
            animationName: "fadeInDown"
          }}
        >
          <div className="site-heading text-center">
            <span className="site-title-tagline">
              <i className="fas fa-bring-forward" /> Pricing
            </span>
            <h2 className="site-title">
              Our Pricing <span>Plan</span>
            </h2>
            <div className="heading-divider" />
          </div>
        </div>
      </div>
      <div className="row g-5">
      {priceData.map((item, index) => (
        <div key={index} className="col-md-6 col-lg-4">
          <div className="pricing-item wow fadeInUp" data-wow-duration="1s" data-wow-delay={`.${index * 0.25}s`} style={{ visibility: "visible", animationDuration: "1s", animationDelay: `${index * 0.25}s`, animationName: "fadeInUp" }}>
            <div className="pricing-header">
              <h4>{item.name}</h4>
              <div className="pricing-price">
                <h1 className="pricing-amount">{item.amount}</h1>
                <p>{item.description}</p>
              </div>
            </div>
            <div className="pricing-feature">
              <ul>
                {item.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <a href="#" className="theme-btn">Get Started <i className="far fa-arrow-right" /></a>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  </div>
  
  )
}

export default PricingPlan