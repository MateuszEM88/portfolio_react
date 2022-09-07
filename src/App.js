import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Scroll from "./components/scroll/Scroll";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Home id="home" />
        <Portfolio id="portfolio" />
        <About id="about" />
        <Skills id="skills" />
        <Contact id="contact" />
        <Scroll />
      </div>
    </div>
  );
}

export default App;
