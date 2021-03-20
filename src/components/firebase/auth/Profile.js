import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { deleteUser } from "../actions/authActions";

class Profile extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleSaveBtn = () => {
    this.props.history.push("/");
  }

  handleDeleteBtn = () => {
    const { deleteUser } = this.props;
    // Confirm with user
    deleteUser();
  }

  render() {
    const { auth, profile } = this.props;
    console.log(auth, profile);

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-6">
              <h1>Profile</h1>
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
                        value={profile.firstName}
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
                        value={profile.lastName}
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={auth.email}
                  ></input>
                </div>
                {/* <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                  ></input>
                </div> */}
                <small className="error-message">
                  {/* { authError ? authError : null } */}
                </small>
              </form>
              <div className="col-12">
                <button className="btn btn-light" onClick={this.handleSaveBtn}>
                  Save Changes
                </button>
                <button className="btn btn-primary mx-3" onClick={this.handleDeleteBtn}>
                  Delete account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: () => dispatch(deleteUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
