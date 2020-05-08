import React, { Component } from 'react'
import request from 'superagent'
import GroceryItem from './GroceryItem'

export default class GroceryList extends Component {
    state = {
        initSearch: 'Whatever',
        groceryData: []
    }

    async componentDidMount() {
        const allGroceries = await request.get(`https://powerful-lake-09317.herokuapp.com/${this.state.initSearch}`)
        
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
