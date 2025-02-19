import React from "react";
import './index.css';
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Academics from "./Components/Academics";

export default function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Projects />
      <Academics/>
      <Contact />
      <Footer />
    </>
  );
}
