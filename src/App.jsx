import { Route, Routes, Navigate } from "react-router-dom";
import React, { useState } from "react";
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

  function fetchData( query ) {
      axios
        .get(
          `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
        )
        .then((response) => {
          setPhotos(response.data.photos.photo);
          console.log(photos);
        })
        .catch((error) => {
          console.log("Error fetching data", error);
        });
    }

  const handleQueryChange = ( title ) => {
    setQuery( title )
    fetchData( query );
  };

  return (
    <div className="container">

      <Search
        callFetchData = { fetchData }
      />

      <Nav />

      <Routes>
        <Route path="/" element={<Navigate replace to="/tabletennis" />} />

        <Route
          path="/tabletennis"
          element={<PhotoList title="Table Tennis" data={photos} queryState={query} changeQuery={ handleQueryChange }  />}
        />
        <Route
          path="/pickleball"
          element={<PhotoList title="Pickle Ball" data={photos} queryState={query} changeQuery={ handleQueryChange } />}
        />
        <Route
          path="/tennis"
          element={<PhotoList title="Tennis" data={photos} queryState={query} changeQuery={ handleQueryChange } />}
        />
      </Routes>
    </div>
  );
}

export default App;
