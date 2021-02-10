import './App.css';
import images from './data.js';
import ImageList from './imageList/ImageList.js';

function App() {
  return (
    <div>
      <ImageList images={images} />
    </div>
  );
}

export default App;
