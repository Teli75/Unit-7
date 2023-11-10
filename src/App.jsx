import { Route, Routes, Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./App.css";
import apiKey from "./config";
import axios from "axios";

//App Components
import Search from "./components/Search";
import Nav from "./components/Nav";
import PhotoList from "./components/PhotoList";

function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("tables");
  const [tableTennisPhotos, setTableTennisPhotos] = useState([]);
  const [tennisPhotos, setTennisPhotos] = useState([]);
  const [pickleBallPhotos, setPickleBallPhotos] = useState([]);

  useEffect(() => {
    if (tableTennisPhotos.length === 0) fetchData("Table Tennis");
    if (tennisPhotos.length === 0) fetchData("Tennis");
    if (pickleBallPhotos.length === 0) fetchData("Pickle Ball");
  }, []);

  function fetchData(query) {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        if (query === "Table Tennis") {
          setTableTennisPhotos(response.data.photos.photo);
        } else {
          setPhotos(response.data.photos.photo);
        }
        if (query === "Tennis") {
          setTennisPhotos(response.data.photos.photo);
        } else {
          setPhotos(response.data.photos.photo);
        }
        if (query === "Pickle Ball") {
          setPickleBallPhotos(response.data.photos.photo);
        } else {
          setPhotos(response.data.photos.photo);
        }
      })
      .catch((error) => {
        console.log("Error fetching data", error);
      });
  }

  const handleQueryChange = ( title ) => {
    setQuery( title );
    fetchData(title);
  };

  return (
    <div className="container">
      <Search changeQuery={handleQueryChange} />

      <Nav />

      <Routes>
        <Route path="/" element={<Navigate replace to="/tabletennis" />} />
        <Route path="/search/" element={<Navigate replace to="/userSearch" />} />
        <Route
          path="/tabletennis"
          element={
            <PhotoList
              title="Table Tennis"
              data={tableTennisPhotos}
              queryState={query}
              changeQuery={handleQueryChange}
            />
          }
        />
        <Route
          path="/pickleball"
          element={
            <PhotoList
              title="Pickle Ball"
              data={pickleBallPhotos}
              queryState={query}
              changeQuery={handleQueryChange}
            />
          }
        />
        <Route
          path="/tennis"
          element={
            <PhotoList
              title="Tennis"
              data={tennisPhotos}
              queryState={query}
              changeQuery={handleQueryChange}
            />
          }
        />
        <Route path="/search/:query" element={<PhotoList data={photos} />} />
      </Routes>
    </div>
  );
}

export default App;
