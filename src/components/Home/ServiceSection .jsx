import React from "react";
// import "./ServiceSection.css"; 
// import "font-awesome/css/font-awesome.min.css";

const ServiceSection = () => {
  return (
    <div className="section-area content-inner service-info-bx">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="service-bx">
              <div className="action-box">
                <img
                  src="assets/images/our-services/pic1.jpg"
                  alt="Best Industry Leaders"
                />
              </div>
              <div className="info-bx text-center">
                <div className="feature-box-sm radius bg-white">
                  <i className="fa fa-bank text-primary"></i>
                </div>
                <h4>
                  <a href="#">Best Industry Leaders</a>
                </h4>
                <a href="#" className="btnMain radius-xl">
                  View More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="service-bx">
              <div className="action-box">
                <img
                  src="assets/images/our-services/pic2.jpg"
                  alt="Learn Courses Online"
                />
              </div>
              <div className="info-bx text-center">
                <div className="feature-box-sm radius bg-white">
                  <i className="fa fa-book text-primary"></i>
                </div>
                <h4>
                  <a href="#">Learn Courses Online</a>
                </h4>
                <a href="#" className="btnMain radius-xl">
                  View More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="service-bx m-b0">
              <div className="action-box">
                <img
                  src="assets/images/our-services/pic3.jpg"
                  alt="Book Library & Store"
                />
              </div>
              <div className="info-bx text-center">
                <div className="feature-box-sm radius bg-white">
                  <i className="fa fa-file-text-o text-primary"></i>
                </div>
                <h4>
                  <a href="#">Book Library & Store</a>
                </h4>
                <a href="#" className="btnMain radius-xl">
                  View More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
