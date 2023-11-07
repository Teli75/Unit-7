import React from 'react';
import { NavLink } from 'react-router-dom';

const PhotoList = () => (
    
         <nav className="main-nav">
        <ul>
          <li><a href='#'>Cats</a></li>
          <li><a href='#'>Dogs</a></li>
          <li><a href='#'>Computers</a></li>
          <li><NavLink to="/tabletennis" element={<PhotoList />} /></li>
          <li><NavLink to="//pickleball" element={<PhotoList />} /></li>
          <li><NavLink to="/tennis" element={<PhotoList />} /></li>
        </ul>
      </nav> 
    

);

export default PhotoList;