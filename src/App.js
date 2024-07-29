import "./App.css";

import "../src/assets/css/assets.css";
import "../src/assets/css/style.css";
// import "../src/assets/css/typography.css";
// import "../src/assets/css/shortcodes/accordion.css";
// import "../src/assets/css/shortcodes/alert.css";
// import "../src/assets/css/shortcodes/breadcrumb.css";
// import "../src/assets/css/shortcodes/button.css";
// import "../src/assets/css/shortcodes/divider.css";
// import "../src/assets/css/shortcodes/form.css";
// import "../src/assets/css/shortcodes/icon-box.css";
// import "../src/assets/css/shortcodes/layout.css";
// import "../src/assets/css/shortcodes/list.css";
// import "../src/assets/css/shortcodes/overlay.css";
// import "../src/assets/css/shortcodes/owl.css";
// import "../src/assets/css/shortcodes/pagination.css";
// import "../src/assets/css/shortcodes/pricingtable.css";
// import "../src/assets/css/shortcodes/separator.css";
// import "../src/assets/css/shortcodes/shortcodes.css";
// import "../src/assets/css/shortcodes/widget.css";
import Home from "../src/components/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import CourseDetails from "./components/Courses/CourseDetails";
import Header from "./components/Home/Header";
import MainContactUs from "./components/MainContactUs/MainContactUs";
import { useEffect } from "react";
import Footer from "./components/Home/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsCondition from "./components/TermsCondition";
import AboutUs from "./components/AboutUs";
import whatApp from "../src/assets/images/WhatSappIcon.svg"




function App() {

let location = useLocation();
console.log(location.pathname);

  useEffect(()=>{


  },[])
    const openWhatsAppChat = () => {
      const phoneNumber = "1234567890"; // Replace with the phone number or WhatsApp ID
      const url = `https://wa.me/${phoneNumber}`;
      window.open(url, "_blank");
    };
  return (
    <div id="bg">
      {location.pathname === "/" ? "" : <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/IT-training-course-indore" element={<CourseDetails />} />
        <Route path="/Contact-Us" element={<MainContactUs />} />
        <Route path="/Price&Policy" element={<PrivacyPolicy />} />
        <Route path="/Terms&Conditions" element={<TermsCondition />} />
        <Route path="/About-us" element={<AboutUs />} />
      </Routes>
      <Footer />
      <div className="chatBot" onClick={openWhatsAppChat}>
        <img src={whatApp} alt="chatBot" />
      </div>
    </div>
  );
}

export default App;







