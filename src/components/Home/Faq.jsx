import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { MotionAnimate } from "react-motion-animate";

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is CoderWing?",
      answer:
        "CoderWing is an online learning platform offering a wide range of courses in cutting-edge technologies and skills. Our mission is to empower individuals by providing high-quality, accessible education that prepares them for the future.",
    },
    {
      question: "Who are the instructors?",
      answer:
        "Our instructors are industry experts with extensive experience in their respective fields. They bring real-world knowledge and practical insights to help you learn effectively and stay updated with current trends.",
    },
    {
      question: "How can I enroll in a course?",
      answer:
        "To enroll in a course, simply visit our website, choose your desired course, and follow the enrollment process. You can sign up, make the payment, and start learning immediately.",
    },
    {
      question: "Do I get a certificate upon completion?",
      answer:
        "Yes, upon completing your course, you will receive a certificate from CoderWing. This certificate can be shared with potential employers and added to your professional portfolio.",
    },
    {
      question: "Are there any prerequisites for the courses?",
      answer:
        "Some courses may have prerequisites, which will be mentioned in the course description. Generally, our courses are designed to cater to different skill levels, from beginners to advanced learners.",
    },
    {
      question: "Can I access the materials after completion?",
      answer:
        "Once you enroll in a course, you will have lifetime access to the course materials. You can revisit the content anytime to refresh your knowledge.",
    },
    {
      question: "What are the benefits of taking courses?",
      answer:
        "CoderWing offers a range of benefits for learners Comprehensive Curriculum: Courses are designed by industry experts, ensuring up-to-date and relevant content.Flexibility: Learn at your own pace with access to materials 24/7.Certification: Gain certificates that can enhance your resume and career prospects. Support: Access to a community and expert support for any queries or difficulties",
    },
    {
      question: "Who can join courses on CoderWing?",
      answer:
        "CoderWing courses are open to a wide audience:Students: Those looking to supplement their education with additional skills.Professionals: Individuals seeking to upskill or transition into new career paths.Lifelong Learners: Anyone interested in expanding their knowledge and skills for personal development.Organizations: Companies looking to provide training and development for their employees.",
    },
  ];

  const openWhatsAppChat = () => {
    const phoneNumber = "1234567890"; // Replace with the phone number or WhatsApp ID
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };
  
  return (
    <MotionAnimate
      delay={0.4}
      speed={2}
      ease={[0.75, 0.45, 0.53, 0.94]}
      reset={true}
    >
      <section className="faqs">
        <h2 className="boldHding">Frequently Asked Questions</h2>
        <div className="container faqs__container">
          {faqData.map((faq, index) => (
            <article
              className={`faq ${openIndex === index ? "open" : ""}`}
              key={index}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq__icon">
                {/* <i
                className={`uil ${
                  openIndex === index ? "uil-minus" : "uil-plus"
                }`}
              ></i> */}
                <div>{openIndex === index ? <FaMinus /> : <FaPlus />}</div>
              </div>
              <div className="question__answer">
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            </article>
          ))}
        </div>
        <div id="faqSection" className="FaqBtns">
          <button className="btnMain btn-primary" onClick={openWhatsAppChat}>
            Ask a Question
          </button>
        </div>
      </section>
    </MotionAnimate>
  );
}

export default Faq;
