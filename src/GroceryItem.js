import React, { Component } from 'react'
import './App.css'

export default class GroceryItem extends Component {
    render() {
        return (
            <div>
                <li>
                    <h1 className='grocery-name'>{this.props.groceryObj.name}</h1>
                    <p className='grocery-attributes'>Type: {this.props.groceryObj.type}</p>
                    <p className='grocery-attributes'>Amount needed: {this.props.groceryObj.amount}</p>
                    <p className='grocery-attributes'> Cheap?: {String(this.props.groceryObj.is_cheap)}</p>
                </li>
                
            </div>
        )
    }
}
