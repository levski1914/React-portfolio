import React, { useEffect, useState } from "react";
import "./Carousel.css";

const delay = 5500;
const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  objectFit: "cover",
  transition: "all .5s",
};
const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  tranform: "translate(0,-50%)",
  right: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};
const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  tranform: "translate(0,-50%)",
  left: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};
const sliderStyles = {
  position: "relative",
  height: "100%",
  transition: "all .5s",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
  marginTop: "-15rem",
  color: "#fff",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage:
      slides && slides.length > 0 ? `url(${slides[currentIndex].url})` : "",
  };
  useEffect(() => {
    setTimeout(
      () =>
        setCurrentIndex((newIndex) =>
          newIndex === slides.length - 1 ? 0 : newIndex + 1
        ),
      delay
    );
    return () => {};
  }, [currentIndex]);
  return (
    <div style={sliderStyles}>
      <div>
        <div onClick={goToPrev} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <div style={slideStylesWidthBackground}></div>
      <div style={dotsContainerStyles}>
        {slides &&
          slides.length > 0 &&
          slides.map((slide, slideIndex) => (
            <div
              style={dotStyle}
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="circle"
            >
              ●
            </div>
          ))}
      </div>
    </div>
  );
};

export default Carousel;
