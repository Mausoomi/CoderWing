import React, { useState } from "react";
import CoursePopUp from "../Courses/CoursePopUp";
import ContactPopUp from "./ContactPopUp";
import { useNavigate } from "react-router-dom";

function Footer() {
  const [showPopUp, setShowPopUp] = useState(false);
  const handleShowCouses = (id) => {
    setShowPopUp(true);
  };
  const navigate = useNavigate()
  return (
    <div>
      {" "}
      <footer>
        <div class="container footer__container">
          <div class="footer__1">
            <a class="footer__logo">
              <h4>CoderWing</h4>
            </a>
            <p>
              CoderWing is dedicated to helping you achieve your educational and
              career goals. Join us today and take the first step towards a
              brighter future!
            </p>
          </div>

          <div class="footer__2">
            <h4>Courses</h4>
            <ul class="permalinks">
              <li>
                <a onClick={handleShowCouses} className="FooterCors">
                  Become a React Developer
                </a>
              </li>
              <li>
                <a onClick={handleShowCouses} className="FooterCors">
                  Become a MERN Developer
                </a>
              </li>
              <li>
                <a onClick={handleShowCouses} className="FooterCors">
                  Become a Python Developer
                </a>
              </li>
              <li>
                <a onClick={handleShowCouses} className="FooterCors">
                  Become a Flutter Developer
                </a>
              </li>
              <li>
                <a onClick={handleShowCouses} className="FooterCors">
                  Become a Web Designer
                </a>
              </li>
            </ul>
          </div>

          <div class="footer__3">
            <h4>Privacy</h4>
            <ul class="privacy">
              <li>
                <a
                  className="FooterCors"
                  onClick={() => navigate("/Price&Policy")}
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className="FooterCors"
                  onClick={() => navigate("/Terms&Conditions")}
                >
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>

          <div class="footer__4">
            <h4>Contact Us</h4>
            <div>
              <p>+01 234 567 8910</p>
              <p>bytllhcinar@gmail.com</p>
            </div>

            <ul class="footer__socials">
              <li>
                <a className="FooterCors">
                  <i class="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a className="FooterCors">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a className="FooterCors">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer__copyright">
          <small>Copyright &copy; CoderWing Software</small>
        </div>
      </footer>
      {showPopUp && <ContactPopUp setShowPopUp={setShowPopUp} />}
    </div>
  );
}

export default Footer;
