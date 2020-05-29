
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import React, {Component} from 'react';
import Home from './views/Home/Home.js';
export default class App extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">

            </Route>
            <Route exact path="/portfolio">

            </Route>
          </Switch>
        </Router>
      );
    }
  }


