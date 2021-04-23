import React, { Component } from "react";
import Aos from "aos";

import { connect } from "react-redux";
import { signUp, clearError } from "../actions/authActions";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    contact: "",
    address: "",
    isLoading: false,
  };

  componentDidMount() {
    Aos.init({ duration: 700 });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.authError !== this.props.authError) {
      this.setState({ isLoading: false });
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { clearError } = this.props;
    clearError();
    this.setState({
      isLoading: true,
    });
    this.props.signUp(this.state);
  };

  render() {
    const { authError } = this.props;
    const spinner = <div className="mx-3 spinner-border" role="status"></div>;

    return (
      <div className="container" data-aos="fade-up">
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
                      required
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
                      required
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
                      required
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
                      minLength="10"
                      id="contact"
                      onChange={this.handleChange}
                      required
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
                  required
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
                  required
                ></input>
              </div>
              <small className="error-message">
                {authError ? authError : null}
              </small>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={this.state.isLoading}
              >
                Create account
              </button>
              {this.state.isLoading ? spinner : null}
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
    clearError: () => dispatch(clearError()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
