import React, { Component } from 'react'
import request from 'superagent'
import GroceryItem from './GroceryItem'
import { Link } from 'react-router-dom'
import './App.css'
import Header from './Header.js'

export default class GroceryList extends Component {
    state = {
        search: '',
        allGroceries: []
    }

    // changed URL to local host, it was my heroku deployed API before 
    async componentDidMount() {
        const allGroceries = await request.get(`http://localhost:3000/grocery_list`)
        this.setState({ allGroceries: allGroceries.body })

        console.log(allGroceries);
    }
    render() {
        return (
            <main className='grocery-list-page'>
                <Header />
                <div className='list-body'>
                <ul className='actual-list'>
                    <li className='list-item'>
                        {
                        this.state.allGroceries.map(groceryItem => {
                            return <div key={groceryItem.id}>
                                <Link to={`/GroceryList/${groceryItem.id}`}>
                                </Link>

                                <GroceryItem groceryObj={groceryItem}/>

                            </div>

                        })
                        // this.state.allGroceries.map(groceryItem => {
                        //     return <GroceryItem groceryObj={groceryItem}/>
                        // })
                    }
                    </li> 
                </ul>
            </div>
            </main>
            
        )
    }
}
