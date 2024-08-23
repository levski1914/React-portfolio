import React from "react";
import Carousel from "./Carousel";
import Nav from "./Nav";
const slides = [
  {
    url: "https://demo-61.woovinapro.com/wp-content/uploads/2022/04/slider2.jpg",
  },
  {
    url: "https://demo-61.woovinapro.com/wp-content/uploads/2022/04/slider1.jpg",
  },
];
const containerStyles = {
  width: "100%",
  height: "100vh",
  margin: "0 auto",
};
const Header = ({ totalQuantityCalcFunc, totalAmountCalcFunc }) => {
  return (
    <>
      <Nav
        totalQuantityCalcFunc={totalQuantityCalcFunc}
        totalAmountCalcFunc={totalAmountCalcFunc}
      />
      <div style={containerStyles}>
        <Carousel slides={slides} />
      </div>
    </>
  );
};

export default Header;
