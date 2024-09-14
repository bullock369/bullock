'use client';

import React from "react";

import phoneIcon from "@iconify/icons-fa-solid/mobile-alt";
import { Icon } from "@iconify/react";

const cardData = [
  {
    "id": 1,
     "icon": 'mynaui:desktop',
    "title": "Computer Solutions & Help",
    "text": "Contact Us For All Your Computer Solutions & Help"
  },
  {
    "id": 2,
    "icon": 'hugeicons:laptop',
    "title": "Networking Design & Solutions",
    "text": "Lets Discuss Your Networking Design & Solutions"
  },
  {
    "id": 3,
    "icon": 'solar:camera-broken',
    "title": "CCTV Support",
    "text": "Choose Your Personal Security with Our Total CCTV Support"
  },
  {
    "id": 4,
    "icon": phoneIcon,
    "title": "Make Your dangerous Website & Software",
    "text": "Feel Free to Talk us to Make Your dangerous Website & Software"
  }
];

const FirstCard = () => {
  return (
    <div className="container feature-area">
      <div className="grid md:grid-cols-4 grid-cols-1 md:!gap-4 gap-2">
        {cardData.map((card) => (
          <div key={card.id} className="feature-item">
            <div className="feature-front">
              <div className="feature-content">
                <div className="feature-icon">
                <Icon icon={card.icon} />
                </div>
                <div className="feature-title">
                  <h4>{card.title}</h4>
                </div>
              </div>
            </div>
            <div className="feature-back">
              <div className="feature-content">
                <div className="feature-title">
                  <h4>{card.title}</h4>
                </div>
                <div className="feature-text">
                  <p>{card.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirstCard;
