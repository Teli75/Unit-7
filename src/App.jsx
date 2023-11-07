//import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import "./App.css";
import config from "../config";

//App Components
import Search from "./components/Search";
import Nav from "./components/Nav";
import Home from "./components/Home";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/nav" element={<Nav />} />
      </Routes>
    </div>
  );
}

export default App;
