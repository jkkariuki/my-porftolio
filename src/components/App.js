import React from "react";
import Navigation from "./Navbar";
import About from "./AboutMe";
import Landing from "./Landing";
import Portfolio from "./Portfolio";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <div className="App">
        <Navigation />
        <div class="container col-xxl-8 px-4 py-5">
          <Landing />
          <hr />
          <About />
          <hr />
          <Portfolio />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
