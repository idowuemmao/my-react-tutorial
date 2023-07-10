import React from "react";
import Navbar from "./components/ReactFacts/Navbar";
import Body from "./components/ReactFacts/Body";
import "./components/ReactFacts/index.css";

export default function App() {
  const [darkMode, setDarkMode] = React.useState(true);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }
  return (
    <div className="container">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Body />
    </div>
  );
}
