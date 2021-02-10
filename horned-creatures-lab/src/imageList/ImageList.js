import React from 'react';
import ImageItem from '../imageItem.js';
import images from '../data.js';

export default class ImageList extends React.Component {
    render() {
        state = {
            keyword: '',
            horns: 0,
        }

        // horn filter
    const filteredImages = images.filter((image) => {
        if (!this.state.horns) return true;
        if (this.state.horns === image.horns) return true;
        return false;
      }).map(image => 
        <ImageItem 
          key={image.title}
          image={image}/>);
        return (
            <>
                <form>
                    Name
                    <input />
                    Filter By:
                    <select>
                        <option value='1'>1 Horn</option>
                        <option value='2'>2 Horns</option>
                        <option value='3'>3 Horns</option>
                        <option value='100'>100 Horns</option>
                    </select>
                </form>
            </>
        )
    }
}
