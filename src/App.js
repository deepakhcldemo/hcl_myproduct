import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm/SignUpForm';
import SignInForm from './pages/SignInForm/SignInForm';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename="/hcl-myproduct/">
        <Switch>
          <Route exact path="/" component={SignUpForm} />
          {/* <Route exact path="/" component={SignInForm} /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
