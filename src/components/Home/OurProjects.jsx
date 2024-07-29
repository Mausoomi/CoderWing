import React, { useState } from "react";
import image1 from "../../../src/assets/images/fun.png";
import image2 from "../../../src/assets/images/casino (1).png";
import image3 from "../../../src/assets/images/AI.png";
import { MotionAnimate } from "react-motion-animate";
import CoursePopUp from "../Courses/CoursePopUp";

function OurProjects() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [idOfCourse, setIdOfCourse] = useState("");

  const coursesData = [
    {
      id: 1,
      // title: "Fun Learning For Kid's",
      title: "Fun Learning",
      description:
        "A comprehensive learning platform designed to help children expand their vocabulary through interactive stories",
      image: image1,
      link: "https://brainylingo.co.uk",
    },
    {
      id: 2,
      title: "Play and Earn",
      description:
        "These platforms typically allow users to play various games using cryptocurrencies.",
      image: image2,
      link: "https://casino.betamxpertz.xyz/",
    },
    {
      id: 3,
      title: "Business With AI",
      description:
        "This platform specializes in creating a Chabot for the company’s website to manage customer queries using AI.",
      image: image3,
      link: "https://aitool.betamxpertz.xyz/",
    },
  ];

  const handleShowCouses = (id) => {
    setShowPopUp(true);
    setIdOfCourse(id);
  };
  console.log(idOfCourse);

  return (
    <>
      <MotionAnimate
        delay={0.2}
        speed={5}
        ease={[0.75, 0.45, 0.53, 0.94]}
        reset={true}
      >
        {" "}
        <section className="difSection">
          <h2 className="boldHding">Our Successful Project's</h2>
          <div className="container courses__container">
            {coursesData.map((course, index) => (
              <article className="course" key={index}>
                <div className="course__image">
                  <img
                    src={course.image}
                    alt={course.title}
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="mainCour">
                  {" "}
                  <div className="course__info">
                    <p className="CoureName">{course.title}</p>
                    <p>{course.description}</p>
                  </div>
                  <div>
                    <button
                      className="btnMain btn-primary"

                      // onClick={() => handleShowCouses(course.id)}
                    >
                      <a href={course.link}>Learn More</a>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        {/* {showPopUp && (
          <CoursePopUp setShowPopUp={setShowPopUp} idOfCourse={idOfCourse} />
        )} */}
      </MotionAnimate>
    </>
  );
}

export default OurProjects;
