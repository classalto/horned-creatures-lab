import React from 'react';
import ImageItem from '../imageItem.js';


export default class ImageList extends React.Component {
    render() {

        const creatureImages = this.props.filteredImages.map((image) => {
            <ImageItem
                key={image.title}
                ImageItemProp={image}
            />})
        return (
            <ul>
               {creatureImages}
            </ul>
        )
    }
}
