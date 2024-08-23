import React, { useState } from "react";
import "./TopProd.css";
import ShowProducts from "./ShowProducts";
import UserCartComp from "./UserCartComp";
import Nav from "./Nav";
// import Navbar from "./Navbar";
// import Nav from "./Nav";
const Reveal = () => {
  let reveal = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveal.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveal[i].getBoundingClientRect().top;
    let elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveal[i].classList.add("active");
    } else {
      reveal[i].classList.remove("active");
    }
  }
};
const TopProducts = ({
  products,
  addItemsToCart,
  filterCourseFunction,
  cartItems,
  deleteItemsFromCart,
  totalAmountCalcFunc,
  setCartItems,
}) => {
  window.addEventListener("scroll", Reveal);
  return (
    <>
      <div className="container top-products bg-white border position-relative p-5">
        <h2>Top Products</h2>

        <div className="row reveal fade-top g-5 my-5 justify-content-between">
          <ShowProducts
            products={products}
            addItemsToCart={addItemsToCart}
            filterCourseFunction={filterCourseFunction}
          />

          <UserCartComp
            cartItems={cartItems}
            deleteItemsFromCart={deleteItemsFromCart}
            totalAmountCalcFunc={totalAmountCalcFunc}
            setCartItems={setCartItems}
          />
        </div>
        <div className="banners">
          <div className="banner-1 reveal fade-left banner">
            <div className="banner-desc">
              <h2>Limited edition</h2>
              <h3>Virtual Reality Glasses</h3>
              <a href="#">Shop now</a>
            </div>
          </div>
          <div className="banner-2 reveal fade-right banner">
            <div className="banner-desc">
              <h2>Collection 2024</h2>
              <h3>Put The World on Mute</h3>
              <a href="#">Shop now</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopProducts;
