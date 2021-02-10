import './App.css';
import React from 'react';
import images from './data.js';
import Header from './Header.js';
import ImageList from './imageList/ImageList.js';

function App() {
  return (
    <div>
      <Header />
      <ImageList images={images} />
    </div>
  );
}

export default App;
