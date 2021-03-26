import React, { Component } from "react";

import { connect } from "react-redux";
import { deleteUser } from "../actions/authActions";

import Modal from "react-bootstrap/Modal";

class Profile extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    contact: "",
    address: "",
    modal: false,
  };

  componentDidMount() {
    const { auth, profile } = this.props;
    this.setState({
      firstName: profile.firstName,
      lastName: profile.lastName,
      contact: profile.contact,
      address: profile.address,
      email: auth.email,
    });
  }

  componentDidUpdate(prevProps) {
    const { profile } = this.props;
    if (prevProps.profile !== profile) {
      this.setState({
        firstName: profile.firstName,
        lastName: profile.lastName,
        contact: profile.contact,
        address: profile.address,
      });
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleSaveBtn = () => {
    this.props.history.push("/");
  };

  handleCancelBtn = () => {
    this.props.history.push("/");
  };

  handleOpenModal = () => {
    this.setState({ modal: true });
  };

  handleCloseModal = () => {
    this.setState({ modal: false });
  };

  handleDeleteBtn = () => {
    const { deleteUser } = this.props;
    deleteUser(this.state.password);
  };

  render() {
    const { authError } = this.props;
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-12 col-lg-9 col-md-8 px-4">
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
                        value={this.state.firstName}
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
                        value={this.state.lastName}
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
                        value={this.state.email}
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
                        value={this.state.contact}
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
                    value={this.state.address}
                    onChange={this.handleChange}
                  ></input>
                </div>
              </form>
              <div className="col-12">
                <button
                  className="btn btn-primary"
                  onClick={this.handleSaveBtn}
                >
                  Save
                </button>
                <button
                  className="btn btn-light mx-3"
                  onClick={this.handleCancelBtn}
                >
                  Cancel
                </button>
                <div className="float-end">
                  <button
                    className="btn btn-danger"
                    onClick={this.handleOpenModal}
                  >
                    Delete account
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Modal show={this.state.modal} onHide={this.handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>
                <i class="fas fa-exclamation-triangle error-icon"></i> Delete
                account
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <label>
                Are you sure you want to permanently delete your account?
                Changes cannot be reversed. <br></br>
                <br></br>
                Please confirm this action by entering your account password.
              </label>
            </Modal.Body>
            <input
              className="form-control"
              type="password"
              onChange={this.handleChange}
              id="password"
              style={{ width: "92%", marginLeft: "3.5%" }}
            ></input>
            <Modal.Footer>
              <small className="error-message m-0">
                {authError ? authError : null}
              </small>
              <button className="btn btn-light" onClick={this.handleCloseModal}>
                Cancel
              </button>
              <button className="btn btn-danger" onClick={this.handleDeleteBtn}>
                Confirm
              </button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
    profile: state.firebase.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: (password) => dispatch(deleteUser(password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
