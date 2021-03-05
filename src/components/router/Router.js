import React, { Component } from "react";

import { Switch, Route } from "react-router-dom";

import ProductDetails from "../../components/layout/products/ProductDetails";
import Home from "../../components/layout/content/Home";
import About from "../../components/layout/content/About";
import Menu from "../../components/layout/content/Menu";
import Profile from "../../components/store/profile/Profile";
import Cart from "../../components/store/cart/Cart";
import SignIn from "../../components/store/auth/SignIn";
import SignUp from "../../components/store/auth/SignOut";
import CreateProduct from "../../components/layout/products/CreateProduct";

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/menu" component={Menu}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/product/:id" component={ProductDetails}></Route>
        <Route path="/signin" component={SignIn}></Route>
        <Route path="/signup" component={SignUp}></Route>
        <Route path="/create" component={CreateProduct}></Route>
      </Switch>
    );
  }
}

export default Router;
