import React from 'react'

const HappyClients = () => {
  return (
    <div className="counter-area">
  <div className="container">
    <div
      className="counter-wrapper wow fadeInUp"
      data-wow-duration="1s"
      data-wow-delay=".25s"
      style={{
        visibility: "visible",
        animationDuration: "1s",
        animationDelay: "0.25s",
        animationName: "fadeInUp"
      }}
    >
      <div className="row">
        <div className="col-lg-3 col-sm-6">
          <div className="counter-box">
            <div className="icon">
              <i className="flaticon-travel" />
            </div>
            <div>
              <span
                className="counter"
                data-count="+"
                data-to={1200}
                data-speed={3000}
              >
                1200
              </span>
              <h6 className="title">+ Projects Done </h6>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="counter-box">
            <div className="icon">
              <i className="flaticon-like" />
            </div>
            <div>
              <span
                className="counter"
                data-count="+"
                data-to={500}
                data-speed={3000}
              >
                500
              </span>
              <h6 className="title">+ Happy Clients</h6>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="counter-box">
            <div className="icon">
              <i className="flaticon-user" />
            </div>
            <div>
              <span
                className="counter"
                data-count="+"
                data-to={1500}
                data-speed={3000}
              >
                1500
              </span>
              <h6 className="title">+ Experts Staffs</h6>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="counter-box">
            <div className="icon">
              <i className="flaticon-trophy" />
            </div>
            <div>
              <span
                className="counter"
                data-count="+"
                data-to={50}
                data-speed={3000}
              >
                50
              </span>
              <h6 className="title">+ Win Awards</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default HappyClients