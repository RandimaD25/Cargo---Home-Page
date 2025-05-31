import React from "react";

const StatComponent = ({ number, text }) => {
  return (
    <div className="stat-component">
      <div className="stat-shadow">{number}</div>

      <div className="stat-box">
        <div className="stat-content">
          <h1>{number}</h1>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default StatComponent;
