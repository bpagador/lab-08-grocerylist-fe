import React, { Component } from 'react'

export default class GroceryItem extends Component {
    render() {
        return (
            <div>
                <li>
                    <h1>{this.props.groceryObj.name}</h1>
                    <p>Type: {this.props.groceryObj.type}</p>
                    <p>Amount needed: {this.props.groceryObj.amount}</p>
                    <p>Cheap?: {String(this.props.groceryObj.is_cheap)}</p>
                </li>
                
            </div>
        )
    }
}
