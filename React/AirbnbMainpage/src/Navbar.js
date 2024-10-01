import React from "react";
//import logo from "./airbnb-logo.png";
import logo from "../public/images/airbnb-logo.png";

export default function Navbar() {
  return (
    <header>
      <nav className="nav">
        <img src={logo} alt="React Logo" className="nav--logo" />
        {/* <h3 className="nav--logo_text">React Facts</h3> */}
        {/* <h4 className="nav--title">React Course - Project 1</h4> */}
      </nav>
    </header>
  );
}

