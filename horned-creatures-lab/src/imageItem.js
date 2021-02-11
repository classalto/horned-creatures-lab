import React from 'react';


export default class ImageItem extends React.Component {
    render() {
        return (
            <li>
               {this.props.ImageItemProp.title}
               <img alt={this.props.ImageItemProp.description} src={this.props.ImageItemProp.url}/> 
            </li>
        )
    }
}
