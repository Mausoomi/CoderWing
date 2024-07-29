import React, { useState } from "react";
import AboutUsImg from "../assets/images/AboutUs.jpg";
import ContactPopUp from "./Home/ContactPopUp";
import "../assets/css/AboutUsMain.css";

function AboutUs() {
  const [showPopUp, setShowPopUp] = useState(false);

  const handleShowCouses = () => {
    setShowPopUp(true);
  };
  const dataOffer = [
    {
      topic: "Interactive Courses",
      text: "Engaging content designed to keep you interested and motivated.",
    },
    {
      topic: "Hands-On Projects",
      text: "Practical applications to reinforce learning and build real-world skills",
    },
    {
      topic: "Professional Development Programs",
      text: "Courses designed to enhance your career prospects and skillset.",
    },
    {
      topic: "Expert-Led Workshops",
      text: "CoderWing offers a comprehensive suite of diverse educational programs.",
    },
    {
      topic: "Personalized Learning Paths",
      text: "Tailored courses that adapt to your unique learning style and pace.",
    },
    {
      topic: "Immersive Learning Experiences",
      text: "Interactive modules and simulations that bring concepts to life.",
    },
    {
      topic: "Placement Assistance",
      text: "We provide group discussion sessions, interview preparation, and soft skills development.",
      // CoderWing offers a diverse range of educational programs and resources to help you achieve your learning goals. Our offerings include",
    },
    {
      topic: "Comprehensive Course Catalog",
      text: " A wide variety of subjects and topics to choose from.",
    },
    {
      topic: "Interactive Learning Tools",
      text: " Engaging videos, quizzes, and games to make learning fun.",
    },
  ];
  return (
    <>
      <div className="aboutUsContact">
        <div>
          <h1 className="boldHding">About Us</h1>
        </div>
        <div className="InnerAboutUs">
          <div className="InnerAboutUsone">
            {" "}
            <div>
              <div className="row">
                <div className="col-md-12">
                  <div className="join-content-bx text-white">
                    {/* <h2>
                      Learn a new skill online on <br /> your time
                    </h2> */}
                    {/* <h4>
                      <span className="counter">57,000 </span> Online Courses
                    </h4> */}
                    <p>
                      Welcome to CoderWing, where every learner’s journey is
                      unique, and every achievement is celebrated. At CoderWing,
                      we are dedicated to providing a personalized and enriching
                      learning experience that empowers you to excel. Our
                      innovative platform combines the latest technology with
                      expert instruction to create a learning environment that
                      is both effective and enjoyable.
                    </p>
                    <div style={{margin:"2rem 0"}}>
                      
                      <button
                        className="btnMain btn-primary AboutBtn"
                        onClick={handleShowCouses}
                      >
                        Join Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="innerAboutusTwo">
            <img src={AboutUsImg} alt="about-us" />
          </div>
        </div>
        <div>
          <h1 className="hdAboutUs">Our Mission</h1>
          <p>
            At CoderWing, our mission is clear: to make high-quality education
            accessible to everyone, everywhere. Learning is a lifelong journey
            and everyone deserves the opportunity to reach their full potential.
            Our goal is to break down barriers to education and create an
            environment where knowledge knows no bounds.
          </p>
        </div>
        <div className="whatWeOfferSection">
          <h1 className="hdAboutUs"> What We Offer</h1>
          <p>
            CoderWing offers an extensive array of courses and programs tailored
            to meet the unique needs of our learners. Whether you want to master
            a new skill, advance your career, or explore a new hobby, we have
            something for you. Our offerings include:
          </p>
          <div className="offerFlex">
            {dataOffer.map((item, index) => (
              <div key={index} className="dataBoxMain">
                <h3 className="OfferHd">{item.topic}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="target">
          <h1 className="hdAboutUs">Target Audience</h1>
          <p>
            CoderWing is designed for learners of all ages and backgrounds.
            Whether you are a student aiming to improve your academic
            performance, a professional seeking to enhance your skills, or a
            lifelong learner with a passion for knowledge, CoderWing has the
            right program for you.{" "}
          </p>
        </div>
        <div className="Approach">
          <h1 className="hdAboutUs">Our Approach</h1>
          <p>
            Our approach is learner-focused and outcome-driven. We use advanced
            analytics and AI to personalize your learning experience, ensuring
            that you get the support you need to succeed. Our courses are
            designed to be flexible and engaging, allowing you to learn at your
            own pace and in your own way. We combine theoretical knowledge with
            practical applications to prepare you for the challenges of the real
            world.
          </p>
        </div>
        <div className="ExpertTrainers">
          <h1 className="hdAboutUs"> Expert Trainers</h1>
          <p>
            Our trainers are the backbone of CoderWing. Each trainer is an
            expert in their field, with a deep understanding of the subject
            matter and a passion for teaching. They are dedicated to helping you
            succeed and are always available to provide guidance, support, and
            feedback. With CoderWing, you are learning from the best. Join the
            CoderWing community today and take the first step towards achieving
            your educational goals. Discover new possibilities, enhance your
            skills, and become a champion in your own right.
          </p>
        </div>
        <div className="hello"></div>
      </div>
      {showPopUp && <ContactPopUp setShowPopUp={setShowPopUp} />}
    </>
  );
}

export default AboutUs;

// import React from "react";
// import AboutUsImg from "../assets/images/AboutUs.jpeg";
// import "../assets/images/about.css";
// function AboutUs() {
//   return (
//     <div>
//       {/* Section Area */}
//       <div className="section-area section-sp1">
//         <div className="container">
//           <div className="row">
//             {features.map((feature, index) => (
//               <div className="col-lg-3 col-md-6 col-sm-6 m-b30" key={index}>
//                 <div className="feature-container">
//                   <div className="feature-md text-white m-b20">
//                     <a href="#" className="icon-cell">
//                       <img
//                         src={`assets/images/icon/icon${index + 1}.png`}
//                         alt=""
//                       />
//                     </a>
//                   </div>
//                   <div className="icon-content">
//                     <h5 className="ttr-tilte">{feature.title}</h5>
//                     <p>{feature.description}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Our Story */}
//       <div className="section-area bg-gray section-sp1 our-story">
//         <div className="container">
//           <div className="row align-items-center d-flex">
//             <div className="col-lg-5 col-md-12 heading-bx">
//               <h2 className="m-b10">Our Story</h2>
//               <h5 className="fw4">
//                 It is a long established fact that a reader.
//               </h5>
//               <p>
//                 Lorem Ipsum is simply dummy text of the printing and typesetting
//                 industry. Lorem Ipsum has been the industry's standard dummy
//                 text ever since the 1500s, when an unknown printer took a galley
//                 of type and scrambled it to make a type specimen book. It has
//                 survived not only five centuries, but also the leap into
//                 electronic typesetting, remaining essentially unchanged.
//               </p>
//               <a href="#" className="btn">
//                 Read More
//               </a>
//             </div>
//             <div className="col-lg-7 col-md-12 heading-bx p-lr">
//               <div className="video-bx">
//                 <img src="assets/images/about/pic1.jpg" alt="" />
//                 <a
//                   href="https://www.youtube.com/watch?v=x_sJzVe9P_8"
//                   className="popup-youtube video"
//                 >
//                   <i className="fa fa-play"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Our Status */}
//       <div className="section-area content-inner section-sp1">
//         <div className="container">
//           <div className="section-content">
//             <div className="row">
//               {stats.map((stat, index) => (
//                 <div
//                   className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30"
//                   key={index}
//                 >
//                   <div className="counter-style-1">
//                     <div
//                       className={
//                         index % 2 === 0 ? "text-primary" : "text-black"
//                       }
//                     >
//                       <span className="counter">{stat.value}</span>
//                       <span>+</span>
//                     </div>
//                     <span className="counter-text">{stat.label}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* About Content */}
//       <div
//         className="section-area section-sp2 bg-fix ovbl-dark join-bx text-center"
//         style={{ backgroundImage: "url(assets/images/background/bg1.jpg)" }}
//       >
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12">
//               <div className="join-content-bx text-white">
//                 <h2>
//                   Learn a new skill online on <br /> your time
//                 </h2>
//                 <h4>
//                   <span className="counter">57,000 </span> Online Courses
//                 </h4>
//                 <p>
//                   Lorem Ipsum is simply dummy text of the printing and
//                   typesetting industry. Lorem Ipsum has been the industry's
//                   standard dummy text ever since the 1500s, when an unknown
//                   printer took a galley of type and scrambled it to make a type
//                   specimen book.Lorem Ipsum is simply dummy text of the printing
//                   and typesetting industry. Lorem Ipsum has been the industry's
//                   standard dummy text ever since the 1500s, when an unknown
//                   printer took a galley of type and scrambled it to make a type
//                   specimen book.
//                 </p>
//                 <a href="#" className="btn button-md">
//                   Join Now
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// const features = [
//   {
//     title: "Our Philosophy",
//     description:
//       "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..",
//   },
//   {
//     title: "Kingster's Principle",
//     description:
//       "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..",
//   },
//   {
//     title: "Key Of Success",
//     description:
//       "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..",
//   },
//   {
//     title: "Our Philosophy",
//     description:
//       "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod..",
//   },
// ];

// const stats = [
//   { value: 3000, label: "Completed Projects" },
//   { value: 2500, label: "Happy Clients" },
//   { value: 1500, label: "Questions Answered" },
//   { value: 1000, label: "Ordered Coffee's" },
// ];

// export default AboutUs;
