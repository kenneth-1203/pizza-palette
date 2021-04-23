import React, { Component } from "react";

import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { isAdmin } from "../firebase/actions/authActions";
import SignIn from "../firebase/auth/SignIn";
import SignUp from "../firebase/auth/SignUp";
import Profile from "../firebase/auth/Profile";
import CreateProduct from "../layout/products/CreateProduct";
import RemoveProduct from "../layout/products/RemoveProduct";
import CheckoutForm from "../layout/checkout/CheckoutForm";

class ProtectedRoute extends Component {
  render() {
    const { auth, location } = this.props;
    const path = [
      "/signup",
      "/signin",
      "/profile",
      "/create",
      "/remove",
      "/orders",
      "/checkout",
    ];
    const currentPath = path
      // eslint-disable-next-line array-callback-return
      .filter((p) => {
        if (location.pathname === p) {
          return p;
        }
      })
      .join("");

    // Admin
    if (currentPath !== "") {
      let pathComponent;
      if (auth.uid && isAdmin(auth.uid)) {
        switch (currentPath) {
          case "/create":
            pathComponent = CreateProduct;
            break;
          case "/remove":
            pathComponent = RemoveProduct;
            break;
          default:
            return <Redirect to="/" />;
        }

        // User
      } else if (auth.uid) {
        switch (currentPath) {
          case "/profile":
            pathComponent = Profile;
            break;
          case "/checkout":
            pathComponent = CheckoutForm;
            break;
          default:
            return <Redirect to="/" />;
        }

        // Guest
      } else {
        switch (currentPath) {
          case "/signup":
            pathComponent = SignUp;
            break;
          case "/signin":
            pathComponent = SignIn;
            break;
          default:
            return <Redirect to="/" />;
        }
      }
      return <Route path={currentPath} component={pathComponent}></Route>;
    } else {
      return <Redirect to="/" />;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(ProtectedRoute);
