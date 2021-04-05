import React, { Component } from "react";

import { connect } from "react-redux";
import { signUp } from "../actions/authActions";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    contact: "",
    address: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    const { authError } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-12 col-lg-9 col-md-8 px-4">
            <h1 className="pb-3">
              <i className="fas fa-user-plus fa-sm"></i>&nbsp; Sign Up
            </h1>
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-sm-6">
                  <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">
                      First name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      onChange={this.handleChange}
                    ></input>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">
                      Last name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      onChange={this.handleChange}
                    ></input>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      onChange={this.handleChange}
                    ></input>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="mb-3">
                    <label htmlFor="contact" className="form-label">
                      Contact number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="contact"
                      onChange={this.handleChange}
                    ></input>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  onChange={this.handleChange}
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  onChange={this.handleChange}
                ></input>
              </div>
              <small className="error-message">
                {authError ? authError : null}
              </small>
              <button type="submit" className="btn btn-primary">
                Create account
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
