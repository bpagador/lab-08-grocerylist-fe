import React, { Component } from 'react'
import { getGroceryDetail } from './api-calls.js'

export default class DetailPage extends Component {
    state = { grocery: null }
    componentDidMount = async() => {
        const fetchedData = await getGroceryDetail(this.props.match.params.id)
        console.log(this.props.match.params.id)
        this.setState({ grocery : fetchedData})
    }
    render() {
        return (
            <div>
                hi
                {
                    this.state.grocery
                    ? JSON.stringify(this.state.grocery)
                    :'LOADING'
                }
                
            </div>
        )
    }
}
