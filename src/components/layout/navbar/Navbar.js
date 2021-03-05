import React, { Component } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Logo from "../../../assets/images/company-logo.png";
import SignedIn from "../auth/SignedIn";
import SignedOut from "../auth/SignedOut";

class Navbar extends Component {
  state = {
    cart: 0,
    sideNav: false,
    expandSearch: false,
  };

  toggleSidenav = () => {
    this.setState({ sideNav: !this.state.sideNav });
  };

  toggleSearch = () => {
    this.setState({ expandSearch: true });
  };

  render() {
    const { auth } = this.props; 
    const cart = this.state.cart ? (
      <Link className="p-2 nav-link active" to="/cart">
        <i className="fas fa-shopping-bag"></i>
        <span className="badge">{this.state.cart}</span>
      </Link>
    ) : (
      <Link className="p-2 nav-link" to="/cart">
        <i className="fas fa-shopping-bag"></i>
      </Link>
    );
    const links = auth.uid ? <SignedIn /> : <SignedOut />;

    return (
      <React.Fragment>
        <div className="content">
          <div className="container">
            <nav className="navbar navbar-expand-xl">
              <div className="col-xl-3 col-md-2 col-4">
                <div className="d-flex justify-content-center">
                  <Link className="navbar-brand" to="/">
                    <img src={Logo} width="80px" alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col-md-10 col-12 py-3 mx-auto">
                <div className="d-flex justify-content-evenly">
                  <div className="col-md-10">
                    <ul className="navbar-nav justify-content-center">
                      <li className="nav-item">
                        <Link className="nav-link active" to="/">
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/menu">
                          Menu
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/about">
                          About
                        </Link>
                      </li>
                      <li className="nav-item nav-search d-flex align-items-center">
                        <span
                          className="nav-link"
                          id="searchInput"
                          href="."
                          onClick={this.toggleSearch}
                        >
                          <i className="fas fa-search"></i>
                        </span>
                        <input
                          type="text"
                          className={`nav-search-input ${
                            this.state.expandSearch ? "active" : ""
                          }`}
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-2 d-flex justify-content-end">
                    <button
                      onClick={this.toggleSidenav}
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarNav"
                      aria-controls="navbarNav"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <i className="fas fa-ellipsis-h"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 collapse navbar-collapse"
                style={{ width: "25%" }}
              >
                <div className="d-flex mx-auto">
                  <ul className="navbar-nav">
                    <li className="nav-item nav-cart">
                      { cart }
                    </li>
                    { auth.isLoaded && links ? links : null }
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div
          id="sidenav"
          className="nav-sidenav"
          style={this.state.sideNav ? { width: "200px" } : { width: "0" }}
        >
          <span
            className="p-2"
            onClick={this.toggleSidenav}
            style={{ cursor: "pointer", fontSize: "1.5em" }}
          >
            &times;
          </span>
          <div className="container">
            <Link to="/signin">Sign In</Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Navbar);
