import React, { useEffect, useState } from "react";
import logo from "../../../src/assets/images/MAinLogo.png";
import { RiInstagramFill } from "react-icons/ri";
import { CiPhone } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import adv from "../../assets/images/adv.jpg";
import ContactPopUp from "./ContactPopUp";
import { RxCross2 } from "react-icons/rx";

const Header = ({ scrollToFAQ }) => {
  const [isFixed, setIsFixed] = useState(false);
  const [headerFix, setHeadderFix] = useState(false);
  const [openSideBar, setOpenSideBAr] = useState(false);
  const [SideBarOpen, setSideBarOpen] = useState(false);
  const [navigateToFAQ, setNavigateToFAQ] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const [color, setcolor] = useState(true)
  const navigate = useNavigate();
  let location = useLocation();
  console.log(location);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      // Determine when to apply the fixed class
      if (scrollTop > 100) {
        // Adjust this value as needed
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (location.pathname === "/") {
      setHeadderFix(false);

    }
    if (location.pathname === "/IT-training-course-indore") {
      setHeadderFix(true);
      setNavigateToFAQ(true);
      setcolor(false)
    }
    if (location.pathname === "/Contact-Us") {
      setHeadderFix(true);
      setNavigateToFAQ(true);
       setcolor(false);
    }
    if (location.pathname === "/Price&Policy") {
      setHeadderFix(true);
      setNavigateToFAQ(true);
       setcolor(false);
    }
    if (location.pathname === "/Terms&Conditions") {
      setHeadderFix(true);
      setNavigateToFAQ(true);
       setcolor(false);
    }
    if (location.pathname === "/About-us") {
      setHeadderFix(true);
      setNavigateToFAQ(true);
       setcolor(false);
    }
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleAboutUs = () => {
    navigate("/About-us");
    setOpenSideBAr(false);
  };

  const handleFaq = () => {
    navigate("/");
    console.log(navigateToFAQ);
  };

  console.log(navigateToFAQ);

  const handleShowCouses = () => {
    setShowPopUp(true);
  };
  return (
    <header
      className={`header rs-nav header-transparent ${
        headerFix ? "" : "posAbosolute"
      }`}
    >
      <div className="top-bar">
        <div className="container">
          <div className="tobBarBox">
            <div className="topbar-left">
              <ul>
                <li>
                  <button
                    className={`askQue ${
                      color ? "blackColor" : "whiteColor"
                    }  `}
                    onClick={scrollToFAQ}
                  >
                    <i className="fa fa-question-circle"></i>Ask a Question
                  </button>
                </li>
                <li className={` ${color ? "blackColor" : "whiteColor"}  `}>
                  <a
                    href="mailto:recipient@example.com?subject=Your%20Subject&body=Your%20Message"
                    className={` ${color ? "blackColor" : "whiteColor"}  `}
                  >
                    <i
                      className={`fa fa-envelope-o ${
                        color ? "blackColor" : "whiteColor"
                      }  `}
                    ></i>
                    Support@website.com
                  </a>
                </li>
                <li className={` ${color ? "blackColor" : "whiteColor"}  `}>
                  <a
                    href="tel:+1234567890"
                    className={` ${color ? "blackColor" : "whiteColor"}  `}
                  >
                    <i class="fa fa-phone"></i>
                    9999999999999
                  </a>
                </li>
              </ul>
            </div>
            <div className="topbar-right">
              <ul>
                <li className={` ${color ? "blackColor" : "whiteColor"}  `}>
                  <a
                    onClick={() => navigate("/Contact-Us")}
                    className={`getInternship ${
                      color ? "blackColor" : "whiteColor"
                    }  `}
                  >
                    Get Internship opportunity
                  </a>
                </li>

                <li className={` ${color ? "blackColor" : "whiteColor"}  `}>
                  <a className={` ${color ? "blackColor" : "whiteColor"}  `}>
                    Login
                  </a>
                </li>
                <li className={` ${color ? "blackColor" : "whiteColor"}  `}>
                  <a className={` ${color ? "blackColor" : "whiteColor"}  `}>
                    Register
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky-header navbar-expand-lg">
        <div className={`menu-bar clearfix ${isFixed ? "hederFixed" : ""}`}>
          <div className="container clearfix">
            <div className="menu-logo">
              <a onClick={isFixed ? scrollToTop : () => navigate("/")}>
                <img src={logo} alt="Logo" />
              </a>
            </div>

            {openSideBar ? (
              <div
                class="navbar-toggler collapsed menuicon justify-content-end"
                onClick={() => setOpenSideBAr(!openSideBar)}
              >
                <RxCross2 style={{ fontSize: "22px" }} />
              </div>
            ) : (
              <button
                class="navbar-toggler collapsed menuicon justify-content-end"
                type="button"
                data-toggle="collapse"
                data-target="#menuDropdown"
                aria-controls="menuDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={() => setOpenSideBAr(!openSideBar)}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            )}

            <div className="secondary-menu">
              <div className="secondary-inner">
                <ul>
                  <li>
                    <a className="btn-link">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a className="btn-link">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a className="btn-link">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="nav-search-bar">
              <form action="#">
                <input
                  name="search"
                  value=""
                  type="text"
                  className="form-control"
                  placeholder="Type to search"
                />
                <span>
                  <i className="ti-search"></i>
                </span>
              </form>
              <span id="search-remove">
                <i className="ti-close"></i>
              </span>
            </div>
            <div
              className="menu-links navbar-collapse collapse justify-content-start"
              id="menuDropdown"
            >
              <div className="menu-logo">
                <a onClick={() => navigate("/")}>
                  <img src={logo} alt="Logo" />
                </a>
              </div>
              <ul className="nav navbar-nav">
                <li className="active">
                  <a onClick={() => navigate("/IT-training-course-indore")}>
                    Our Courses <i className="fa fa-chevron-down"></i>
                  </a>
                  <ul class="sub-menu add-menu">
                    <li class="add-menu-left">
                      <h5 class=" menu-adv-title">Our Courses</h5>
                      <ul>
                        <li
                          onClick={() => navigate("/IT-training-course-indore")}
                        >
                          <a>MERN{"(Full-Stack)"} </a>
                        </li>
                        <li
                          onClick={() => navigate("/IT-training-course-indore")}
                        >
                          <a>React{"(Front-end)"}</a>
                        </li>
                        <li
                          onClick={() => navigate("/IT-training-course-indore")}
                        >
                          <a>Python{"(Basic to Advance)"}</a>
                        </li>
                      </ul>
                    </li>
                    <li
                      class="add-menu-right"
                      onClick={() => navigate("/Contact-Us")}
                    >
                      <div className="coursesImg">
                        <div className="BgCoursesDropDown"> 
                          
                          <p className="freeOnline">Free Online Support</p>
                          <button
                            className="join Now"
                            onClick={handleShowCouses}
                          >
                            Join Now
                          </button>
                        </div>
                      </div>
                      {/* <img src={adv} alt="ad" /> */}
                    </li>
                  </ul>
                </li>
                <li className="active">
                  <a>
                    Hire From Us <i className="fa fa-chevron-down"></i>
                  </a>
                  <ul className="sub-menu">
                    <li onClick={() => navigate("/About-us")}>
                      <a>About</a>
                    </li>

                    <li>
                      <a onClick={navigateToFAQ ? handleFaq : scrollToFAQ}>
                        FAQ's
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-dashboard " style={{ color: "#efbb20" }}>
                  <p className="joinus" onClick={() => navigate("/Contact-Us")}>
                    Join Us Today
                  </p>
                </li>
              </ul>
              <div className="nav-social-link" style={{ color: "#efbb20" }}>
                <a>
                  <i
                    className="fa fa-facebook"
                    style={{ color: "#efbb20" }}
                  ></i>
                </a>
                <a>
                  <RiInstagramFill style={{ color: "#efbb20" }} />
                </a>
                <a>
                  <i
                    className="fa fa-linkedin"
                    style={{ color: "#efbb20" }}
                  ></i>
                </a>
              </div>
            </div>

            {openSideBar ? (
              <div
                class="menu-links navbar-collapse collapse justify-content-start show"
                id="menuDropdown"
              >
                <div class="menu-logo">
                  <a onClick={() => navigate("/")}>
                    <img src={logo} alt="Logo" />
                  </a>
                </div>
                <ul className="nav navbar-nav">
                  <li className="active">
                    <a onClick={() => navigate("/IT-training-course-indore")}>
                      Our Courses <i className="fa fa-chevron-down"></i>
                    </a>
                    <ul class="sub-menu add-menu">
                      <li class="add-menu-left">
                        <ul>
                          <li>
                            <a onClick={() => setOpenSideBAr(false)}>
                              MERN{"(Full-Stack)"}{" "}
                            </a>
                          </li>
                          <li>
                            <a onClick={() => setOpenSideBAr(false)}>
                              React{"(Front-end)"}
                            </a>
                          </li>
                          <li>
                            <a onClick={() => setOpenSideBAr(false)}>
                              Python{"(Basic to Advance)"}
                            </a>
                          </li>
                        </ul>
                      </li>
                      {/* <li
                        class="add-menu-right"
                        onClick={() => navigate("/Contact-Us")}
                      >
                        <img src={adv} alt="ad" />
                      </li> */}
                    </ul>
                  </li>
                  <li>
                    <a>
                      Hire From Us <i className="fa fa-chevron-down"></i>
                    </a>
                    <ul className="sub-menu">
                      <li onClick={handleAboutUs}>
                        <a>About</a>
                      </li>

                      <li>
                        <a onClick={navigateToFAQ ? handleFaq : scrollToFAQ}>
                          FAQ's
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-dashboard">
                    <a onClick={() => navigate("/Contact-Us")}>Join Us Today</a>
                  </li>
                </ul>
                <div class="nav-social-link">
                  <a>
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a>
                    <i class="fa fa-google-plus"></i>
                  </a>
                  <a>
                    <i class="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      {showPopUp && <ContactPopUp setShowPopUp={setShowPopUp} />}
    </header>
  );
};

export default Header;

// import React, { useEffect, useState } from "react";
// import logo from "../../../src/assets/images/MAinLogo.png";
// import { RiInstagramFill } from "react-icons/ri";
// import { CiPhone } from "react-icons/ci";
// import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";

// const Header = ({ scrollToFAQ }) => {
//   const [isFixed, setIsFixed] = useState(false);
//   const [headerFix, setHeadderFix] = useState(false);
//   const navigate = useNavigate();
//   let location = useLocation();
//   console.log(location);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.pageYOffset;

//       // Determine when to apply the fixed class
//       if (scrollTop > 100) {
//         // Adjust this value as needed
//         setIsFixed(true);
//       } else {
//         setIsFixed(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
//   useEffect(() => {
//     if (location.pathname === "/") {
//       setHeadderFix(false);
//     }
//     if (location.pathname === "/course") {
//       setHeadderFix(true);
//     }
//     if (location.pathname === "/ContactUs") {
//       setHeadderFix(true);
//     }
//   }, [location]);

//   return (
//     <header
//       className={`header rs-nav header-transparent ${
//         headerFix ? "" : "posAbosolute"
//       }`}
//     >
//       <div className="top-bar">
//         <div className="container">
//           <div className="row d-flex justify-content-between">
//             <div className="topbar-left">
//               <ul>
//                 <li>
//                   <button className="askQue" onClick={scrollToFAQ}>
//                     <i className="fa fa-question-circle"></i>Ask a Question
//                   </button>
//                 </li>
//                 <li>
//                   <a href="javascript:;">
//                     <i className="fa fa-envelope-o"></i>Support@website.com
//                   </a>
//                 </li>
//                 <li>
//                   <a href="javascript:;">
//                     <i class="fa fa-phone"></i>
//                     9999999999999
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div className="topbar-right">
//               <ul>
//                 <li>
//                   <button className=" p-0 px-2  getInternship">
//                     Get Internship opportunity
//                   </button>
//                 </li>

//                 <li>
//                   <a href="login.html">Login</a>
//                 </li>
//                 <li>
//                   <a href="register.html">Register</a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="sticky-header navbar-expand-lg">
//         <div className={`menu-bar clearfix ${isFixed ? "hederFixed" : ""}`}>
//           <div className="container clearfix">
//             <div className="menu-logo">
//               <a href="/">
//                 <img src={logo} alt="Logo" />
//               </a>
//             </div>
//             <button
//               className="navbar-toggler collapsed menuicon justify-content-end"
//               type="button"
//               data-toggle="collapse"
//               data-target="#menuDropdown"
//               aria-controls="menuDropdown"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span></span>
//               <span></span>
//               <span></span>
//             </button>
//             <div className="secondary-menu">
//               <div className="secondary-inner">
//                 <ul>
//                   <li>
//                     <a href="javascript:;" className="btn-link">
//                       <i className="fa fa-facebook"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="javascript:;" className="btn-link">
//                       <i class="fa fa-instagram"></i>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="javascript:;" className="btn-link">
//                       <i className="fa fa-linkedin"></i>
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="nav-search-bar">
//               <form action="#">
//                 <input
//                   name="search"
//                   value=""
//                   type="text"
//                   className="form-control"
//                   placeholder="Type to search"
//                 />
//                 <span>
//                   <i className="ti-search"></i>
//                 </span>
//               </form>
//               <span id="search-remove">
//                 <i className="ti-close"></i>
//               </span>
//             </div>
//             <div
//               className="menu-links navbar-collapse collapse justify-content-start"
//               id="menuDropdown"
//             >
//               <div className="menu-logo">
//                 <a href="/">
//                   <img src={logo} alt="logo2" />
//                 </a>
//               </div>
//               <ul className="nav navbar-nav">
//                 <li className="active">
//                   <a onClick={() => navigate("/course")}>
//                     Our Courses <i className="fa fa-chevron-down"></i>
//                   </a>
//                   <ul className="sub-menu">
//                     <li>
//                       <a href="index.html">Home 1</a>
//                     </li>
//                     <li>
//                       <a href="index-2.html">Home 2</a>
//                     </li>
//                   </ul>
//                 </li>
//                 <li>
//                   <a href="javascript:;">
//                     Hire From Us <i className="fa fa-chevron-down"></i>
//                   </a>
//                   <ul className="sub-menu">
//                     <li>
//                       <a href="javascript:;">
//                         About<i className="fa fa-angle-right"></i>
//                       </a>
//                       <ul className="sub-menu">
//                         <li>
//                           <a href="about-1.html">About 1</a>
//                         </li>
//                         <li>
//                           <a href="about-2.html">About 2</a>
//                         </li>
//                       </ul>
//                     </li>
//                     {/* <li>
//                       <a>
//                         Join Us Today <i className="fa fa-angle-right"></i>
//                       </a>

//                       <ul className="sub-menu">
//                         <li>
//                           <a href="event.html">Event</a>
//                         </li>
//                         <li>
//                           <a href="events-details.html">Events Details</a>
//                         </li>
//                       </ul>
//                     </li> */}
//                     <li>
//                       <a href="javascript:;">
//                         FAQ's<i className="fa fa-angle-right"></i>
//                       </a>
//                       <ul className="sub-menu">
//                         <li>
//                           <a href="faq-1.html">FAQ's 1</a>
//                         </li>
//                         <li>
//                           <a href="faq-2.html">FAQ's 2</a>
//                         </li>
//                       </ul>
//                     </li>
//                     {/* <li>
//                       <a href="/ContactUsPage">
//                         Contact Us<i className="fa fa-angle-right"></i>
//                       </a>

//                       <ul className="sub-menu">
//                         <li>
//                           <a href="contact-1.html">Contact Us 1</a>
//                         </li>
//                         <li>
//                           <a href="contact-2.html">Contact Us 2</a>
//                         </li>
//                       </ul>
//                     </li> */}
//                     <li>
//                       <a href="portfolio.html">Portfolio</a>
//                     </li>
//                     <li>
//                       <a href="profile.html">Profile</a>
//                     </li>
//                     <li>
//                       <a href="membership.html">Membership</a>
//                     </li>
//                     <li>
//                       <a href="error-404.html">404 Page</a>
//                     </li>
//                   </ul>
//                 </li>

//                 <li className="nav-dashboard">
//                   <a onClick={() => navigate("/ContactUs")}>
//                     Join Us Today
//                     <i className="fa fa-chevron-down"></i>
//                   </a>
//                   {/* <ul className="sub-menu">
//                     <li>
//                       <a href="admin/index.html">Dashboard</a>
//                     </li>
//                     <li>
//                       <a href="admin/add-listing.html">Add Listing</a>
//                     </li>
//                     <li>
//                       <a href="admin/bookmark.html">Bookmark</a>
//                     </li>
//                     <li>
//                       <a href="admin/courses.html">Courses</a>
//                     </li>
//                     <li>
//                       <a href="admin/review.html">Review</a>
//                     </li>
//                     <li>
//                       <a href="admin/teacher-profile.html">Teacher Profile</a>
//                     </li>
//                     <li>
//                       <a href="admin/user-profile.html">User Profile</a>
//                     </li>
//                     <li>
//                       <a href="javascript:;">
//                         Calendar<i className="fa fa-angle-right"></i>
//                       </a>
//                       <ul className="sub-menu">
//                         <li>
//                           <a href="admin/basic-calendar.html">Basic Calendar</a>
//                         </li>
//                         <li>
//                           <a href="admin/list-view-calendar.html">
//                             List View Calendar
//                           </a>
//                         </li>
//                       </ul>
//                     </li>
//                     <li>
//                       <a href="javascript:;">
//                         Mailbox<i className="fa fa-angle-right"></i>
//                       </a>
//                       <ul className="sub-menu">
//                         <li>
//                           <a href="admin/mailbox.html">Mailbox</a>
//                         </li>
//                         <li>
//                           <a href="admin/mailbox-compose.html">Compose</a>
//                         </li>
//                         <li>
//                           <a href="admin/mailbox-read.html">Mail Read</a>
//                         </li>
//                       </ul>
//                     </li>
//                   </ul> */}
//                 </li>
//               </ul>
//               <div className="nav-social-link">
//                 <a>
//                   <i className="fa fa-facebook"></i>
//                 </a>
//                 <a>
//                   <RiInstagramFill />
//                 </a>
//                 <a>
//                   <i className="fa fa-linkedin"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
