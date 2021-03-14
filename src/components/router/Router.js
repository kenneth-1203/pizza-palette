import React from "react";

import { Switch, Route } from "react-router-dom";

import ProductDetails from "../../components/layout/products/ProductDetails";
import Home from "../layout/content/home/Home";
import About from "../layout/content/about/About";
import Menu from "../layout/content/menu/Menu";
import Cart from "../layout/content/cart/Cart";
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
