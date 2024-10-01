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
        key = {item.id}
        item = {item}
        //{...item}

        // img = {item.coverImg}
        // rating = {item.stats.rating}
        // reviewCount = {item.stats.reviewCount} 
        // country = {item.location}
        // price = {item.price}
        // title = {item.title}
        // openSpots = {item.openSpots}
      />
    );
  });

  return (
    <div className="Container">

      <Navbar />
      <Hero />

      <section className="cards-list">
        {cards}
      </section>

    </div>
  );
}

//ReactDOM.render(<App />, document.getElementById('root'));
