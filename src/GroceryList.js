import React, { Component } from 'react'
import request from 'superagent'
import GroceryItem from './GroceryItem'

export default class GroceryList extends Component {
    state = {
        search: '',
        groceryData: []
    }

    async componentDidMount() {
        const allGroceries = await request.get(`https://powerful-lake-09317.herokuapp.com/grocery_list/${this.state.search}`)
        
        this.setState({ groceryData: allGroceries.body })
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.allGroceries.map(groceryItem => {
                            return <GroceryItem groceryObj={groceryItem}/>
                        })
                    }
                </ul>
            </div>
        )
    }
}
