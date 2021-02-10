import './App.css';
import React from 'react';
import images from './data.js';
import Header from './Header.js';
import ImageList from './imageList/ImageList.js';


export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <ImageList images={images} />
      </>
    );
  }
}
