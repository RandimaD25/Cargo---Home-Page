import React from "react";
import Navlink from "./NavLink";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <h2>Cargo</h2>
      <Navlink name="HOME" link="/" />
      <Navlink name="PAGES" link="/pages" />
      <Navlink name="TRACKING" link="/tracking" />
      <Navlink name="SERVICES" link="/services" />
      <Navlink name="BLOG" link="/blog" />
      <button className="button yellow-btn">GET A QUOTE</button>
      <button className="button black-btn">SIGN IN</button>
    </div>
  );
};

export default Navbar;
