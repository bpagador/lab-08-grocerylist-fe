import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

export default class Header extends Component {
    render() {
        return (
            <header className='header'>
                
                <h1 className='header-title'> Quarantine Shopper</h1>
                <nav className='nav-links'>
                    <Link className="link" to={`/`}>Home Page</Link><br></br>
                    <Link className="link" to={`/GroceryList`}>Grocery List</Link><br></br>
                    <Link className="link" to={`/AddDetailPage`}>Add an Item</Link><br></br>
                    <Link className="link" to={`/AboutMe`}>About the Shopper</Link>
                </nav>
            </header>
        )
    }
}
