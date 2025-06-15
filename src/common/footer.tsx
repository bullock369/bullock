"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

const footerLinks = [
  {
    href: "/about-us",
    iconClass: "fab fa-facebook-f",
    text: "About Us",
  },
  {
    href: "/services",
    iconClass: "fas fa-dot-circle",
    text: "Services",
  },
 
  {
    href: "#",
    iconClass: "fas fa-dot-circle",
    text: "Our Team",
  },
  {
    href: "#",
    iconClass: "fas fa-dot-circle",
    text: "Privacy policy",
  },
];
const footerSecLinks = [
  {
    href: "#",
    iconClass: "fas fa-dot-circle",
    text: "Laptop & Desktop",
  },
  {
    href: "#",
    iconClass: "fas fa-dot-circle",
    text: "Servers",
  },
  {
    href: "#",
    iconClass: "fas fa-dot-circle",
    text: "Networking",
  },
  {
    href: "#",
    iconClass: "fas fa-dot-circle",
    text: "Data Recovery",
  },
  {
    href: "#",
    iconClass: "fas fa-dot-circle",
    text: "CCTV",
  },
  {
    href: "#",
    iconClass: "fas fa-dot-circle",
    text: "Hardware & Software",
  },
  {
    href: "#",
    iconClass: "fas fa-dot-circle",
    text: "Service AMC",
  },
  {
    href: "#",
    iconClass: "fas fa-dot-circle",
    text: "Web Design & Development",
  },
  {
    href: "#",
    iconClass: "fas fa-dot-circle",
    text: "Software Development",
  },
];

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="footer-widget">
        <div className="container">
          <div className="row footer-widget-wrapper pt-24 pb-16">
            <div className="col-md-6 col-lg-6">
              <div className="footer-widget-box about-us">
                <Link href="#" className="footer-logo">
                  <img src="assets/img/logo/logo.png" alt="logo" />
                </Link>
                <p className="mb-4">
                  We are many variations of passages available but the majority
                  have suffered alteration in some form by injected humour words
                  believable.
                </p>
                <ul className="footer-contact">
                  <li className="">
                    <Link
                      href="tel:+919998829141"
                      className="flex items-center"
                    >
                      <span>
                        <Icon icon="ep:phone" />
                      </span>
                      +91 9998829141
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <span>
                      <Icon icon="carbon:location" />
                    </span>
                    178 Jantanagar, Odhav Ahmedabad - 382415
                  </li>
                  <li className="flex items-center">
                    <Link
                      href="mailto:info@bullockindia.com"
                      className="flex items-center"
                    >
                      <span>
                        <Icon icon="mdi:email-edit-outline" />
                      </span>
                      info@bullockindia.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="footer-widget-box list">
                <h4 className="footer-widget-title">Quick Links</h4>
                <ul className="footer-list">
                  {footerLinks.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href} className="flex items-center">
                        <Icon className={link.iconClass} icon="la:dot-circle" />
                        <span className="ml-4">{link.text}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="footer-widget-box list">
                <h4 className="footer-widget-title">Our Services</h4>
                <ul className="footer-list">
                  {footerSecLinks.map((link, index) => (
                    <li key={index}>
                      <h6>
                        <Icon className={link.iconClass} icon="la:dot-circle" />{" "}
                        {link.text}
                      </h6>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* <div className="col-md-6 col-lg-3">
              <div className="footer-widget-box list">
                <h4 className="footer-widget-title">Newsletter</h4>
                <div className="footer-newsletter">
                  <p>Subscribe Our Newsletter To Get Latest Update And News</p>
                  <div className="subscribe-form">
                    <form action="#">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                      />
                      <button className="theme-btn" type="submit">
                        Subscribe Now <i className="far fa-paper-plane" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="!w-1/2 self-center">
              <p className="copyright-text">
                © Copyright <span id="date">2024</span>{" "}
                <Link href="#"> Bullock </Link> All Rights Reserved.
              </p>
            </div>
            <div className="!w-1/2 self-center">
              <ul className="footer-social">
                <li>
                  <Link href="#">
                    <Icon
                      className="fab fa-facebook-f"
                      icon="ri:facebook-fill"
                    />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/bullock_technosoft">
                    <Icon className="fab fa-facebook-f" icon="bi:instagram" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Icon
                      className="fab fa-facebook-f"
                      icon="flowbite:linkedin-solid"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
