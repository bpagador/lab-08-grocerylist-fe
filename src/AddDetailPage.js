import React, { Component } from 'react'
import { addDetail } from './api-calls.js';
import Header from './Header.js';
import './App.css'


export default class AddDetailPage extends Component {
    state = {
        name: '',
        type: '', 
        amount: 0,
        is_cheap: false,
    }

    handleAddToList = async (e) => {
        e.preventDefault();

        const newGroceryItem = await addDetail(this.state)

        this.setState({ success: newGroceryItem})
        this.props.history.push('./GroceryList')
    }
    // added push to redirect me to the page I want 

    handleListChange = (e) => {
        const newListState = {}
        newListState[e.target.name] = e.target.value;

        this.setState(newListState);
    }

    render() {
        const { name, type, amount, is_cheap } = this.state;

        return (
            
            <main className='add-detail-page-body'>
                <Header />
                <div className='form-container'>
                <form  className='page-form' onSubmit={this.handleAddToList}>
                    <h3>Add Groceries: </h3>
                    <label className='input-container'>
                        I need: <br></br>
                        <input className='input-line' onChange={this.handleListChange} value={name} name='name' />
                    </label>
                    <br></br>
                    <label className='input-container'>
                        Type (ex. protein, grains, dairy, produce): <br></br>
                        <input className='input-line' onChange={this.handleListChange} value={type} name='type' />
                    </label>
                    <br></br>
                    <label className='input-container'>
                        Amount: <br></br>
                        <input className='input-line' onChange={this.handleListChange} value={amount} name='amount' />
                    </label>
                    <br></br>
                    <label className='input-container'>
                        Cheap<br></br>
                        <input onChange={this.handleListChange} checked={is_cheap === 'true'} name='is_cheap' type='radio' value='true' />
                    </label>
                    <br></br>
                    <label className='input-container'>
                        Expensive<br></br>
                        <input onChange={this.handleListChange} checked={is_cheap === 'false'} name='is_cheap' type='radio' value='false' />
                    </label>
                    <br></br>
                    <br></br>
                    <button>Add to my list!</button>

                </form>
                
            </div>
            </main>
            
        )
    }
}
