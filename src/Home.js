import React, { Component } from 'react'
import Header from './Header.js'


export default class Home extends Component {
    render() {
        return (
            <div className='home-page'>
                <Header />
                <section className='home-intro'>
                    <p>A judgement-free zone for the oddities you consume these days.</p>
                    <br></br>
                    <p> 10 bags of candy? You bet.</p>
                    <p> 4 bottles of wine? No doubt.</p>
                    <p> 1 sad little roll of toilet paper? The only one you can find? Me too.</p>
                    <br></br>
                    <p> Whatever the occasion, Quarantine Shopper's here to hold you down.</p>
                </section>   
            </div>
        )
    }
}
