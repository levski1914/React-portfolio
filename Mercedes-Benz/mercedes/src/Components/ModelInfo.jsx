import React from "react";

const ModelInfo = ({ model, imgsrc, onClick }) => {
  return (
    <>
      <li className="nav-item" onClick={() => onClick(model)}>
        <span>{model}</span>
        <img src={imgsrc} alt="" />
      </li>
    </>
  );
};

export default ModelInfo;
