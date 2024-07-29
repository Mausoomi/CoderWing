import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import "../../assets/css/Courses.css";
import { useNavigate } from "react-router-dom";
import "../../../src/assets/css/contact.css";

function ContactPopUp({ setShowPopUp }) {
  const [closePopUp, setClosePopUp] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    interest: "",
    education: "",
    location: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleForgotPasswordClose = (e) => {
    e.preventDefault();
    setClosePopUp(true);
    setShowPopUp(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.fullName) tempErrors.fullName = "Full Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Email is invalid";
    if (!formData.phone) tempErrors.phone = "Phone number is required";
    if (formData.phone.length !== 10)
      tempErrors.phone = "Phone number must be 10 digits";
    if (!formData.interest) tempErrors.interest = "Interest is required";
    if (!formData.education)
      tempErrors.education = "Current Education is required";
    if (!formData.location)
      tempErrors.location = "Current Location is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission
      console.log("Form submitted successfully", formData);
    }
  };

  return (
    <div>
      <div
        className={`popup-backdrop ${closePopUp ? "closepopUp" : "openpopUp"}`}
      >
        <div className="ContactUspp">
          <h1 className="boldHding">Get In Touch</h1>
          <div className="innerPopupBox">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && (
                  <span className="error">{errors.fullName}</span>
                )}
              </div>

              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label>Contact Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <span className="error">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label>Interested In</label>
                <select
                  className="custom-select"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Open this select menu
                  </option>
                  <option value="1">MERN{"(Developer Course)"}</option>
                  <option value="2">React.js{"(Developer Course)"}</option>
                  <option value="3">Python{"(Developer Course)"}</option>
                </select>
                {errors.interest && (
                  <span className="error">{errors.interest}</span>
                )}
              </div>

              <div className="form-group">
                <label>Current Education</label>
                <input
                  type="text"
                  className="form-control"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                />
                {errors.education && (
                  <span className="error">{errors.education}</span>
                )}
              </div>

              <div className="form-group">
                <label>Current Location</label>
                <input
                  type="text"
                  className="form-control"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                />
                {errors.location && (
                  <span className="error">{errors.location}</span>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ marginTop: "10px" }}
              >
                Submit
              </button>
            </form>
          </div>

          <button className="cross" onClick={handleForgotPasswordClose}>
            <RxCross2 />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactPopUp;

// import React, { useState } from "react";
// import { RxCross2 } from "react-icons/rx";
// import "../../assets/css/Courses.css";
// import courseImg from "../../assets/images/CourseIMG.jpg";
// import { TiTickOutline } from "react-icons/ti";
// import { useNavigate } from "react-router-dom";
// import "../../../src/assets/css/contact.css";

// function ContactPopUp({ setShowPopUp }) {
//   const [closePopUp, setClosePopUp] = useState(false);
//   const navigate = useNavigate();

//   const handleForgotPasswordClose = (e) => {
//     e.preventDefault();
//     setClosePopUp(true);
//     setShowPopUp(false);
//   };

//   return (
//     <div>
//       <div
//         className={`popup-backdrop ${closePopUp ? "closepopUp" : "openpopUp"}`}
//       >
//         <div className="ContactUspp">
//           <h1 className="boldHding">Get In Touch</h1>
//           <div className="innerPopupBox">
//             <form>
//               <div className="form-group">
//                 <label>Full Name</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   aria-describedby="emailHelp"
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Email address</label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   aria-describedby="emailHelp"
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Contact Number</label>
//                 <input type="text" className="form-control" />
//               </div>

//               <div className="form-group">
//                 <label>Interested In</label>
//                 <select className="custom-select" defaultValue="">
//                   <option value="" disabled>
//                     Open this select menu
//                   </option>
//                   <option value="1">React.js</option>
//                   <option value="2">MERN</option>
//                   <option value="3">Python</option>
//                 </select>
//               </div>

//               <div className="form-group">
//                 <label>Current Education</label>
//                 <input type="text" className="form-control" />
//               </div>

//               <div className="form-group">
//                 <label>Current Location</label>
//                 <input type="text" className="form-control" />
//               </div>

//               <button
//                 type="submit"
//                 className="btn btn-primary"
//                 style={{ marginTop: "10px" }}
//               >
//                 Submit
//               </button>
//             </form>
//           </div>

//           <button className="cross" onClick={handleForgotPasswordClose}>
//             <RxCross2 />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ContactPopUp;
