import React, { Component } from 'react'
import request from 'superagent'
import GroceryItem from './GroceryItem'
import { Link } from 'react-router-dom'
import './App.css'
import Header from './Header.js'

export default class GroceryList extends Component {
    state = {
        allGroceries: [],
        filter: '',
        typeList: [],
    }

    // changed URL to local host, it was my heroku deployed API before 
    // async componentDidMount() {
    //     const allGroceries = await request.get(`http://localhost:3000/grocery_list`)
    //     this.setState({ allGroceries: allGroceries.body })

    //     console.log(allGroceries);
    // }

    async componentDidMount() {
        const data = await request.get(`http://localhost:3000/grocery_list`);
        const type = await request.get(`http://localhost:3000/type_id`)

        this.setState({
            allGroceries: data.body,
            typeList: type.body
        })
    }

    handleFilter = (e) => {
        this.setState({ filter: e.target.value })
    }

    render() {
        console.log(this.state.typeList)
        return (
    
            <main className='grocery-list-page'>
                <Header />
                <div className='list-body'>
                <ul className='actual-list'>
                    <select onChange={this.handleFilter}>
                        <option value=''>Show All</option>
                        {
                            this.state.typeList.map(
                                type => <option value={type.type_id}>{type.type_id}</option>
                            )
                        }
                        
                    </select>
                    <li className='list-item'>
                        {
                        this.state.allGroceries
                        .filter(groceryItem => {
                            if(!this.state.filter) return true;
                            return groceryItem.type_id === this.state.filter
                        })
                        .map(groceryItem => {
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
