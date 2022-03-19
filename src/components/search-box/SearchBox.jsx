
import { Component } from 'react'
import React from 'react'
import './SeachBox.css';

class SearchBox extends Component {
    render() {
        return (
            <input 
            className={`search-box ${this.props.className}`}
            type='search'
            placeholder={this.props.placeholder}
            onChange={this.props.onChange}
            />
           
        )
    }
}

export default SearchBox;