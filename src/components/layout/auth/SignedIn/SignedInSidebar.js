import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../../store/actions/authActions";

const SignedInSidebar = ({ signOut, toggleSidenav, profile }) => {
  const handleSignOut = () => {
    toggleSidenav();
    signOut();
  };

  return (
    <React.Fragment>
      <Link
        to="/profile"
        className="d-flex justify-content-center mx-auto nav-profile-btn text-center"
        onClick={toggleSidenav}
        style={{ width: "5rem", height: "5rem" }}
      >
        <div className="nav-profile-initials d-flex align-items-center" style={{ fontSize: "2rem" }}>{profile.initials}</div>
      </Link>
      <li className="m-3 btn btn-light nav-search d-flex align-items-center">
        <span id="searchInput">
          <i className="fas fa-search"></i>
        </span>
        <input
          type="text"
          className="nav-search-input active"
          style={{ minWidth: "100%" }}
        />
      </li>
      <Link to="/" onClick={handleSignOut} className="p-2 nav-link text-center">
        <h4>Sign Out</h4>
      </Link>
      <Link to="/cart" className="p-2 nav-link text-center">
        <h4>Cart</h4>
      </Link>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInSidebar);
