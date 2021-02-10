import React, { Component } from 'react'

export default class ImageList extends Component {
    render() {
        return (
            <div className="list">
                {this.images.map((image) => {
                    return <li key={image.title}>
                        <img alt="creature" src={image.url}/>
                    </li>
                })}
            </div>
        )
    }
}
