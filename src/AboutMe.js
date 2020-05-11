import React, { Component } from 'react'
import Header from './Header.js'
import './App.css'

export default class AboutMe extends Component {
    render() {
        return (
            
            <main className='about-me-page'>
                <Header />
                <div className='about-me-parent'>
                    <div className='about-me-description'>
                    <h3>About the Shopper</h3>
                    <section>
                        Briseida has been in quaratine since May 13th.<br></br>
                        She eats at least 7 meals a day, mostly comprised of pasta and/or rice.<br></br> 
                        To cap the night, she kills an entire bag of Haribo gummy bears<br></br>
                        and ponders about the impermanence of life over a glass of two-buck-chuck.
                    </section>
                
                {/* comment for PR */}
            </div>


                </div>
                
            </main>
            
        )
    }
}
