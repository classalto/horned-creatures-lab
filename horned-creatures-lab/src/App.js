import './App.css';
import React from 'react';
import images from './data.js';
import Header from './Header.js';
import ImageList from './imageList/ImageList.js';


export default class App extends React.Component {
  state = {
    keyword: '',
    horns: 0,
  }
  handleKeywordChange = (e) => {
    this.setState({
      keyword: e.target.value
    });
  }
  
  
  render() {
    const filteredImages = images.filter((image) => {
      if (!this.state.horns) return true;
      if (this.state.horns === image.horns) return true;
      return false;})

    return (
      <>
        <Header />
        <form>
          Creature Name
          <input 
            value={this.state.keyword}
            onChange={this.handleKeywordChange}
          />
          Filter By:
          <select
           value={this.state.horns}
           onChange={(e) => {
             this.setState({
               horns: e.target.value
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
