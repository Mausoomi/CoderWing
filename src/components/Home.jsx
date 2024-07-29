import React from 'react'
import Header from './Home/Header'
import MainSlider from './Home/MainSlider';
import ServiceSection from './Home/ServiceSection ';
import Categories from './Home/Categories';
import Courses from './Home/Courses.jsx';
import Faq from './Home/Faq.jsx';
import ParallaxText from "./ParallaxText"
import { useRef, useEffect } from "react";
import OurProjects from './Home/OurProjects.jsx';
import Testimonials from './Home/Testimonials.jsx';
import SuccessStories from './Home/SuccessStories.jsx';

function Home() {
 const faqRef = useRef(null);

  useEffect(() => {
  
    faqRef.current = faqRef.current;
  }, []);

  const scrollToFAQ = () => {
    if (faqRef.current) {
      faqRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="page-wraper">
      <Header scrollToFAQ={scrollToFAQ} />
      <MainSlider />
      <div>
        {" "}
        <ParallaxText baseVelocity={2}>
          <div className="scrollTickel">
            <p>SKILL DEVELOPMENT</p>
            <p>GROWTH</p>
            <p>TRAINING</p>
            <p>MERN</p>
            <p>REACT</p>
            <p>PYTHON</p>
          </div>
        </ParallaxText>
      </div>

      <Categories />
      <Courses />
      <OurProjects />
      <Testimonials />
      <SuccessStories />
      <div ref={faqRef}>
        <Faq />
      </div>
    </div>
  );
}

export default Home