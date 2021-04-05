import React, { Component } from "react";

import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { clearError } from "../firebase/actions/authActions";

import ProductDetails from "../../components/layout/products/ProductDetails";
import Home from "../layout/content/home/Home";
import About from "../layout/content/about/About";
import Menu from "../layout/content/menu/Menu";
import Cart from "../layout/content/cart/Cart";
import ProtectedRoute from "../router/ProtectedRoute";

class Router extends Component {
  componentWillMount() {
    const { history, clearError } = this.props;
    this.unlisten = history.listen((location, action) => {
      clearError();
    });
  }
  componentWillUnmount() {
    this.unlisten();
  }
  render() {
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearError: () => dispatch(clearError()),
  };
};

export default connect(null, mapDispatchToProps)(withRouter(Router));
