import "./styles.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

export default function App() {
  const [darkModee, setDarkMode] = useState(true);

  function toggleDarkModee() {
    setDarkMode((prev) => !prev);
  }

  return (
    <div className="container">
      <Navbar darkMode={darkModee} toggleDarkMode={toggleDarkModee} />
      <Main darkMode={darkModee} />
    </div>
  );
}
