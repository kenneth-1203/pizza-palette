import React, { Component } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { isAdmin } from "../../firebase/actions/authActions";
import Logo from "../../../assets/images/company-logo.png";
import SignedInNavbar from "../auth/SignedIn/SignedInNavbar";
import SignedOutNavbar from "../auth/SignedOut/SignedOutNavbar";
import SignedInSidebar from "../auth/SignedIn/SignedInSidebar";
import SignedOutSidebar from "../auth/SignedOut/SignedOutSidebar";

class Navbar extends Component {
  state = {
    count: 0,
    sideNav: false,
    expandSearch: false,
    search: "",
    isLoaded: false,
  };

  componentDidMount() {
    this.setCartCount();
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.auth.uid !== this.props.auth.uid ||
      prevProps.cart !== this.props.cart
    )
    this.setCartCount();
  }

  toggleSidenav = () => {
    this.setState({ sideNav: !this.state.sideNav });
  };

  toggleSearch = () => {
    this.setState({ expandSearch: true });
  };

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  setCartCount = () => {
    let { auth } = this.props;
    let cart = JSON.parse(window.sessionStorage.getItem(auth.uid))
      ? JSON.parse(window.sessionStorage.getItem(auth.uid))
      : [];
    let count = 0;
    cart.forEach((item) => {
      count += item.quantity;
    });
    this.setState({ count });
  };

  render() {
    const { auth, profile } = this.props;

    const navbarLinks = auth.uid ? (
      <SignedInNavbar profile={profile} />
    ) : (
      <SignedOutNavbar />
    );
    const sidebarLinks = auth.uid ? (
      <SignedInSidebar profile={profile} toggleSidenav={this.toggleSidenav} />
    ) : (
      <SignedOutSidebar toggleSidenav={this.toggleSidenav} />
    );

    return (
      <React.Fragment>
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <div className="col-lg-3 col-md-2 col-4">
              <div className="d-flex justify-content-start">
                <Link className="navbar-brand" to="/">
                  <img className="navbar-logo" src={Logo} alt="" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-10 col-12 py-3 mx-auto">
              <div className="d-flex justify-content-between">
                <div className="col-md-10">
                  <ul className="navbar-nav justify-content-center">
                    <li className="nav-item my-auto">
                      <Link className="nav-link active" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item my-auto">
                      <Link className="nav-link" to="/menu">
                        Menu
                      </Link>
                    </li>
                    <li className="nav-item my-auto">
                      <Link className="nav-link" to="/about">
                        About
                      </Link>
                    </li>
                    {isAdmin(auth.uid) ? (
                      <li className="nav-item my-auto">
                        <Link className="nav-link" to="/create">
                          Create
                        </Link>
                      </li>
                    ) : null}
                    <li
                      className="btn btn-light nav-search d-flex align-items-center"
                      onClick={this.toggleSearch}
                    >
                      <span id="searchInput">
                        <i className="fas fa-search"></i>
                      </span>
                      <input
                        type="text"
                        onChange={this.handleChange}
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
              className="col-lg-3 collapse navbar-collapse"
              style={{ width: "25%" }}
            >
              <div className="d-flex mx-auto">
                <ul className="navbar-nav">
                  <Link to="/cart">
                    <li className="nav-item nav-cart">
                      <button
                        className={`btn btn-light cart${
                          this.state.count ? " active" : ""
                        }`}
                      >
                        <i className="fas fa-shopping-bag"></i>
                      </button>
                      <span className="badge">
                        {this.state.count ? this.state.count : null}
                      </span>
                    </li>
                  </Link>
                  {auth.isLoaded && navbarLinks ? navbarLinks : null}
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div
          id="sidenav"
          className={`nav-sidenav${this.state.sideNav ? " active" : ""}`}
        >
          <span
            className="p-2"
            onClick={this.toggleSidenav}
            style={{ cursor: "pointer", fontSize: "1.5em" }}
          >
            &times;
          </span>
          {auth.isLoaded && sidebarLinks ? sidebarLinks : null}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
