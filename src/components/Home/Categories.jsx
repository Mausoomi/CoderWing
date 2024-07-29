import React, { useState } from "react";
import { TbCoinBitcoin } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import ContactPopUp from "./ContactPopUp";
import { MotionAnimate } from "react-motion-animate";
// import reactimg from "../../assets/images/react.png"
// import pythonImg from "../../assets/images/python.png";
// import UIUX from "../../assets/images/UIUX.png";
// import bloclc from "../../assets/images/data.png";
// import datasciene from "../../assets/images/block.png";
// import mern from "../../assets/images/MERN.png";
import reactimg from "../../assets/images/ReactIcon.png";
import pythonImg from "../../assets/images/Group 27 (2).png";
import UIUX from "../../assets/images/Group 30.png";
import bloclc from "../../assets/images/unique icon.png";
import datasciene from "../../assets/images/Group 23.png";
import mern from "../../assets/images/Group 28.png";


// const categoriesData = [
//   {
//     title: "Blockchain",
//     description:
//       "Master blockchain technology, gain hands-on experience, and become a proficient blockchain developer quickly.",
//   },
//   {
//     title: "MERN",
//     description:
//       "Master MERN stack: MongoDB, Express.js, React, Node.js. Build dynamic, robust web applications.",
//   },
//   {
//     title: "React",
//     description:
//       "Specialize in front-end development with React. Build interactive and high-performance web applications.",
//   },
//   {
//     title: "Python",
//     description:
//       "Unlock Python's potential: basics to advanced, coding, data analysis, and machine learning skills.",
//   },
//   {
//     title: "UI/UX",
//     description:
//       "Master UI/UX design to create intuitive, user-centric, and visually pleasing digital products.",
//   },
//   {
//     title: "Data science",
//     description:
//       "Become a data expert. Master analysis, visualization, and machine learning to solve complex problems.",
//   },
// ];
const categoriesData = [
  {
    title: "Blockchain",
    img: bloclc,
    description:
      "A decentralized digital ledger technology for secure and transparent transactions.",
  },
  {
    title: "MERN",
    img: mern,
    description:
      "MERN: MongoDB, Express.js, React, Node.js - Full-stack JavaScript framework.",
  },
  {
    title: "React",
    img: reactimg,
    description:
      "React is a JavaScript library for building user interfaces efficiently.",
  },
  {
    title: "Python",
    img: pythonImg,
    description:
      "Python is a powerful, versatile programming language for many applications.",
  },
  {
    title: "UI/UX",
    img: UIUX,
    description:
      "Enhancing user satisfaction through effective, intuitive interface design.",
  },
  {
    title: "Data science",
    img: datasciene,
    description: "Analyzing data to extract insights and make decisions.",
  },
];
function Categories() {
  const [showPopUp, setShowPopUp] = useState(false);

  const handleShowCouses = () => {
    setShowPopUp(true);
  };
  const navigate = useNavigate();
  return (
    <>
      <MotionAnimate
        delay={0.4}
        speed={2}
        ease={[0.75, 0.45, 0.53, 0.94]}
        reset={true}
      >
        {" "}
        <section className="categories">
          <div className="container categories__container">
            <div className="categories__left">
              <h1 className="boldHding" style={{ padding: "0px !important" }}>
                Courses
              </h1>
              <p className="topPara">
                At CoderWing, we offer a comprehensive range of courses designed
                to equip you with the skills needed to excel in today’s
                fast-paced digital world. Explore our expertly crafted programs
                and embark on a journey of lifelong learning.
              </p>
              <button
                className="btnMain btn-primary"
                onClick={handleShowCouses}
              >
                Enquiry
              </button>
            </div>

            <div className="categories__right">
              {categoriesData.map((category, index) => (
                <article
                  className="category"
                  key={index}
                  onClick={handleShowCouses}
                >
                  <div className="category__icon ">
                    <img src={category.img} alt="icons" />
                  </div>
                  <h5>{category.title}</h5>
                  <p>{category.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        {showPopUp && <ContactPopUp setShowPopUp={setShowPopUp} />}
      </MotionAnimate>
    </>
  );
}

export default Categories;

// import React from "react";
// import { TbCoinBitcoin } from "react-icons/tb";

// function Categories() {
//   return (
//     <section className="categories">
//       <div className="container categories__container">
//         <div className="categories__left">
//           <h1>Categories</h1>
//           <p>
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
//             praesentium facilis voluptatum illum blanditiis distinctio nulla
//             quisquam enim quos fugit accusamus, nesciunt doloremque tempora quod
//             quo incidunt sint! Iure, reiciendis!
//           </p>
//           <button className="btnMain btn-primary" >
//             Learn More
//           </button>
//         </div>

//         <div className="categories__right">
//           <article className="category">
//             <div className="category__icon">
//               <TbCoinBitcoin className="w-[16px] h-[16px]" />
//             </div>
//             <h5>Blockchain</h5>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing iure laborum
//               animi.
//             </p>
//           </article>

//           <article className="category">
//             <div className="category__icon">
//               <TbCoinBitcoin className="w-[16px] h-[16px]" />
//             </div>
//             <h5>Graphic Design</h5>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing iure laborum
//               animi.
//             </p>
//           </article>

//           <article className="category">
//             <span className="category__icon">
//               <div className="category__icon">
//                 <TbCoinBitcoin className="w-[16px] h-[16px]" />
//               </div>
//             </span>
//             <h5>Finance</h5>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing iure laborum
//               animi.
//             </p>
//           </article>

//           <article className="category">
//             <span className="category__icon">
//               <div className="category__icon">
//                 <TbCoinBitcoin className="w-[16px] h-[16px]" />
//               </div>
//             </span>
//             <h5>Marketing</h5>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing iure laborum
//               animi.
//             </p>
//           </article>

//           <article className="category">
//             <span className="category__icon">
//               <div className="category__icon">
//                 <TbCoinBitcoin className="w-[16px] h-[16px]" />
//               </div>
//             </span>
//             <h5>Music</h5>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing iure laborum
//               animi.
//             </p>
//           </article>

//           <article className="category">
//             <span className="category__icon">
//               <div className="category__icon">
//                 <TbCoinBitcoin className="w-[16px] h-[16px]" />
//               </div>
//             </span>
//             <h5>Business</h5>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing iure laborum
//               animi.
//             </p>
//           </article>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Categories;
