import React from "react";
import logo from "./react-logo.png";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img src={logo} alt="React Logo" className="nav-logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}


