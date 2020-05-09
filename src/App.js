import React, { Component } from 'react'
import { 
  BrowserRouter as Router,
  Route, 
  Switch } from "react-router-dom";

import Home from './Home';
import AboutMe from './AboutMe';
import GroceryList from './GroceryList';
import DetailPage from './DetailPage';


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route
            path= '/'
            exact
            render= {( routerProps ) => <Home {...routerProps} />}
            />
            <Route
            path= '/GroceryList'
            exact
            render= {( routerProps ) => <GroceryList {...routerProps} />}
            />
            <Route
            path= '/GroceryList/:id'
            render= {( routerProps ) => <DetailPage {...routerProps} />}
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
