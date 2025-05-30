import React from "react";
import StatComponent from "../components/StatComponent";

const StatsSection = () => {
  return (
    <div className="stat-section">
      <StatComponent number={890} text="Delivered Packages" />
      <StatComponent number={137} text="Countries Covered" />
      <StatComponent number={740} text="Tons of Goods" />
      <StatComponent number={600} text="Satisfied Clients" />
    </div>
  );
};

export default StatsSection;
