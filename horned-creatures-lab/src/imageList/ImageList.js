import React, { Component } from 'react'
import images from '../data'

export default class ImageList extends Component {
    render() {
        return (
            <div className="list-container">
                {images.map(image => {
                    return <li className="list" key={image.title}>
                        <h3>{image.keyword}</h3>
                        <img alt="animal" src={image.url}/>
                    </li>
                })}
            </div>
        )
    }
}
