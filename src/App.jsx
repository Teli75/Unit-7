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
  //const [query, setQuery] = useState("tables");

  useEffect(() => {
    //Query will change url if a link is clicked or if something is typed into search bar.
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=55bcc77935af2079f2b4ca5aee94a04f&tags=table+tennis&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        console.log(response.data.photos);
        setPhotos(response.data.photos);
        console.log(setPhotos);
      });
  }, []);

  // const handleQueryChange = searchText => {
  //   setQuery( searchText );
  //Whether it's clicked or typed, this function setQuery
  //}

  return (
    <div className="container">
      <Search
      // changeQuery={ handleQueryChange }
      />

      {/** Passes photos state to the PhotoList component */}
      <PhotoList
        data={photos}
       
      />

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
