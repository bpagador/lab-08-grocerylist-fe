import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Home extends Component {
    render() {
        return (
            <div>
                <header>
                    Quaratine Grocery Shopping
                    <nav>
                        <Link to='/grocery_list'>
                            <p>My Grocery List</p>
                        </Link>

                        <Link to='/AboutMe'>
                            <p>How Am I Still Aive?</p>
                        </Link>    
                    </nav>
                </header>
                
            </div>
        )
    }
}
