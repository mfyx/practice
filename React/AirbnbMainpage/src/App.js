import React from "react";
//import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MainContent from "./MainContent";
import Hero from "./Hero";
import Card from "./Card";


export default function App() {
  return (
    <div className="Container">
      <Navbar />
      <Hero />
      <Card />
      {/* <h1>App component</h1> */}
      {/* <Navbar /> */}
      {/* <MainContent /> */}
      {/* <Footer /> */}
    </div>
  );
}

//ReactDOM.render(<App />, document.getElementById('root'));
