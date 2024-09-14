import React from 'react'

const PhotoGallery = () => {
  return (
    <div className="gallery-area py-120">
    <div className="container">
      <div className="row">
        <div className="col-lg-7 mx-auto">
          <div
            className="site-heading text-center wow fadeInDown"
            data-wow-duration="1s"
            data-wow-delay=".25s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationDelay: "0.25s",
              animationName: "fadeInDown"
            }}
          >
            <span className="site-title-tagline">
              <i className="fas fa-bring-forward" /> Photo Gallery
            </span>
            <h2 className="site-title">
              Explore Photo <span>Gallery</span>
            </h2>
            <div className="heading-divider" />
          </div>
        </div>
      </div>
      <div
        className="row popup-gallery wow fadeInUp"
        data-wow-duration="1s"
        data-wow-delay=".75s"
        style={{
          visibility: "visible",
          animationDuration: "1s",
          animationDelay: "0.75s",
          animationName: "fadeInUp"
        }}
      >
        <div className="col-md-4">
          <div className="gallery-item">
            <div className="gallery-img">
              <img src="assets/img/gallery/01.jpg" alt="" />
            </div>
            <div className="gallery-content">
              <a
                className="popup-img gallery-link"
                href="assets/img/gallery/01.jpg"
              >
                <i className="far fa-plus" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="gallery-item">
            <div className="gallery-img">
              <img src="assets/img/gallery/02.jpg" alt="" />
            </div>
            <div className="gallery-content">
              <a
                className="popup-img gallery-link"
                href="assets/img/gallery/02.jpg"
              >
                <i className="far fa-plus" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="gallery-item">
            <div className="gallery-img">
              <img src="assets/img/gallery/04.jpg" alt="" />
            </div>
            <div className="gallery-content">
              <a
                className="popup-img gallery-link"
                href="assets/img/gallery/04.jpg"
              >
                <i className="far fa-plus" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="gallery-item">
            <div className="gallery-img">
              <img src="assets/img/gallery/05.jpg" alt="" />
            </div>
            <div className="gallery-content">
              <a
                className="popup-img gallery-link"
                href="assets/img/gallery/05.jpg"
              >
                <i className="far fa-plus" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="gallery-item">
            <div className="gallery-img">
              <img src="assets/img/gallery/06.jpg" alt="" />
            </div>
            <div className="gallery-content">
              <a
                className="popup-img gallery-link"
                href="assets/img/gallery/06.jpg"
              >
                <i className="far fa-plus" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="gallery-item">
            <div className="gallery-img">
              <img src="assets/img/gallery/07.jpg" alt="" />
            </div>
            <div className="gallery-content">
              <a
                className="popup-img gallery-link"
                href="assets/img/gallery/07.jpg"
              >
                <i className="far fa-plus" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  

  )
}

export default PhotoGallery