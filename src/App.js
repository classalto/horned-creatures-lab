import './App.css';
import React from 'react';
import images from './data.js';
import Header from './Header.js';
import ImageList from './imageList/ImageList.js';
import Dropdown from './Dropdown'


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
  handleHornChange = (e) => {
    this.setState({
      horns: e.target.value
    })
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
          <Dropdown currentValue={this.state.keyword} handleChange={this.handleKeywordChange}
          options={['narwhal', 'unicorn', 'rhino', 'unilego', 'triceratops', 'markhor', 'mouflon', 'addax', 'chameleon', 'lizard', 'dragon']}/>
          Filter By:
          <Dropdown currentValue={this.state.horns} handleChange={this.handleHornChange} options={['1', '2', '3', '100']}/>
        <ImageList filteredImages={filteredImages} />
      </>
    );
  }
}
