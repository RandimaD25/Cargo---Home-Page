import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

const ServiceComponent = ({ image, title, text }) => {
  return (
    <div className="service-card">
      <div>
        <img src={image} alt="" width={250} height={200} />
      </div>
      <div>
        <h4>{title}</h4>
        <p className="service-text">{text}</p>
        <div className="read-more">
          <FaArrowAltCircleRight />
          <p>Read More</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceComponent;
