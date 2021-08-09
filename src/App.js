import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { Helmet } from "react-helmet";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Muiz Uvais</title>
        <link rel="canonical" href="https://muizuvais.ml" />
      </Helmet>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      {/* <Testimonials /> */}
      <Contact />
    </main>
  );
}
