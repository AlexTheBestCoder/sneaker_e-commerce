import React, { useState } from "react";
import CardMain from "../../components/CardMain";
import Navbar from "../../components/Navbar";
import './index.css'

export default function index() {
  const [count, setCount] = useState(0);
  return (
    <div className="home-container">
      <Navbar count={count} />
      <CardMain setCount={setCount} count={count} />
    </div>
  );
}
