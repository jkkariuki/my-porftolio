import React from "react";
import Navigation from "./Navbar";
import About from "./AboutMe";
import Landing from "./Landing";
import Portfolio from "./Portfolio";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div class="container col-xxl-8 px-4 py-5">
        <Landing />
        <About />
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
