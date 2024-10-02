import React from "react";
import logo from "../public/images/logo.png";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="React Logo" className="header--image" />
      <h2 className="header--title">Header Component</h2>
      <h4 className="header--project">React Course - Project 3</h4>
    </header>
  );
}

