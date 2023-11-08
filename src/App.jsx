import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import apiKey from "./config";

//App Components
import Search from "./components/Search";
import Nav from "./components/Nav";
import PhotoList from "./components/PhotoList";

function App() {
  return (
    <div className="container">
      * <Search />
      <Nav />
      <Routes>
        {/* <Route path="/" element={<Navigate replace to="/" />} />*/}
        <Route path="/photoList" element={<PhotoList />} /> 
        <Route path="/tabletennis" element={<PhotoList />} />
        <Route path="/pickleball" element={<PhotoList />} />
        <Route path="/tennis" element={<PhotoList />} />
      </Routes>
    </div>
  );


}

export default App;
