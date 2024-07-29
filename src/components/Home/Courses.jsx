import React, { useState } from "react";
import image1 from "../../../src/assets/images/MernBanner..png";
import image2 from "../../../src/assets/images/ReactBanner..png";
import image3 from "../../../src/assets/images/PythonBanner.png";
import { MotionAnimate } from "react-motion-animate";
import CoursePopUp from "../Courses/CoursePopUp";
import ContactPopUp from "./ContactPopUp";
import ReactPopUp from "../../assets/images/React.jsPopUp.jpg";
import PythonPopUP from "../../assets/images/pythonPopup.jpg";
import MernPopup from "../../assets/images/MERNPOPUP.jpg";

function Courses() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [idOfCourse, setIdOfCourse] = useState("");
  const [showContactUs, setShowContactUs] = useState(false);

  const coursesData = [
    {
      id: 1,
      title: "MERN",
      description:
        "Master full-stack development with our MERN course. Build scalable web applications using MongoDB, Express.js, React, and Node.js.",
      image: image1,
      PopUpImg: MernPopup,
      PopUpSideData: [
        "Learn how to connect Front-End application (React) with Backend application (Express, MongoDB, NodeJS)",
        "Master email, password, and OAuth authentication with JWT for secure user access.",
        "Learn how to build big full stack app from scratch",
        "Learn best practices of Front-End and Server applications",
       
      ],
      fullName: "Full-stack",
      popupData:
        "Our MERN course is a comprehensive program designed for aspiring full-stack developers. Covering MongoDB, Express.js, React, and Node.js, this course provides you with the essential skills to build end-to-end web applications. Learn to create scalable and high-performance applications with hands-on projects and real-world scenarios. By the end of this course, you'll be able to develop robust web solutions and understand the full development lifecycle.",
    },
    {
      id: 2,
      title: "React.js",
      description:
        "Specialize in React with our focused course. Build professional-grade web applications and enhance user experiences effectively.",
      image: image2,
      PopUpImg: ReactPopUp,
      PopUpSideData: [
        "Learn how to use React components to create interactive interfaces",
        "Create and validate forms using controlled components",

        "Examine the fundamental architecture of a React application",
        "Build large-scale applications with React JS and Redux",
      ],
      fullName: "Front-end",
      popupData:
        "Specialize in front-end development with our React course. This program is tailored for those who want to master the art of building interactive and dynamic web applications. Learn about components, hooks, state management, and routing. By the end of the course, you'll have the expertise to create professional-grade web applications and enhance user experiences with React.",
    },
    {
      id: 3,
      title: "Python",
      fullName: "Basic and Advance",
      description:
        "Our Python course covers everything from basics to advanced programming. Enhance your coding skills and solve real-world problems.",
      image: image3,
      PopUpImg: PythonPopUP,
      PopUpSideData: [
        "You will be able to program in Python professionally",
        "Be able to use Python for data science and machine learning",
        "Build GUIs and Desktop applications with Python",
        "Be able to build fully fledged websites and web apps with Python",
      ],
      popupData:
        "Our Python course is perfect for those looking to enter the programming world or enhance their coding skills. Starting with the basics, you’ll progress to more complex concepts such as data structures, algorithms, and libraries for data science and web development. Through practical exercises and projects, you'll gain the confidence to tackle real-world problems and advance your career in technology.",
    },
  ];

  const handleShowCouses = (id) => {
    setShowPopUp(true);
    setIdOfCourse(id);
  };
  console.log(idOfCourse);
  const handleContactUS = () => {
    setShowContactUs(true);
  };

  return (
    <>
      <MotionAnimate
        delay={0.0}
        speed={2}
        ease={[0.75, 0.45, 0.53, 0.94]}
        reset={true}
      >
        <section className="courses">
          <h2 className="boldHding">Popular Courses</h2>
          {/* <p>Join thousands of students excelling in our top courses</p> */}
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
                    <p className="subFullName">{`(${course.fullName})`}</p>
                    <p>{course.description}</p>
                  </div>
                  <div>
                    <button
                      className="btnMain btn-primary"
                      // onClick={() => handleShowCouses(course.id)}
                      onClick={() => handleShowCouses(course)}
                    >
                      Learn More
                    </button>
                    <div className="CrashCourse" onClick={handleContactUS}>
                      Crash Course
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        {showPopUp && (
          <CoursePopUp setShowPopUp={setShowPopUp} idOfCourse={idOfCourse} />
        )}
        {showContactUs && <ContactPopUp setShowPopUp={setShowContactUs} />}
      </MotionAnimate>
    </>
  );
}

export default Courses;
