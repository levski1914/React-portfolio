import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg text-white"
        style={{ backgroundColor: "#000" }}
      >
        <div className="container-fluid text-white align-items-center justify-content-between">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              className="h-25"
              style={{ width: 100 }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/1200px-Mercedes-Logo.svg.png"
              alt=""
            />
            <span className="ps-3 text-white fs-1">Mercedes - Benz</span>
          </Link>

          <div className="navbar w-50" id="navbarSupportedContent">
            <ul className="nav navbar me-auto mb-2 mb-lg-0 text-white">
              <li className="nav-item text-white">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  onClick={() => setSelectedModel(null)}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" href="#">
                  Link
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" href="#" role="button">
                  Dropdown
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-disabled="true">
                  Disabled
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
