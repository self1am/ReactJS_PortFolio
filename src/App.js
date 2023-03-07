import React from "react";

import NavBar from "./commons/navbar";
import HomePage from "./components/home";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Badges from "./components/badges/badges";
import Contact from "./components/contact";
import Footer from "./commons/footer";

function App(){
  return(
    <>
      <NavBar />
      <HomePage />
      <About />
      <Portfolio />
      <Badges />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
