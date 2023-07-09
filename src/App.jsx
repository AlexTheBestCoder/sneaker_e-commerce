import React, { useContext} from "react";
import "./App.css";
import Home from "./pages/Home"
import { ThemeContext } from "./context/ThemeContext";
// import {CountProvider} from "./CountContext";

function App() {
  const { isDarkMode } = useContext(ThemeContext);
  
  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
     <Home />
    </div>
  );
}

export default App;
