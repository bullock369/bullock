import React from "react";

const QualityService = () => {
  return (
    <div className="cta-area">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-7 mx-auto text-center wow fadeInDown"
            data-wow-duration="1s"
            data-wow-delay=".25s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationDelay: "0.25s",
              animationName: "fadeInDown",
            }}
          >
            <div className="cta-text">
              <h1>
                We Provide <span>Quality</span> Services
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet leo tris commodo leo sed, scelerisque turpis. Ut in finibus
                tellus.{" "}
              </p>
            </div>
            <div className="mb-20 mt-10">
              <a href="#" className="cta-border-btn">
                <i className="fal fa-headset" />
                +91 9998829141
              </a>
            </div>
            <a href="/contact-us" className="theme-btn">
              Contact Now <i className="far fa-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityService;
