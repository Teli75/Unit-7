//import { useState } from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import config from "../config";

//App Components
import Search from "./components/Search";
import Nav from "./components/Nav";
import PhotoList from "./components/PhotoList";

function App() {
  return (
    <div className="container">
      <Route path="/search/:query" element={<Search />} />
      <Route path="/nav" element={<Nav />} />
      <Routes>
        <Route path="/" element={<Navigate replace to="/tabletennis" />} />
        <Route NavLink to="/tabletennis" element={<PhotoList />} />
        <Route NavLink to="/pickleball" element={<PhotoList />} />
        <Route NavLink to="/tennis" element={<PhotoList />} />
      </Routes>
    </div>
  );
}

export default App;
