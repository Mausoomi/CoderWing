import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avatar1 from "../../assets/images/text1.jpg";
import avatar2 from "../../assets/images/test2.jpg";
import avatar3 from "../../assets/images/text3.jpg";
import avatar4 from "../../assets/images/text4.jpg";
import avatar5 from "../../assets/images/test5.jpg";
import avatar6 from "../../assets/images/test6.jpg";
import avatar7 from "../../assets/images/test7.jpg";
import avatar8 from "../../assets/images/test8.jpg";
import avatar9 from "../../assets/images/test9.jpg";
import { MotionAnimate } from "react-motion-animate";
import ContactPopUp from "./ContactPopUp";

const testimonials = [
  {
    avatar: avatar1,
    name: "Kratagya Sharma",
    role: "Student(Medicaps)",
    testimonial:
      "The staff has been very supportive since our training + internship program began. The mentor assigned (Aman sir ) is very supportive he solved all kinds of doubts. It's a great experience with CoderWing.",
  },
  {
    avatar: avatar2,
    name: "Moin Ahmed Qureshi",
    role: "Web Developer",
    testimonial:
      "codeWing provided a better platform for the training and internship program with fulfilling all the norms of the Medicaps University. We learned many of the basics we were unaware of, and the guide also taught.",
  },
  {
    avatar: avatar3,
    name: "Kushal Rathore",
    role: "Student(Medicaps)",
    testimonial:
      "Learn many new things not only related to technical stuff like react, HTML, CSS, bootstrap, and node but also other industrial aspects such as communication, formal mailing, job seeking, GD, etc.Placed – In TCS",
  },
  {
    avatar: avatar4,
    name: "Mili Singh Mourya",
    role: "Frontend Developer",
    testimonial:
      "Learned a lot of things related to cooperative working and technical skills. The atmosphere is up to the mark with so much understanding and flexibility.",
  },
  {
    avatar: avatar5,
    name: "Isha Kanoongo",
    role: "Student(Medicaps)",
    testimonial:
      "I had a very good experience in this company. Trainers are trained very well and provided me with the best of the knowledge. I felt pleasurable to recommend the internship to others too.",
  },
  {
    avatar: avatar6,
    name: "Nilesh Parihar",
    role: "Web Developer",
    testimonial:
      "Overall experience was good . Thanks for providing such a wonderful platform, the office culture as well as work environment of CoderWing is also great.",
  },
  {
    avatar: avatar7,
    name: "Nadiv Londhe",
    role: "Student(Medicaps)",
    testimonial:
      "Overall Nice experience . The technical and cooperative guidance provided to us was a lot worthwhile. I got to add some new skills to my book only because of CoderWing. ",
  },
  {
    avatar: avatar8,
    name: "Muskan Yadav",
    role: "Full Stack Developer",
    testimonial:
      "CoderWing provides the best platform for Internships and training. We have learned many new technologies.This training and internship program made me more confident about my skills than before.",
  },
  {
    avatar: avatar9,
    name: "Muskan Nayak",
    role: "Student(Medicaps)",
    testimonial:
      "Cool environment, and employees are very supportive.This training and internship program made me more confident about my skills than before. ",
  },
];

function Testimonials() {
  const [showPopUp, setShowPopUp] = useState(false);

  const handleShowContact = () => {
    setShowPopUp(true);
  };
  const settings = {
    arrows: false,

    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div>
      <MotionAnimate
        delay={0.4}
        speed={2}
        ease={[0.75, 0.45, 0.53, 0.94]}
        reset={true}
      >
        {" "}
        <section className="container testimonials__container ">
          <h2 className="boldHding">Student's Voice</h2>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial">
                <div className="avatar">
                  <img
                    src={testimonial.avatar}
                    alt={`${testimonial.name}'s Avatar`}
                  />
                </div>
                <div className="testimonial__info">
                  <h5>{testimonial.name}</h5>
                  <small>{testimonial.role}</small>
                </div>
                <div className="testimonial__body">
                  <p>{testimonial.testimonial}</p>
                </div>
              </div>
            ))}
          </Slider>
          <div id="faqSection" className="FaqBtns">
            <button className="btnMain btn-primary" onClick={handleShowContact}>
              Join Now
            </button>
          </div>
        </section>
      </MotionAnimate>

      {showPopUp && <ContactPopUp setShowPopUp={setShowPopUp} />}
    </div>
  );
}

export default Testimonials;
