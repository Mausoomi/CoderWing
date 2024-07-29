

import React, { useState } from "react";

import logo1 from "../../assets/images/logo1.png";
import logo2 from "../../assets/images/logo2.png";
import logo3 from "../../assets/images/logo3.png";
import logo4 from "../../assets/images/logo-3.png";
import logo5 from "../../assets/images/logo-4.png";



function MainContactUs() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    contactNumber: "",
    interest: "",
    education: "",
    remark: "",
    cv: null,
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formState.name) newErrors.name = "Name is required";
    if (!formState.email) newErrors.email = "Email is required";
    if (
      !formState.contactNumber ||
      formState.contactNumber.length !== 10 ||
      !/^\d{10}$/.test(formState.contactNumber)
    )
      newErrors.contactNumber = "Contact number must be exactly 10 digits";
    if (!formState.interest) newErrors.interest = "Interest is required";
    if (!formState.education) newErrors.education = "Education is required";
    if (!formState.remark) newErrors.remark = "Remark is required";
    if (!formState.cv) newErrors.cv = "CV is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormState({
      ...formState,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit form logic here
      console.log("Form submitted successfully:", formState);
    } else {
      console.log("Validation failed");
    }
  };

  return (
    <div>
      <div className="page-banner contact-page section-sp2">
        <div className="container">
          <div className="contactFormBox">
            <div className="formBoxone">
              <div className="bg-primary text-white contact-info-bx">
                <h2 className="m-b10 title-head">
                  Contact <span>Information</span>
                </h2>
                <div className="imgIconBox">
                  <img src={logo1} alt="logo" />
                  <img src={logo2} alt="logo" />
                  <img src={logo3} alt="logo" />
                  <img src={logo4} alt="logo" />
                  <img src={logo5} alt="logo" />
                </div>

                <div className="widget widget_getintuch">
                  <ul>
                    <li>
                      <i className="ti-mobile"></i>0800-123456 (24/7 Support
                      Line)
                    </li>
                    <li>
                      <i className="ti-email"></i>info@example.com
                    </li>
                  </ul>
                </div>
                <h5 className="m-t0 m-b20">Follow Us</h5>
                <ul className="list-inline contact-social-bx d-flex">
                  <li>
                    <a href="#" className="btn outline radius-xl">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="btn outline radius-xl">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="btn outline radius-xl">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="formBoxTwo">
              <form className="contact-bx ajax-form" onSubmit={handleSubmit}>
                <div className="ajax-message"></div>
                <div className="heading-bx left">
                  <h2 className="title-head">
                    Get In <span>Touch</span>
                  </h2>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page
                  </p>
                </div>
                <div className="row placeani getInTochFormMargin">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Your Name</label>
                      <input
                        name="name"
                        type="text"
                        className="form-control valid-character"
                        value={formState.name}
                        onChange={handleChange}
                      />
                      {errors.name && (
                        <span className="text-danger">{errors.name}</span>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <div>
                        <label>Your Email address</label>
                        <input
                          name="email"
                          type="email"
                          className="form-control"
                          value={formState.email}
                          onChange={handleChange}
                        />
                        {errors.email && (
                          <span className="text-danger">{errors.email}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Your Contact Number</label>
                      <input
                        name="contactNumber"
                        type="text"
                        className="form-control"
                        placeholder="Your Phone Number"
                        value={formState.contactNumber}
                        onChange={handleChange}
                      />
                      {errors.contactNumber && (
                        <span className="text-danger">
                          {errors.contactNumber}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-12"></div>

                  <div className="row getInTochFormMargin">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>Interested In</label>
                        <select
                          className="custom-select"
                          name="interest"
                          value={formState.interest}
                          onChange={handleChange}
                        >
                          <option value="" disabled>
                            Open this select menu
                          </option>
                          <option value="MERN">MERN (Developer Course)</option>
                          <option value="React.js">
                            React.js (Developer Course)
                          </option>
                          <option value="Python">
                            Python (Developer Course)
                          </option>
                        </select>
                        {errors.interest && (
                          <span className="text-danger">{errors.interest}</span>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>Educational Background</label>
                        <select
                          className="custom-select"
                          name="education"
                          value={formState.education}
                          onChange={handleChange}
                        >
                          <option value="" disabled>
                            Select One
                          </option>
                          <option value="IT">IT</option>
                          <option value="Non-IT">Non-IT</option>
                        </select>
                        {errors.education && (
                          <span className="text-danger">
                            {errors.education}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="row getInTochFormMargin">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>Remark (if any)</label>
                        <input
                          name="remark"
                          type="text"
                          placeholder="Remark (if any)"
                          className="form-control int-value"
                          value={formState.remark}
                          onChange={handleChange}
                        />
                        {errors.remark && (
                          <span className="text-danger">{errors.remark}</span>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>Attach your CV</label>
                        <input
                          name="cv"
                          type="file"
                          placeholder="Your CV"
                          className="form-control int-value"
                          onChange={handleChange}
                        />
                        {errors.cv && (
                          <span className="text-danger">{errors.cv}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <button
                      name="submit"
                      type="submit"
                      value="Submit"
                      className="btn button-md submitGetIntouch"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
     
  
    </div>
  );
}

export default MainContactUs;

























// import React from "react";

// import logo1 from "../../assets/images/logo1.png";
// import logo2 from "../../assets/images/logo2.png";
// import logo3 from "../../assets/images/logo3.png";
// import logo4 from "../../assets/images/logo-3.png";

// import logo5 from "../../assets/images/logo-4.png";

// function MainContactUs() {
//   return (
//     <div>
//       {" "}
//       <div className="page-banner contact-page section-sp2">
//         <div className="container">
//           <div className="contactFormBox">
//             <div className="formBoxone">
//               <div className="bg-primary text-white contact-info-bx">
//                 <h2 className="m-b10 title-head">
//                   Contact <span>Information</span>
//                 </h2>
//                 <div className="imgIconBox">
//                   <img src={logo1} alt="Iogo" />
//                   <img src={logo2} alt="Iogo" />
//                   <img src={logo3} alt="Iogo" />
//                   <img src={logo4} alt="Iogo" />
//                   <img src={logo5} alt="Iogo" />
//                 </div>

//                 <div className="widget widget_getintuch">
//                   <ul>
//                     {/* <li>
//                       <i className="ti-location-pin"></i>75k Newcastle St. Ponte
//                       Vedra Beach, FL 309382 New York
//                     </li> */}
//                     <li>
//                       <i className="ti-mobile"></i>0800-123456 (24/7 Support
//                       Line)
//                     </li>
//                     <li>
//                       <i className="ti-email"></i>info@example.com
//                     </li>
//                   </ul>
//                 </div>
//                 <h5 className="m-t0 m-b20">Follow Us</h5>
//                 <ul className="list-inline contact-social-bx d-flex">
//                   <li>
//                     <a href="#" className="btn outline radius-xl">
//                       <i className="fa fa-instagram"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="btn outline radius-xl">
//                       <i className="fa fa-linkedin"></i>
//                     </a>
//                   </li>{" "}
//                   <li>
//                     <a href="#" className="btn outline radius-xl">
//                       <i className="fa fa-facebook"></i>
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="formBoxTwo">
//               <form
//                 className="contact-bx ajax-form"
//                 action="http://educhamp.themetrades.com/demo/assets/script/contact.php"
//               >
//                 <div className="ajax-message"></div>
//                 <div className="heading-bx left">
//                   <h2 className="title-head ">
//                     Get In <span>Touch</span>
//                   </h2>
//                   <p>
//                     It is a long established fact that a reader will be
//                     distracted by the readable content of a page
//                   </p>
//                 </div>
//                 <div className="row placeani getInTochFormMargin">
//                   <div className="col-lg-12">
//                     <div className="form-group">
//                       <label>Your Name</label>
//                       <input
//                         name="name"
//                         type="text"
//                         required
//                         className="form-control valid-character"
//                       />
//                     </div>
//                   </div>

//                   <div className="col-lg-12">
//                     <div className="form-group">
//                       <div>
//                         <label>Your Email address</label>
//                         <input
//                           name="email"
//                           type="email"
//                           className="form-control"
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-lg-12">
//                     <div className="form-group">
//                       <label>Your Contact Number</label>
//                       <input
//                         name="email"
//                         type="text"
//                         className="form-control"
//                         placeholder="Your Phone Number"
//                       />
//                     </div>
//                   </div>
//                   <div className="col-lg-12"></div>
//                   <div className="row getInTochFormMargin">
//                     <div className="col-lg-6">
//                       <div className="form-group">
//                         <label>Interested In</label>
//                         <select
//                           className="custom-select"
//                           name="interest"
                      
//                         >
//                           <option value="" disabled>
//                             Open this select menu
//                           </option>
//                           <option value="1">MERN{"(Developer Course)"}</option>
//                           <option value="2">
//                             React.js{"(Developer Course)"}
//                           </option>
//                           <option value="3">
//                             Python{"(Developer Course)"}
//                           </option>
//                         </select>
                     
//                       </div>
//                     </div>
//                     <div className="col-lg-6">
//                       <div className="form-group">
//                         <label>Educational Background</label>

//                         <select className="custom-select">
//                           <option value="" disabled>
//                             Select One
//                           </option>
//                           <option className="text-dark" value="1">
//                             IT
//                           </option>
//                           <option className="text-dark" value="2">
//                             Non-It
//                           </option>
//                         </select>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="row getInTochFormMargin">
//                     <div className="col-lg-6">
//                       <div className="form-group">
//                         <label>Remark{"(if any)"}</label>
//                         <input
//                           name="phone"
//                           type="text"
//                           placeholder="Remark(if any)"
//                           required
//                           className="form-control int-value"
//                         />
//                       </div>
//                     </div>
//                     <div className="col-lg-6">
//                       <div className="form-group">
//                         <label>Attach your CV</label>
//                         <input
//                           name="phone"
//                           type="file"
//                           placeholder="Your Phone"
//                           required
//                           className="form-control int-value"
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-lg-12">
//                     <button
//                       name="submit"
//                       type="submit"
//                       value="Submit"
//                       className="btn button-md submitGetIntouch"
//                     >
//                       {" "}
//                       Submit
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <div className="py-4">
//         <ParallaxText baseVelocity={-10}>
//           <FaReact />
//           {"  "}
//           <FaPython />
//           {"  "}
//           <DiJavascript />
//           {"  "}
//           <FaDatabase /> {"  "}
//           <DiJavascript /> {"  "}
//           <FaJava />
//         </ParallaxText>

//         <ParallaxText baseVelocity={10}>
//           <FaReact />
//           {"  "}
//           <FaPython />
//           {"  "}
//           <DiJavascript />
//           {"  "}
//           <FaDatabase /> {"  "}
//           <DiJavascript /> {"  "}
//           <FaJava /> {"  "}
//         </ParallaxText>
//       </div> */}
//     </div>
//   );
// }

// export default MainContactUs;
