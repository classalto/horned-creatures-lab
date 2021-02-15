import './App.css';
import React from 'react';
import images from './data.js';
import Header from './Header.js';
import ImageList from './imageList/ImageList.js';


export default class App extends React.Component {
  state = {
    keyword: '',
    horns: '',
  }
  handleKeywordChange = (e) => {
    this.setState({
      keyword: e.target.value
    });
  }

  
  
  render() {
    const filteredImages = images.filter((image) => {
      if (!this.state.horns && !this.state.keyword) return true;
      if (this.state.horns === image.horns) return true;
      if (this.state.keyword === image.keyword) return true;
      return false;})

    return (
      <>
        <Header />
        <form>
          Keywords:
          <select value={this.state.keyword} onChange={this.handleKeywordChange}>
            <option value="rhino">rhino</option>
            <option value="unicorn">unicorn</option>
            <option value="dragon">dragon</option>
            <option value="chameleon">chameleon</option>
          </select>
          Filter By:
          <select
           value={this.state.horns}
           onChange={(e) => {
             this.setState({
               horns: Number(e.target.value)
             })
           }}
          >
            <option value='1'>1 Horn</option>
            <option value='2'>2 Horns</option>
            <option value='3'>3 Horns</option>
            <option value='100'>100 Horns</option>
          </select>
          <button>Submit</button>
        </form>
        <ImageList filteredImages={filteredImages} />
      </>
    );
  }
}
