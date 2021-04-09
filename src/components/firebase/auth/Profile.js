import React, { Component } from "react";

import { connect } from "react-redux";
import {
  deleteUser,
  updateProfile,
  clearError,
  removeFromFav,
} from "../actions/authActions";

import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";

class Profile extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    contact: "",
    address: "",
    deleteModal: false,
    updateModal: false,
    inputChanged: false,
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
    const { profile, authError, clearError } = this.props;
    if (prevProps.profile !== profile) {
      this.setState({
        firstName: profile.firstName,
        lastName: profile.lastName,
        contact: profile.contact,
        address: profile.address,
      });
    }

    if (prevProps.authError !== authError || authError === false) {
      if (authError) {
        this.setState({ updateModal: true });
      } else {
        clearError();
        this.setState({ updateModal: false, inputChanged: false });
      }
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value, inputChanged: true });
  };

  handleUpdate = () => {
    const { updateProfile } = this.props;
    updateProfile(
      {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        address: this.state.address,
        contact: this.state.contact,
      },
      this.state.password
    );
  };

  openDeleteModal = () => {
    this.setState({ deleteModal: true });
  };

  closeDeleteModal = () => {
    const { clearError } = this.props;
    this.setState({ deleteModal: false, password: "" });
    clearError();
  };

  openUpdateModal = (e) => {
    e.preventDefault();
    this.setState({ updateModal: true });
  };

  closeUpdateModal = () => {
    const { clearError } = this.props;
    this.setState({ updateModal: false, password: "" });
    clearError();
  };

  handleDeleteBtn = () => {
    const { deleteUser } = this.props;
    deleteUser(this.state.password);
  };

  handleCancelBtn = () => {
    this.props.history.push("/");
  };

  render() {
    const { authError, profile, removeFromFav } = this.props;
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-12 col-lg-9 col-md-8 px-4">
              <h1>
                <i className="fas fa-user-circle fa-sm"></i>&nbsp; Profile
              </h1>
              <form onSubmit={this.openUpdateModal}>
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
                        value={this.state.lastName}
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
                        value={this.state.email}
                        onChange={this.handleChange}
                        disabled
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
                    value={this.state.address}
                    onChange={this.handleChange}
                    required
                  ></input>
                </div>
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={!this.state.inputChanged}
                >
                  Save
                </button>
                <button
                  className="btn btn-light mx-3"
                  onClick={this.handleCancelBtn}
                >
                  Cancel
                </button>
              </form>
              <div className="col-12">
                <br />
                <hr />
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Favorites
                  </label>
                  <ListGroup className="profile-favorites">
                    {profile.favorites && profile.favorites.length ? (
                      profile.favorites.map((item, index) => {
                        return (
                          <ListGroup.Item
                            className="profile-favorites-item"
                            key={index}
                          >
                            {item}
                            <i
                              className="fas fa-heart fa-lg float-end pt-1"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Remove"
                              onClick={() => removeFromFav(item)}
                            ></i>
                          </ListGroup.Item>
                        );
                      })
                    ) : (
                      <div className="text-center my-4">
                        <i className="fas fa-heart-broken fa-7x my-2 not-found"></i>
                        <h3 className="not-found">No favorites yet.</h3>
                      </div>
                    )}
                  </ListGroup>
                </div>
                <div className="float-end">
                  <button
                    className="btn btn-danger"
                    onClick={this.openDeleteModal}
                  >
                    Delete account
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Modal show={this.state.deleteModal} onHide={this.closeDeleteModal}>
            <Modal.Header closeButton>
              <Modal.Title>
                <i className="fas fa-exclamation-triangle error-icon"></i>{" "}
                Delete account
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
              <button className="btn btn-light" onClick={this.closeDeleteModal}>
                Cancel
              </button>
              <button className="btn btn-danger" onClick={this.handleDeleteBtn}>
                Confirm
              </button>
            </Modal.Footer>
          </Modal>

          <Modal show={this.state.updateModal} onHide={this.closeUpdateModal}>
            <Modal.Header closeButton>
              <Modal.Title>
                <i className="fas fa-info-circle info-icon"></i> Update profile
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <label>
                To save and update your profile, we need to verify that you are
                the owner of the account. <br></br>
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
              <button className="btn btn-light" onClick={this.closeUpdateModal}>
                Cancel
              </button>
              <button className="btn btn-primary" onClick={this.handleUpdate}>
                Update
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
    updateProfile: (credentials, password) =>
      dispatch(updateProfile(credentials, password)),
    clearError: () => dispatch(clearError()),
    removeFromFav: (product) => dispatch(removeFromFav(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
