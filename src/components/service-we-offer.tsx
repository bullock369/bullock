"use client";

import React from "react";
import { Icon } from "@iconify/react";

const servicesData = [
  {
    id: 1,
    icon: "uiw:laptop",
    title: "Laptop & Desktop",
    text: "There are many variations of passages orem psum available but the majority have suffered alteration in some.",
  },
  {
    id: 2,
    icon: "carbon:ibm-cloud-bare-metal-servers-vpc",
    title: "Servers",
    text: "There are many variations of passages orem psum available but the majority have suffered alteration in some.",
  },
  {
    id: 3,
    icon: "carbon:hybrid-networking-alt",
    title: "Networking",
    text: "There are many variations of passages orem psum available but the majority have suffered alteration in some.",
  },
  {
    id: 4,
    icon: "hugeicons:data-recovery",
    title: "Data Recovery",
    text: "There are many variations of passages orem psum available but the majority have suffered alteration in some.",
  },
  {
    id: 5,
    icon: "game-icons:cctv-camera",
    title: "CCTV",
    text: "There are many variations of passages orem psum available but the majority have suffered alteration in some.",
  },
  {
    id: 6,
    icon: "hugeicons:software-uninstall",
    title: "Hardware & Software ",
    text: "There are many variations of passages orem psum available but the majority have suffered alteration in some.",
  },
  {
    id: 7,
    icon: "la:handshake-solid",
    title: "AMC Service",
    text: "There are many variations of passages orem psum available but the majority have suffered alteration in some.",
  },
  {
    id: 8,
    icon: "gg:website",
    title: "Web Design & Development",
    text: "There are many variations of passages orem psum available but the majority have suffered alteration in some.",
  },
  {
    id: 9,
    icon: "carbon:development",
    title: "Software Development ",
    text: "There are many variations of passages orem psum available but the majority have suffered alteration in some.",
  },
];

const ServiceWeOffer = () => {
  return (
    <div className="service-area bg py-28">
      <div className="container">
        <div className="row">
        
          <div
            className="col-lg-5 mx-auto wow fadeInDown"
            data-wow-duration="1s"
            data-wow-delay=".25s"
          >
            <div className="site-heading text-center">
              <span className="site-title-tagline">
                <i className="fas fa-bring-forward" /> Services
              </span>
              <h2 className="site-title">
                What We <span>Offer</span>
              </h2>
              <div className="heading-divider" />
            </div>
          </div>
        </div>
        <div className="row">
          {servicesData.map((service) => (
            <div key={service.id} className="col-md-6 col-lg-4">
              <div
                className="service-item wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".25s"
              >
                <div className="service-icon">
                 
                  <Icon icon={service.icon} className="w-10 h-10"/>
                </div>
                <div className="service-content">
                  <h3 className="service-title">
                    <p>{service.title}</p>
                  </h3>
                  <p className="service-text">{service.text}</p>
                  {/* <div className="service-arrow">
                    <a href="#" className="service-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="m224.49 136.49l-72 72a12 12 0 0 1-17-17L187 140H40a12 12 0 0 1 0-24h147l-51.49-51.52a12 12 0 0 1 17-17l72 72a12 12 0 0 1-.02 17.01"/></svg>
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceWeOffer;
