import React, { Component } from "react";

import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import SignIn from "../store/auth/SignIn";
import SignUp from "../store/auth/SignUp";
import Profile from "../store/profile/Profile";
import CreateProduct from "../layout/products/CreateProduct";

class ProtectedRoute extends Component {
  state = {
    auth: null,
    fetched: false,
  };

  componentDidUpdate() {
    this.fetchedProps();
  }

  fetchedProps = () => {
    const { auth } = this.props;
    if (auth && !this.state.fetched) {
      return this.setState({ auth: auth.uid, fetched: true });
    }
  };

  render() {
    const pathname = {
      create: "/create",
      signUp: "/signup",
      signIn: "/signin",
      profile: "/profile"
    }
    const adminComponents = (
      <Route path={pathname.create} component={CreateProduct}></Route>
    );
    const userComponents = <Route path={pathname.profile} component={Profile}></Route>;
    const guestComponents = (
      <React.Fragment>
        <Route path={pathname.signUp} component={SignUp}></Route>
        <Route path={pathname.signIn} component={SignIn}></Route>
      </React.Fragment>
    );

    console.log(this.props)
    const url = this.props.location.pathname;  

    if (this.props.auth.uid) {
      if (this.props.auth.uid === "yfgkkO3RS2RqHYUN1iX9d6fVYkP2") {
        // Admin
        switch (url) {
          case pathname.create:
            return adminComponents;
          default:
            return <Redirect to="/" />
        }
      } else {
        // User
        switch (url) {
          case pathname.profile:
            return userComponents;
          default:
            return <Redirect to="/" />
        }
      }
    } else {
      // Guest
      switch (url) {
        case pathname.signIn:
        case pathname.signUp:
          return guestComponents;
        default:
          return <Redirect to="/" />
      }
    }
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(ProtectedRoute);
