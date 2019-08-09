import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import SellerSignUp from './pages/SellerSignUp/SellerSignUp';
import CustomerSignUp from './pages/CustomerSignUp/CustomerSignUp';
import SignInForm from './pages/SignInForm/SignInForm';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename="/hcl-myproduct/">
        <Switch>
          <Route exact path="/SellerSignUp" component={SellerSignUp} />
          <Route exact path="/CustomerSignUp" component={CustomerSignUp} />
          <Route exact path="/SignInForm" component={SignInForm} />
        </Switch>
      </Router>
    );
  }
}

export default App;
