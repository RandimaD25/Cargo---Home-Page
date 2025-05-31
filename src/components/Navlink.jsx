import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Navlink = ({ name, link }) => {
  return (
    <NavLink
      className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
      to={link}
    >
      {({ isActive }) => (
        <>
          {isActive && <h3>|</h3>}
          <p>{name}</p>
          <IoIosArrowDown />
        </>
      )}
    </NavLink>
  );
};

export default Navlink;
