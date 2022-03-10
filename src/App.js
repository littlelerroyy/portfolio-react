import bootstrap from "bootstrap";
import NavBar from "./Sections/NavBar";
import Home from "./Sections/Home";
import AboutMe from "./Sections/AboutMe";
import Projects from "./Sections/Projects";
import Contact from "./Sections/Contact";
import Skills from "./Sections/Skills";
import Footer from "./Sections/Footer";
import "./App.scss";
import React from "react";
//import "./App.css";
//import "./bootstrap/css/bootstrap.css";
//import "./bootstrap/js/bootstrap.bundle.min.js";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
