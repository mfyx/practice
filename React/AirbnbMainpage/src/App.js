import React from "react";
//import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MainContent from "./MainContent";
import Hero from "./Hero";
import Card from "./Card";
import img1 from "./hero_1.jpg";


export default function App() {
  return (
    <div className="Container">
      <Navbar />
      <Hero />
      <Card 
        img={img1}
        rating={5.0}
        reviews={6}
        country="USA"
        price="136"
        title="Life Lessons with Katie Zaferes"
      />
      {/* <h1>App component</h1> */}
      {/* <Navbar /> */}
      {/* <MainContent /> */}
      {/* <Footer /> */}
    </div>
  );
}

//ReactDOM.render(<App />, document.getElementById('root'));
