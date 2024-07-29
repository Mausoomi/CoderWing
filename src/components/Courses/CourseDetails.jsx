import React, { useEffect, useRef, useState } from "react";

import ContactPopUp from "../Home/ContactPopUp";
import { IoIosPerson } from "react-icons/io";
import { GiDuration } from "react-icons/gi";
import { FaCopy } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import { useLocation } from "react-router-dom";
import PythonIMg from "../../assets/images/pythen banner.jpg"
import MernImg from "../../assets/images/mern website banner.jpg"
import ReactImg  from "../../assets/images/react banner.jpg";


function CourseDetails() {
  const location = useLocation();
  const { idOfCourse } = location.state || {};
  const itemRefs = useRef([]);
    const { idfromHeader } = location.state || {};

  console.log(idOfCourse)
  console.log(idfromHeader)

  useEffect(() => {
    if (idOfCourse !== null && idOfCourse !== undefined) {
      const element = itemRefs.current[idOfCourse.id];
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [idOfCourse]);

  const handleShowContact = () => {
    const phoneNumber = "1234567890"; // Replace with the phone number or WhatsApp ID
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };

  // const DetailData = [
  //   { id: 1, about: "Enrolled", icon: <IoIosPerson />, num: "1200 students" },
  //   { id: 2, about: "Duration", icon: <GiDuration />, num: "Duration " },
  //   { id: 3, about: "Lectures ", icon: <FaCopy />, num: "8" },
  //   { id: 4, about: "Categories ", icon: <IoIosPerson />, num: "Technology" },
  //   {
  //     id: 5,
  //     about: "Tags",
  //     icon: <IoIosPricetags />,
  //     num: "Android, JavaScript",
  //   },
  //   { id: 6, about: "Instructor", icon: <FaCopy />, num: "Ethan Dean" },
  // ];
   
  const ShowData = [
    {
      id: 1,
      title: "MERN (MongoDB, Express.js, React, and Node.js)",
      description:
        "Master full-stack development with our MERN course. Build scalable web applications using MongoDB, Express.js, React, and Node.js.",
      popupData:
        "Our MERN course is a comprehensive program designed for aspiring full-stack developers. Covering MongoDB, Express.js, React, and Node.js, this course provides you with the essential skills to build end-to-end web applications. Learn to create scalable and high-performance applications with hands-on projects and real-world scenarios. By the end of this course, you'll be able to develop robust web solutions and understand the full development lifecycle.",

      imageBanner: MernImg,

      DetailData: [
        {
          id: 2,
          about: "Duration",
          icon: <GiDuration />,
          num: "60-100 hr/month",
        },
        // { id: 3, about: "Lectures ", icon: <FaCopy />, num: "8" },
        {
          id: 4,
          about: "Technology",
          icon: <IoIosPerson />,
          num: " MongoDB ,  Express.js , React ,  JavaScript  and  Node.js ",
        },
        {
          id: 5,
          about: "Tags",
          icon: <IoIosPricetags />,
          num: "Full-stack, backend, webdeveloper, frontenddeveloper, javascript, nodejs, react, MongoDB, Express.js  ",
        },
      ],
      innerPageDetails:
        "CodeWing's MERN course covers MongoDB, Express.js, React, and Node.js, equipping you to build dynamic web applications. Our comprehensive curriculum includes server-side programming, database management, and front-end development. Engage in practical projects to apply your skills, creating a robust portfolio that showcases your ability to develop full-stack solutions.",
    },
    {
      id: 2,
      title: "React.js (Basic and Advanced)",
      description:
        "Specialize in React with our focused course. Build professional-grade web applications and enhance user experiences effectively.",
      popupData:
        "Specialize in front-end development with our React course. This program is tailored for those who want to master the art of building interactive and dynamic web applications. Learn about components, hooks, state management, and routing. By the end of the course, you'll have the expertise to create professional-grade web applications and enhance user experiences with React.",
      imageBanner: ReactImg,
      DetailData: [
        {
          id: 2,
          about: "Duration",
          icon: <GiDuration />,
          num: "60-100 hr/month",
        },
        // { id: 3, about: "Lectures ", icon: <FaCopy />, num: "8" },
        {
          id: 4,
          about: "Technology",
          icon: <IoIosPerson />,
          num: "html, css, Javascript, react.js, tailwind ,ui etc",
        },
        {
          id: 5,
          about: "Tags",
          icon: <IoIosPricetags />,
          num: "Frontendhtml, css, Javascript, react.js, tailwind ,ui",
        },
      ],
      innerPageDetails:
        "CodeWing’s React course provides in-depth knowledge of this powerful JavaScript library. Learn to create dynamic, responsive user interfaces with a focus on component-based architecture and state management. Our expert-led modules cover hooks, context API, and advanced patterns, ensuring you can build sophisticated, high-performance web applications efficiently.",
    },
    {
      id: 3,
      title: "Python (Basic and Advanced)",
      description:
        "Our Python course covers everything from basics to advanced programming. Enhance your coding skills and solve real-world problems.",
      popupData:
        "Our Python course is perfect for those looking to enter the programming world or enhance their coding skills. Starting with the basics, you’ll progress to more complex concepts such as data structures, algorithms, and libraries for data science and web development. Through practical exercises and projects, you'll gain the confidence to tackle real-world problems and advance your career in technology.",
      imageBanner:PythonIMg,
      DetailData: [
        {
          id: 2,
          about: "Duration",
          icon: <GiDuration />,
          num: "60-100 hr/month",
        },
        // { id: 3, about: "Lectures ", icon: <FaCopy />, num: "8" },
        {
          id: 4,
          about: "Technology",
          icon: <IoIosPerson />,
          num: "Python basic and advance",
        },
        {
          id: 5,
          about: "Tags",
          icon: <IoIosPricetags />,
          num: "python, PyTorch, TensorFlow, basic Python, avdvance python",
        },
      ],
      innerPageDetails:
        "CodeWing's Python course offers a deep dive into this versatile language, ideal for web development, data science, and automation. Our project-based curriculum ensures hands-on experience with real-world applications. You’ll learn to write clean, efficient code and gain proficiency in libraries like Pandas, NumPy, and Flask, preparing you for various tech careers.",
    },
  ];

  return (
    <>
      <div>
        {" "}
        <div className="MainBoxDetailPg">
          {Array.isArray(ShowData) && ShowData.length > 0 ? (
            ShowData.map((item, index) => (
              <div
                className="CourseDetailPg"
                key={index}
                ref={(el) => (itemRefs.current[item.id] = el)}
              >
                <h1 className="boldHding">{item.title}</h1>
                <div className="MainCoursepg">
                  <div className="courseBox1">
                    <div className="pb-4 CourseName">
                      <img src={item.imageBanner} alt="banner" />
                    </div>
                    <div>
                      <button
                        className="btnMain btn-primary"
                        onClick={handleShowContact}
                      >
                        Download Curriculum
                      </button>
                      <h3 className="py-4">Course Description </h3>
                      <div className="descrptnBox">
                        <div>
                          <p className="topPara">{item.innerPageDetails}</p>
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </div>

                  <div className="courseBox2">
                    <h3>Course Features</h3>
                    <hr style={{ borderTop: "1px solid #ffff" }} />
                    <div className="sideBarBoxMain">
                      {" "}
                      <div className="sideBar">
                        {Array.isArray(item.DetailData) &&
                        item.DetailData.length > 0 ? (
                          item.DetailData.map((detailItem, index) => (
                            <div className="sideItem" key={index}>
                              <div className="icons"> {detailItem.icon}</div>
                              <div className="technologies">
                                {`${detailItem.about}:`}
                              </div>
                              <div className="moreItem">{detailItem.num}</div>
                            </div>
                          ))
                        ) : (
                          <p>No course details available.</p>
                        )}
                      </div>
                      <div className="d-flex justify-content-center my-4">
                        <button
                          className="btnMain btn-primary"
                          onClick={handleShowContact}
                        >
                          ENROLL COURSE
                        </button>
                      </div>
                    </div>

                    {/* <p className="text-center price">Price : $0.000</p> */}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No courses available.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default CourseDetails;
