import React, { Component } from "react";

import { connect } from "react-redux";

import { signIn } from "../../firebase/actions/authActions";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    const { authError } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-12 col-lg-9 col-md-8 px-4">
            <h1 className="pb-3">
              <i className="fas fa-sign-in-alt fa-sm"></i>&nbsp; Sign In
            </h1>
            <form onSubmit={this.handleSubmit}>
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
                Sign in
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
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
