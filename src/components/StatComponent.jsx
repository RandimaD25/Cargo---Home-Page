import React from "react";

const StatComponent = ({ number, text }) => {
  return (
    <div className="stat-component">
      <h1>{number}</h1>
      <p>{text}</p>
    </div>
  );
};

export default StatComponent;
