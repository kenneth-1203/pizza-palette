import React, { Component } from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/navbar/Navbar';
import Home from './components/layout/content/Home';
import About from './components/layout/content/About';
import Menu from './components/layout/content/Menu';
import SignIn from './components/store/auth/SignIn';
import SignUp from './components/store/auth/SignUp';
import Profile from './components/store/profile/Profile';
import Cart from './components/store/cart/Cart';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={ Home }></Route>
            <Route path="/about" component={ About }></Route>
            <Route path="/menu" component={ Menu }></Route>
            <Route path="/signin" component={ SignIn }></Route>
            <Route path="/signup" component={ SignUp }></Route>
            <Route path="/profile" component={ Profile }></Route>
            <Route path="/cart" component={ Cart }></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

