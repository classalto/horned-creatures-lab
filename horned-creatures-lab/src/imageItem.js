import React from 'react'

export default class ImageItem extends React.Component {
    render() {
        return (
            <li>
               {this.props.image.title}
               <img alt={this.props.image.description} src={this.props.image.url}/> 
            </li>
        )
    }
}
