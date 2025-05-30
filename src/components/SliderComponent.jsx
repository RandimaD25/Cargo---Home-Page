import React from "react";

const SliderComponent = ({ text, heading1, heading2, para, image }) => {
  return (
    <div className="slider">
      <div className="slider-left">
        <p className="slider-text">
          <span>|</span> {text}
        </p>
        <h1 className="slider-heading-1">{heading1}</h1>
        <h1 className="slider-heading-2">{heading2}</h1>
        <p className="slider-para">{para}</p>
        <button className="button yellow-btn">DISCOVER MORE</button>
      </div>
      <div className="slider-right">
        <img className="slider-img" src={image} alt="" />
      </div>
    </div>
  );
};

export default SliderComponent;
