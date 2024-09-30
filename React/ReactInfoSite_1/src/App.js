import React from "react";
//import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MainContent from "./MainContent";

/**
Challenge:

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
*/

export default function App() {
  return (
    <div className="Container">
      <Navbar />
      <MainContent />
      {/* <Footer /> */}
    </div>
  );
}

//ReactDOM.render(<App />, document.getElementById('root'));
