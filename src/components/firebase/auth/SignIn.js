import React, { Component } from "react";
import Aos from "aos";

import { connect } from "react-redux";

import { signIn, clearError } from "../../firebase/actions/authActions";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    isLoading: false,
  };

  componentDidMount() {
    Aos.init({ duration: 500 });
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
    this.props.signIn(this.state);
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
                Sign in
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
    signIn: (creds) => dispatch(signIn(creds)),
    clearError: () => dispatch(clearError()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
