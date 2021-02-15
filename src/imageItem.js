import React from 'react';


export default class ImageItem extends React.Component {
    render() {
        return (
            <li>
               <p>{this.props.ImageItemProp.title}</p>
               <span>{this.props.ImageItemProp.horns} horns</span>
               <img alt={this.props.ImageItemProp.description} src={this.props.ImageItemProp.url}/> 
            </li>
        )
    }
}
