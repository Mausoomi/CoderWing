import React from "react";
import { StackedCarouselSlideProps } from "react-stacked-center-carousel";
import "../assets/css/centerSlider.css";

export const Slide = React.memo(function (StackedCarouselSlideProps) {
  const { data, dataIndex, isCenterSlide, swipeTo, slideIndex } =
    StackedCarouselSlideProps;

  const coverImage = data[dataIndex].image;
  const text = data[dataIndex].text;

  console.log(
    dataIndex,
    isCenterSlide,
    slideIndex,
    parseInt(99 - 99 / Math.abs(slideIndex), 10)
  );
  return (
    <div
      className={`card-card ${isCenterSlide ? "center" : "on"}`}
      draggable={false}
    >
      <div
        className={`cover fill ${isCenterSlide ? "off" : "on"} 
        ${slideIndex > 0 ? "left" : "right"}`}
      >
        <div
          className={`card-overlay fill`}
          style={{
            backgroundColor:
              "#000000" + parseInt(70 - 60 / Math.abs(slideIndex), 10),
          }}
          onClick={() => {
            if (!isCenterSlide) swipeTo(slideIndex);
          }}
        />
      </div>
      <div
        className={`data fill  ${isCenterSlide ? "off" : "on"}  ${
          slideIndex > 0 ? "left" : "right"
        }`}
      >
        <div className="discription">
          <img
            style={{ width: "100%", height: "100%" }}
            alt="j"
            className="cover-image"
            src={coverImage}
          />
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
});
