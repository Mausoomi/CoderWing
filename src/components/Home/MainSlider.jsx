import "../../assets/css/Slider.css";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactTyped } from "react-typed";
import banner2 from "../../assets/images/bannerMain.png";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import ContactPopUp from "./ContactPopUp";
import { useNavigate } from "react-router-dom";

const MainSlider = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const navigate = useNavigate()

  const handleShowCouses = () => {
    setShowPopUp(true);
  };
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    // prevArrow: <CustomPrevArrow />, // Custom previous arrow component
    // nextArrow: <CustomNextArrow />, // Custom next arrow component
  };
  const slides = [
    {
      image: banner2,
      subtitle: "Welcome To University",
      title: "Better Education ",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      button1Label: "Enroll Now",
      button2Label: "Contact Us",
    },
    {
      image: banner2,
      title: "Welcome To University",
      description: "Better Education For A Better Future",
      button1Label: "Enroll Now",
      button2Label: "Contact Us",
    },
  ];

  return (
    <div>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <img src={slide.image} alt={`Slide ${index + 1}`} />
            <div className="overlay">
              <div className="slide-content">
                {slide.subtitle && (
                  <h6 className="sub-title">
                    Welcome To <span style={{fontWeight:"800"}}>CoderWing</span>
                  </h6>
                )}
                <h2 className="titleBanner">Become a </h2>
                <h2 className="titleBanner">
                  {" "}
                  <ReactTyped
                    strings={[
                      "React Developer",
                      "Python Developer",
                      "MERN Developer",
                    ]}
                    typeSpeed={100}
                    backSpeed={50} // Speed at which the text is deleted
                    loop
                  />
                </h2>
                <p className="info">
                  Develop industry-ready skills and secure your future with our
                  courses.
                </p>
                <div className="buttons">
                  {/* <button className="read-more">
                {slide.button1Label || "Enroll Now"}
              </button> */}

                  <button
                    className=" SliBtn enrollNow"
                    onClick={() => navigate("/Contact-Us")}
                  >
                    Enroll Now
                  </button>
                  <button
                    className="btnMain SliBtn contact-us"
                    onClick={handleShowCouses}
                  >
                    Contact Us
                  </button>

                  {/* <button className="contact-us">
                {slide.button2Label || "CONTACT US"}
              </button> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {showPopUp && <ContactPopUp setShowPopUp={setShowPopUp} />}
    </div>
  );
};

export default MainSlider;
const CustomPrevArrow = (props) => (
  <div {...props} className="custom-prev-arrow">
    <MdArrowBackIos className="ArrowFontSz" />
  </div>
);

const CustomNextArrow = (props) => (
  <div {...props} className="custom-next-arrow">
    <MdArrowForwardIos className="ArrowFontSz" />
  </div>
);
