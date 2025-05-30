import React from "react";
import { FaPlusSquare } from "react-icons/fa";

const TestimonialsComponent = ({ text }) => {
  return (
    <div>
      <hr />
      <div className="testi-component">
        <p>{text}</p>
        <FaPlusSquare />
      </div>
    </div>
  );
};

export default TestimonialsComponent;
