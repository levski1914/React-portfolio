import React, { useState } from "react";
import "./ByCateg.css";
const categories = [
  {
    img: "https://demo-61.woovinapro.com/wp-content/uploads/2022/04/cate1.jpg",
    category: "Smarphone & tablet",
  },
  {
    img: "https://demo-61.woovinapro.com/wp-content/uploads/2022/04/cate2.jpg",
    category: "Audio & video game",
  },
  {
    img: "https://demo-61.woovinapro.com/wp-content/uploads/2022/04/cate3.jpg",
    category: "Headphone",
  },
  {
    img: "https://demo-61.woovinapro.com/wp-content/uploads/2022/04/cate4.jpg",
    category: "Technologies",
  },
  {
    img: "https://demo-61.woovinapro.com/wp-content/uploads/2022/04/cate1.jpg",
    category: "Smarphone & Ipad",
  },
  {
    img: "https://demo-61.woovinapro.com/wp-content/uploads/2022/04/cate2.jpg",
    category: "Audio & video game",
  },
  {
    img: "https://demo-61.woovinapro.com/wp-content/uploads/2022/04/cate3.jpg",
    category: "Headphone",
  },
  {
    img: "https://demo-61.woovinapro.com/wp-content/uploads/2022/04/cate4.jpg",
    category: "Technologies",
  },
];

const Card = (props) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-img">
          <img src={props.img} alt="" className="w-100" />
        </div>
        <div className="card-body text-center">
          <h3 className="fs-4">{props.category}</h3>
        </div>
      </div>
    </>
  );
};

const ByCateg = () => {
  return (
    <>
      <div className="container-fluid bg-dark text-white">
        <div className="container byCategories">
          <h2>Shop by categories</h2>
          <div className="row position-relative justify-content-between">
            <div className="navi">
              <div className="btn-left">Left</div>
              <div className="btn-right">Right</div>
            </div>
            <div className="container row categories">
              {categories.length === 0 ? (
                <p>Sorry no results</p>
              ) : (
                categories.map((val, ind) => (
                  <Card key={ind} img={val.img} category={val.category} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ByCateg;
