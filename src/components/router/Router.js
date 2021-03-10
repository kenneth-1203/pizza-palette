import React from "react";

import { Switch, Route } from "react-router-dom";

import ProductDetails from "../../components/layout/products/ProductDetails";
import Home from "../../components/layout/content/Home";
import About from "../../components/layout/content/About";
import Menu from "../../components/layout/content/Menu";
import Cart from "../../components/store/cart/Cart";
import ProtectedRoute from "../router/ProtectedRoute";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/menu" component={Menu}></Route>
      <Route path="/cart" component={Cart}></Route>
      <Route path="/product/:id" component={ProductDetails}></Route>
      <ProtectedRoute />
    </Switch>
  );
};

export default Router;
