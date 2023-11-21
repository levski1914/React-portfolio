import React, { useState } from "react";
import "./Main.css";
import Cars from "./Cars";
import ModelInfo from "../Components/ModelInfo";
import carData from "../Components/carData";
const classes = [
  {
    imgsrc: "https://bluesky-cogcms.cdn.imgeng.in/media/un3nh3s1/1.png",
    model: "A class",
  },
  {
    imgsrc:
      "https://web21st.imgix.net/assets/images/new-vehicles/mercedes-benz/mercedes-benz-b-class-2023-amg-line-premium-rose-gold.png?w=600&auto=format",
    model: "B class",
  },
  {
    imgsrc:
      "https://bluesky-cogcms.cdn.imgeng.in/media/35074/c-class-mercedes-amg-c-43-4matic.png",
    model: "C class",
  },
  {
    imgsrc:
      "https://bluesky-cogcms.cdn.imgeng.in/media/35267/cla-coupe-amg-cla-35-4matic.png",
    model: "CLA class",
  },
  {
    imgsrc:
      "https://web21st.imgix.net/assets/images/new-vehicles/mercedes-benz/mercedes-benz-cls-coupe-2018-amg-line-night-edition-premium-plus-emerald-green.png?w=600&auto=format",
    model: "CLS class",
  },
  {
    imgsrc:
      "https://bluesky-cogcms.cdn.imgeng.in/media/35110/e-class-amg-line-edition.png",
    model: "E class",
  },
  {
    imgsrc:
      "https://web21st.imgix.net/assets/images/new-vehicles/mercedes-benz/mercedes-benz-eqa-2021-amg-line-premium-cosmos-black.png?w=600&auto=format",
    model: "EQA class",
  },
  {
    imgsrc:
      "https://web21st.imgix.net/assets/images/new-vehicles/mercedes-benz/mercedes-benz-g-class-2013-63-amg-magno-edition-manganite-grey.png?w=600&auto=format",
    model: "G class",
  },
  {
    imgsrc:
      "https://web21st.imgix.net/assets/images/new-vehicles/mercedes-benz/mercedes-benz-gla-2024-amg-line-executive-iridium-silver.png?w=600&auto=format",
    model: "GLA class",
  },
  {
    imgsrc:
      "https://web21st.imgix.net/assets/images/new-vehicles/mercedes-benz/mercedes-benz-glb.png?w=500&auto=format",
    model: "GLB class",
  },
  {
    imgsrc:
      "https://bluesky-cogcms.cdn.imgeng.in/media/34789/glc-amg-glc-43.png",
    model: "GLC class",
  },
  {
    imgsrc:
      "https://bluesky-cogcms.cdn.imgeng.in/media/34962/gle-amg-line-executive.png",
    model: "GLE class",
  },
  {
    imgsrc:
      "https://bluesky-cogcms.cdn.imgeng.in/media/34979/gls-amg-line-premium.png",
    model: "GLS class",
  },
  {
    imgsrc:
      "https://bluesky-cogcms.cdn.imgeng.in/media/keaj4col/s-class-saloon-amg-line-premium.png",
    model: "S class",
  },
];

const Main = () => {
  const [selectedModel, setSelectedModel] = useState(null);

  const handleModelClick = (model) => {
    setSelectedModel(model);
  };
  return (
    <>
      <div className="main container-fluid">
        <div className="container">
          <ul className="nav classes navbar">
            {classes.map((val, ind) => (
              <ModelInfo
                key={ind}
                imgsrc={val.imgsrc}
                model={val.model}
                onClick={handleModelClick}
              />
            ))}
          </ul>
        </div>
        <div className=" container-fluid" style={{ padding: 0 }}>
          {selectedModel ? (
            <Cars modelData={carData} model={selectedModel} />
          ) : (
            <div className="mainPage">
              <div className="text-center txt">
                <h1>Mercedes - benz</h1>
                <h1>GLE </h1>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Main;
