import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <div>
                <p>Filter By:</p>
                <select value={this.props.currentValue} onChange={this.props.handleChange}>
                    {this.props.options.map(option => {
                        return <option value={option}>{option}</option>
                    })}
                </select>
            </div>
        )
    }
}
