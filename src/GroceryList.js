import React, { Component } from 'react'
import request from 'superagent'
import GroceryItem from './GroceryItem'

export default class GroceryList extends Component {
    state = {
        search: '',
        allGroceries: []
    }

    async componentDidMount() {
        const allGroceries = await request.get(`https://powerful-lake-09317.herokuapp.com/grocery_list/`)
        console.log(allGroceries)
        this.setState({ allGroceries: allGroceries.body })

        console.log(allGroceries);
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
