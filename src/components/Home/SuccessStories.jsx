// import React  ,{ Component } from  'react'
// import img1 from "../../assets/images/trainee.jpg"
// import img2 from "../../assets/images/trainee2.jpg"
// import img3 from "../../assets/images/trainee3.jpg"
// import img4 from "../../assets/images/trainee4.jpg"
// import img5 from "../../assets/images/trainee5.jpg";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import Slider from "react-slick";

// function SuccessStories() {
//   const settings = {
//     className: "center",
//     centerMode: true,
//     infinite: true,
//     centerPadding: "60px",
//     slidesToShow: 3,
//     speed: 500,
//     autoplaySpeed: 3000,
//   };
// return (
//   <div className="slider-container">
//     <Slider {...settings}>
//       <div className="scucessImg">
//         <img src={img1} alt="img" />
//       </div>
//       <div className="scucessImg">
//         <img src={img2} alt="img" />
//       </div>
//       <div className="scucessImg">
//         <img src={img3} alt="img" />
//       </div>
//       <div className="scucessImg">
//         <img src={img4} alt="img" />
//       </div>
//       <div className="scucessImg">
//         <img src={img5} alt="img" />
//       </div>
//       <div className="scucessImg">
//         <img src={img3} alt="img" />
//       </div>
//       <div className="scucessImg">
//         <img src={img1} alt="img" />
//       </div>
//       <div className="scucessImg">
//         <img src={img2} alt="img" />
//       </div>
//       <div className="scucessImg">
//         <img src={img3} alt="img" />
//       </div>
//     </Slider>
//   </div>
// );
// }

// export default SuccessStories

import React from "react";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
import "../../assets/css/centerSlider.css";
import { Slide } from "../../components/Slider";
import img1 from "../../assets/images/trainee.jpg";
// import img2 from "../../assets/images/trainee2.jpg";
import img3 from "../../assets/images/trainee3.jpg";
import img4 from "../../assets/images/trainee4.jpg";
import img5 from "../../assets/images/trainee5.jpg";
import { MotionAnimate } from "react-motion-animate";
import img6 from "../../assets/images/image-2-mxpertz.png"
import img7 from "../../assets/images/images-1-mxpertz.png"
import img8 from "../../assets/images/img8.jpg"

const data = [
  {
    image: img1,
  },
  // {
  //   image: img2,
  // },
  {
    image: img3,
  },
  {
    image: img4,
  },
  {
    image: img5,
  },
  {
    image: img6,
  },
  {
    image: img7,
  },
  {
    image: img8,
  },
];

const SuccessStories = () => {
  const ref = React.useRef(StackedCarousel);
  return (
    <MotionAnimate
      delay={0.2}
      speed={5}
      ease={[0.75, 0.45, 0.53, 0.94]}
      reset={true}
    >
      {" "}
      <div className="cardSlider">
        <div style={{ width: "100%", position: "relative" }}>
          <ResponsiveContainer
            carouselRef={ref}
            render={(width, carouselRef) => {
              return (
                <StackedCarousel
                  // ref={carouselRef}
                  // slideComponent={Slide}
                  // slideWidth={400}
                  // carouselWidth={width}
                  // data={data}
                  // maxVisibleSlide={5}
                  // disableSwipe
                  // customScales={[1, 0.85, 0.7, 0.55]}
                  // transitionTime={450}
                  ref={carouselRef}
                  slideComponent={Slide}
                  slideWidth={400}
                  carouselWidth={width}
                  data={data}
                  maxVisibleSlide={5}
                  disableSwipe
                  customScales={[1, 0.85, 0.7, 0.55]}
                  transitionTime={450}
                ></StackedCarousel>
              );
            }}
          />
          {/* <Fab
          className="card-button left"
          size="small"
          onClick={() => ref.current?.goBack()}
        >
          <KeyboardArrowLeftIcon style={{ fontSize: 30 }} />
        </Fab>
        <Fab
          className="card-button right"
          size="small"
          onClick={() => ref.current?.goNext()}
        >
          <KeyboardArrowRightIcon style={{ fontSize: 30 }} />
        </Fab> */}
        </div>
      </div>
    </MotionAnimate>
  );
};

export default SuccessStories;
