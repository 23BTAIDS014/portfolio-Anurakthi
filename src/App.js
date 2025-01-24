import React, { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";  
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <div className="app">
      <Header />
      <Navbar setActiveSection={setActiveSection} />

      <div className="content">
        {activeSection === "about" && <About />}
        {activeSection === "projects" && <Projects />}
        {activeSection === "contact" && <Contact />}
        {activeSection === "skills" && <Skills />} 
      </div>

      <Footer />
    </div>
  );
}

export default App;
