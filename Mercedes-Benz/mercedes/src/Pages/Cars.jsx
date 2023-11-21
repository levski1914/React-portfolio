import React from "react";
import "./Cars.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Cars = ({ modelData, model }) => {
  const selectedModelData = modelData.find((item) => item.model === model);
  return (
    <div className="container-fluid pt-5 carinfo">
      <div className="container mt-5 mb-5">
        <div className="new_car mb-5">
          <div className="new_car_headings py-5 mb-3">
            <h1>Mercedes-Benz</h1>
            <h2>{selectedModelData.model}</h2>
          </div>
          <div className="new_car_image mt-5">
            <img src={selectedModelData.imgsrc} alt="" />
          </div>
          <div className="new_car_links pt-5">
            <div className="row justify-content-center justify-content-lg-start">
              <a href="" className="mx-4 mb-3 d-block col-8">
                Search new car stock
              </a>
              <a href="" className="mx-4 mb-3 d-block col-3">
                Enquir
              </a>
              <a href="" className="mx-4 mb-3 d-block col-6">
                book a test drive
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid info mt-5">
        <div className="container options">
          <ul className="nav navbar">
            <li className="nav-item">Overview</li>
            <li className="nav-item">Model styles</li>
            <li className="nav-item">Offers</li>
            <li className="nav-item">Gallery</li>
          </ul>
        </div>
        <div className="container text-white mt-5 desc">
          <h2>New Mercedes-Benz {selectedModelData.model}</h2>
          <p>{selectedModelData.description}</p>
        </div>
      </div>

      <div className="container modelStyles mt-5">
        <div className="text-center mb-5 model-title">
          <h2>Model Styles</h2>
        </div>
        <Carousel responsive={responsive}>
          {selectedModelData.configurations.map((config) => (
            <div key={config.title} className="card text-center" style={{}}>
              <div className="card-body">
                <h2 className="card-title fs-4 mb-3 text-uppercase">
                  {config.title}
                </h2>
                <h3 className="card-subtitle mb-4 fs-5 text-uppercase">
                  {config.subtitle}
                </h3>
                <h3 className="card-subtitle mb-5 text-uppercase fs-4 ">
                  from <span className="fw-bold">{config.price}</span>
                </h3>

                <p className="card-text mb-2">Heated from seats</p>
                <p className="card-text mb-2">Immobiliser</p>
                <p className="card-text mb-2">Rear head restraints</p>
                <p className="card-text mb-2">Rear wiper</p>
                <p className="card-text mb-2">Trip computer</p>
                <p className="card-text mb-2">Front seatbelt pretensioners</p>
                <p className="card-text mb-2">Heated rear wiper</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="container-fluid banner mt-5"></div>
    </div>
  );
};

export default Cars;
