import React from "react";
import Header from "./Header";
import Meme from "./Meme";

export default function App() {
  return (
    <div className="Container">
      <Header />
      <Meme />
    </div>
  );
}

//ReactDOM.render(<App />, document.getElementById('root'));
