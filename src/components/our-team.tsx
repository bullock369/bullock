'use client';

import React from 'react';
import Link from 'next/link'; // Assuming you are using Next.js for routing

const teamMembers = [
  {
    "name": "Mitesh Sathwara",
    "position": "Sr. Computer Engineer",
    "imgSrc": "assets/img/team/01.jpg",
   
  },
  {
    "name": "Rohan Joshi",
    "position": "Sr. Networking Engineer",
    "imgSrc": "assets/img/team/02.jpg",
    
  },
  {
    "name": "Priyank Makwana",
    "position": "Sr. Developer",
    "imgSrc": "assets/img/team/03.jpg",
    
  },
  {
    "name": "Parth Chauhan",
    "position": "Jr. Support Engineer",
    "imgSrc": "assets/img/team/04.jpg",
    
  }
];

const OurTeam = () => {
  return (
    <div className="team-area bg pt-120 pb-50">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-5 mx-auto wow fadeInDown"
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
                <i className="fas fa-bring-forward" /> Team
              </span>
              <h2 className="site-title">
                Meet Our <span>Team</span>
              </h2>
              <div className="heading-divider" />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          {teamMembers.map((member, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div
                className="team-item wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay={`${0.25 * (index + 1)}s`}
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: `${0.25 * (index + 1)}s`,
                  animationName: "fadeInUp"
                }}
              >
                <div className="team-img">
                  <img src={member.imgSrc} alt="thumb" />
                </div>
                <div className="team-content">
                  <div className="team-bio">
                    <h5>
                      {member.name}
                    </h5>
                    <span>{member.position}</span>
                  </div>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
