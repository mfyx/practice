import React from "react";
import logo from "./react-logo.png";

export default function Navbar(props) {
  return (
    <header>
      <nav
        className={props.darkMode ? "dark" : ""}
      >
        <img src={logo} alt="React Logo" className="nav--logo_icon" />
        <h3 className="nav--logo_text">React Facts</h3>
        {/* <h4 className="nav--title">React Course - Project 1</h4> */}

        <div
          className="toggler"
        >
          <p className="toggler--light">Light</p>
          <div
            className="toggler--slider"
            onClick={props.toggleDarkMode}
          >
            <div className="toggler--slider--circle"></div>
          </div>
          <p className="toggler--dark">Dark</p>
        </div>
      </nav>
    </header>
  );
}

