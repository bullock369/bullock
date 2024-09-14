import React from 'react'

const ChooseUs = () => {
  return (
    
    <div className="choose-area py-120">
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
            <span className="site-title-tagline">
              <i className="fas fa-bring-forward" /> Why Choose Us
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
            <div className="row">
              <div className="col-lg-6">
                <div className="choose-item">
                  <div className="choose-icon">
                    <i className="flaticon-tool" />
                  </div>
                  <div className="choose-item-content">
                    <h4>Skilled Technicians</h4>
                    <p>There are many variations of available the majority.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="choose-item">
                  <div className="choose-icon">
                    <i className="flaticon-cup" />
                  </div>
                  <div className="choose-item-content">
                    <h4>Quality Guarantee</h4>
                    <p>There are many variations of available the majority.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="choose-item">
                  <div className="choose-icon">
                    <i className="flaticon-padlock-1" />
                  </div>
                  <div className="choose-item-content">
                    <h4>Your Trusted Partner</h4>
                    <p>There are many variations of available the majority.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="choose-item">
                  <div className="choose-icon">
                    <i className="flaticon-diploma-1" />
                  </div>
                  <div className="choose-item-content">
                    <h4>07+ Years Experience</h4>
                    <p>There are many variations of available the majority.</p>
                  </div>
                </div>
              </div>
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