import React from "react";
//import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MainContent from "./MainContent";

export default function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode);
  }

  return (
    <div className="container">
      <Navbar 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode}
      />
      <MainContent
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      {/* <Footer /> */}
    </div>
  );
}

//ReactDOM.render(<App />, document.getElementById('root'));
