import React, { Component } from "react";

import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { isAdmin } from "../store/actions/authActions";
import SignIn from "../store/auth/SignIn";
import SignUp from "../store/auth/SignUp";
import Profile from "../layout/content/profile/Profile";
import CreateProduct from "../layout/products/CreateProduct";

class ProtectedRoute extends Component {
  render() {
    const { auth, location } = this.props;
    const path = ["/signup", "/signin", "/profile", "/create"];
    const currentPath = path
      // eslint-disable-next-line array-callback-return
      .filter(p => {
        if (location.pathname === p) {
          return p;
        }
      }).join("");

    // Admin
    if (currentPath !== "") {
      let pathComponent;
      if (auth.uid && isAdmin(auth.uid)) {
        switch (currentPath) {
          case "/profile":
            pathComponent = Profile;
            break;
          case "/create":
            pathComponent = CreateProduct;
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
