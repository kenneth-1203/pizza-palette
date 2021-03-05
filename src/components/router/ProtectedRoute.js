import React, { Component } from "react";

import { Route } from "react-router-dom";
import { connect } from "react-redux";

import SignIn from "../store/auth/SignIn";
import SignUp from "../store/auth/SignUp";
import Profile from "../store/profile/Profile"
import CreateProduct from "../layout/products/CreateProduct";

class ProtectedRoute extends Component {
  state = {
    auth: {},
    fetched: false
  }

  componentDidUpdate() {
    this.fetchedProps();
  }

  fetchedProps = () => {
    const { auth } = this.props;
    if (auth && !this.state.fetched) {
      return this.setState({ auth: auth.uid, fetched: true });
    }
    console.log(this.state)
  }

  render() {
    const adminComponents = (
      <Route path="/create" component={CreateProduct}></Route>
    );
    const userComponents = (
      <Route path="/profile" component={Profile}></Route>
    );
    const guestComponents = (
      <React.Fragment>
        <Route path="/signup" component={SignUp}></Route>
        <Route path="/signin" component={SignIn}></Route>
      </React.Fragment>
    );
  
    try {
      if (this.state.auth.uid && this.state.auth.uid === "yfgkkO3RS2RqHYUN1iX9d6fVYkP2") {
        console.log("admin")
        console.log(this.state)
        return adminComponents;
      } else if (this.state.auth.uid) {
        console.log("user")
        console.log(this.state)
        return userComponents;
      } else {
        console.log("guest")
        console.log(this.state)
        return guestComponents;
      }
    } catch(err) {
      console.log(err);
      return guestComponents;
    }
  }
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(ProtectedRoute);