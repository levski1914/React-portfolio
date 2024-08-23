import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import "./Nav.css";
const Nav = ({ totalQuantityCalcFunc, totalAmountCalcFunc }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container fs-4">
          <Link className="navbar-brand fs-3" to="/">
            DIGITA
          </Link>

          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown category">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/about"
                  role="button"
                  data-bs-toggle="dropdown"
                  onClick={() => setVisible(!visible)}
                >
                  Categories
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" to="/" aria-disabled="true">
                  Coming soon
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li
                className="nav-item cart"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                <Link className="nav-link cartIcon">
                  <FontAwesomeIcon icon={faCartShopping} />
                  <span>{totalQuantityCalcFunc()}</span>
                </Link>
                <span>${totalAmountCalcFunc()}</span>
              </li>
            </ul>
            {visible && (
              <div className=" mega-menu container-fluid py-5 justify-content-center">
                <div className="row justify-content-center">
                  <div className="col-2 border-end border-dark px-3">
                    <div className="title">
                      <h4>New Arrival</h4>
                      <ul className="fs-5 text-start">
                        <li>
                          <a href=""> Smart Watch</a>
                        </li>
                        <li>
                          <a href=""> Smartphone & tablet</a>
                        </li>
                        <li>
                          <a href=""> Audio & Video game</a>
                        </li>
                        <li>
                          <a href=""> Technologies</a>
                        </li>
                        <li>
                          <a href=""> Phone Accessories</a>
                        </li>
                        <li>
                          <a href=""> PC & Laptop</a>
                        </li>
                        <li>
                          <a href=""> Camera & Photo</a>
                        </li>
                        <li>
                          <a href=""> VR Glasses</a>
                        </li>
                        <li>
                          <a href=""> Bluetooth Speakers</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-2 border-end border-dark px-3">
                    <div className="title">
                      <h4>WEEKLY TREND</h4>
                      <ul className="fs-5 text-start">
                        <li>
                          <a href="">Headphone</a>
                        </li>
                        <li>
                          <a href="">Phone Accessories</a>
                        </li>
                        <li>
                          <a href="">Technologies</a>
                        </li>
                      </ul>
                      <h4>Rating product</h4>
                      <ul className="fs-5 text-start">
                        <li>
                          <a href="">Headphone</a>
                        </li>
                        <li>
                          <a href="">Phone Accessories</a>
                        </li>
                        <li>
                          <a href="">Technologies</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-3  border-end border-dark">
                    <div className="title">
                      <h4>Feature by category</h4>
                      <ul className="d-flex row text-center fs-5 flex-wrap">
                        <li className="col">
                          <a
                            href=""
                            className="d-flex flex-column align-items-center"
                          >
                            <img
                              src="https://demo-61.woovinapro.com/wp-content/uploads/2021/01/image-megamenu-1.png"
                              alt=""
                              className="w-75"
                            />
                            Headphone
                          </a>
                        </li>
                        <li className="col">
                          <a
                            href=""
                            className="d-flex flex-column align-items-center"
                          >
                            {" "}
                            <img
                              src="https://demo-61.woovinapro.com/wp-content/uploads/2021/01/image-megamenu-2.png"
                              alt=""
                              className="w-75"
                            />
                            Smartphone & Tablet
                          </a>
                        </li>
                        <li className="col">
                          <a
                            href=""
                            className="d-flex flex-column align-items-center"
                          >
                            {" "}
                            <img
                              src="https://demo-61.woovinapro.com/wp-content/uploads/2021/01/image-megamenu-3.png"
                              alt=""
                              className="w-75"
                            />
                            Technologies
                          </a>
                        </li>
                        <li className="col">
                          <a
                            href=""
                            className="d-flex flex-column align-items-center"
                          >
                            <img
                              src="https://demo-61.woovinapro.com/wp-content/uploads/2021/01/image-megamenu-4.png"
                              alt=""
                              className="w-75"
                            />
                            Smartwatch{" "}
                          </a>
                        </li>
                        <li className="col">
                          <a
                            href=""
                            className="d-flex flex-column align-items-center"
                          >
                            {" "}
                            <img
                              src="https://demo-61.woovinapro.com/wp-content/uploads/2021/01/image-megamenu-5.png"
                              alt=""
                              className="w-75"
                            />
                            Camera & Photo
                          </a>
                        </li>
                        <li className="col">
                          <a
                            href=""
                            className="d-flex flex-column align-items-center"
                          >
                            {" "}
                            <img
                              src="https://demo-61.woovinapro.com/wp-content/uploads/2021/01/image-megamenu-6.png"
                              alt=""
                              className="w-75"
                            />
                            Bluetooth Speaker
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="title">
                      <h4>IMG</h4>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
