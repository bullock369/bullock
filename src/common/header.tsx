'use client';

import { Icon } from "@iconify/react";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-top-wrapper">
            <div className="header-top-left">
              <div className="header-top-contact">
                <ul>
                  <li>
                    <div className="header-top-contact-info">
                      <Link href="#">
                        <i className="far fa-map-marker-alt" /> 178 Jantanagar, Odhav Ahmedabad
                    </Link>
                    </div>
                  </li>
                  <li>
                    <div className="header-top-contact-info">
                      <Link href="mailto:rahul.000.888.777@gmail.com">
                        <i className="far fa-envelopes" />
                        rahul.000.888.777@gmail.com
                    </Link>
                    </div>
                  </li>
                  <li>
                    <div className="header-top-contact-info">
                      <Link href="#">
                        <i className="far fa-clock" /> Mon - Sat (10AM - 07PM)
                    </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header-top-right">
              <div className="header-top-social">
                <span>Follow Us:</span>
                <Link href="#">
                <Icon
                      className="fab fa-facebook-f"
                      icon="ri:facebook-fill"
                    />
              </Link>
                <Link href="#">
                <Icon className="fab fa-facebook-f" icon="bi:instagram" />
              </Link>
                <Link href="#">
                <Icon
                      className="fab fa-facebook-f"
                      icon="flowbite:linkedin-solid"
                    />
              </Link>
              
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-navigation">
        <nav className="navbar navbar-expand-lg">
          <div className="container custom-nav">
            <Link className="navbar-brand" href="/">
              <img src="assets/img/logo/logo.png" alt="logo" />
          </Link>
          <button className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <Icon icon="fa6-solid:xmark" />
              ) : (
                <Icon icon="fa6-solid:bars" />
              )}
            </button>
            {/* <div className="mobile-menu-right">
              <div className="mobile-menu-list">
                <Link href="#" className="mobile-menu-link search-box-outer">
                  <i className="far fa-search" />
              </Link>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#main_nav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-btn-icon">
                  <i className="far fa-bars" />
                </span>
              </button>
            </div> */}
            <div className={`navbar-collapse ${isMobileMenuOpen ? 'open' : ''}`} id="main_nav">
              <ul className="navbar-nav flex">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link "
                    href="/"

                  >
                    Home
                  </Link>
                  </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/about-us">
                    About
                  </Link>
                </li>
               
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link "
                    href="/services"
                    data-bs-toggle="dropdown"
                  >
                    Services
                </Link>
               
                </li>
                
              </ul>
              <div className="header-nav-right">
                
                <div className="header-btn">
                  <Link href="/contact-us" className="theme-btn mt-2 flex items-center contact-us-data">
                    Get In Touch 
                    <Icon icon="mingcute:arrow-right-line"/>
                </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
