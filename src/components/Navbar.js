import React from "react";

function Navbar({ setActiveSection }) {
  return (
    <nav className="navbar">
      <button onClick={() => setActiveSection("about")}>About</button>
      <button onClick={() => setActiveSection("projects")}>Projects</button>
      <button onClick={() => setActiveSection("skills")}>Skills</button> {/* Add Skills Button */}
      <button onClick={() => setActiveSection("contact")}>Contact</button>
    </nav>
  );
}

export default Navbar;
