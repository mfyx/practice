import React from "react";
//import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MainContent from "./MainContent";
import Hero from "./Hero";
import Card from "./Card";
import img1 from "../public/images/hero_1.jpg";
import data from "./data"


export default function App() {

  const cards = data.map(item => {
    return (
      <Card 
        img = {item.coverImg}
        rating = {item.rating}
        reviews = {item.reviews} 
        country = {item.country}
        price = {item.price}
        title = {item.title}
      />
    );
  });

  return (
    <div className="Container">

      <Navbar />
      <Hero />

      <div className="Cards">
        {cards}
      </div>

    </div>
  );
}

//ReactDOM.render(<App />, document.getElementById('root'));
