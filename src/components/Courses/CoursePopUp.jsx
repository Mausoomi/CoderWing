import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import "../../assets/css/Courses.css";
import courseImg from "../../assets/images/CourseIMG.jpg";
import { TiTickOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

function CoursePopUp({ setShowPopUp, idOfCourse }) {
  const [closePopUp, setClosePopUp] = useState(false);
  const navigate = useNavigate();
  console.log(idOfCourse);

  const handleForgotPasswordClose = (e) => {
    e.preventDefault();
    setClosePopUp(true);
    setShowPopUp(false);
  };

  const handleReadMore =()=>{
    navigate("/IT-training-course-indore", { state: { idOfCourse } });
}

  return (
    <div>
      <div
        className={`popup-backdrop ${closePopUp ? "closepopUp" : "openpopUp"}`}
      >
        <div className="popup">
          <div className="innerPopupBox">
            <div className="PopupOne">
              <div>
                <h1>{idOfCourse.title}</h1>
                {/* <p>{idOfCourse.popupData}</p> */}
              </div>
              <div>
                <ul>
                  {idOfCourse.PopUpSideData.map((item, index) => (
                    <li className="fearureList" key={index}>
                      <span>
                        <TiTickOutline
                          style={{ fontSize: "30px" }}
                          className="tickMArk"
                        />
                      </span>
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="btnMain btn-primary" onClick={handleReadMore}>
                Read More
              </button>
            </div>
            <div className="PopUptwo">
              <div className="popupDiv">
                <img src={idOfCourse.PopUpImg} alt="coursesImg" />
              </div>
            </div>
          </div>

          <button className="cross" onClick={handleForgotPasswordClose}>
            <RxCross2 className="crossSign" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CoursePopUp;
