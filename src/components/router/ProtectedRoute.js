import React, { Component } from "react";

import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Profile from "../../components/store/profile/Profile";
import SignIn from "../../components/store/auth/SignIn";
import SignUp from "../../components/store/auth/SignUp";
import CreateProduct from "../../components/layout/products/CreateProduct";

class ProtectedRouter extends Component {
  render() {
    return (
      <React.Fragment>
        <Route path="/signin" component={SignIn}></Route>
        <Route path="/signup" component={SignUp}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/create" component={CreateProduct}></Route>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(ProtectedRouter);
