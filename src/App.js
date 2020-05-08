import React, { Component } from 'react'
import { 
  BrowserRouter as Router,
  Route, 
  Switch } from "react-router-dom";

import Home from './Home';
import AboutMe from './AboutMe';


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route
            path= '/'
            exact
            render= {( routerProps ) => < Home {...routerProps} />}
            />
            <Route
            path='/AboutMe'
            render={( routerProps ) => <AboutMe {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>  
    )}
}
