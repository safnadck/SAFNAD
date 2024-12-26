import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="app">
    
    <Navbar />

    
    <div id="Home">
      <Home />
    </div>

    <div id="About">
      <About />
    </div>

   <div id="Services">
      <Services />
    </div>

     <div id="Projects">
      <Projects />
    </div>

   <div id="Contact">
      <Contact />
    </div>

   <div id="Footer">
      <Footer />
    </div>  
  </div>
  );
};

export default App;
