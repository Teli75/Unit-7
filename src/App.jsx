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

  useEffect(() => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        
        setPhotos(response.data.photos.photo);
        console.log(photos);

      })
      .catch((error) => {
        console.log('Error fetching data', error);
      });
  }, [query]);

  const handleQueryChange = ( text ) => {
    setQuery( text );
  }


  return (
    <div className="container">
      <Search
      // changeQuery={ handleQueryChange }
      />


      <Nav 
        useForQuery={handleQueryChange}
      />
      
      <Routes>
        <Route path="/" element={<Navigate replace to="/tabletennis" />} />
        <Route path="/tabletennis" element={<PhotoList title="Table Tennis" data={ photos } />} />
        <Route path="/pickleball" element={<PhotoList title="Pickle Ball" data={ photos } />} />
        <Route path="/tennis" element={<PhotoList title="Tennis" data={ photos } />}  />
      </Routes>
    </div>
  );
}

export default App;
