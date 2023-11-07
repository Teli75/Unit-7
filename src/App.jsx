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
        <Route path="/" element={<Navigate replace to="/tabletennis"/>} />
        <Route path="/tabletennis" element={<PhotoList />} />
        <Route path="/pickleball" element={<PhotoList />} />
        <Route path="/tennis" element={<PhotoList />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/nav" element={<Nav />} />
      </Routes>
    </div>
  );
}

export default App;
