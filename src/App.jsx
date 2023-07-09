import React, { useContext } from "react";
import "./App.css";
import Home from "./pages/Home";
import { ThemeContext } from "./context/ThemeContext";
// import {CountProvider} from "./CountContext";

function App() {
  const { isDarkMode } = useContext(ThemeContext);
  const body = document.querySelector("body");
  if (isDarkMode) {
    body.style.backgroundColor = "#282837";
    body.style.color = "#222";
    body.style.fill = "white";
  } else {
    body.style.backgroundColor = "#fff";
    body.style.color = "#222";
  }

  return (
    <div className={`App ${isDarkMode ? 'dark': 'light'}`}>
      <Home />
    </div>
  );
}

export default App;
