import React from "react";

import { Link } from "react-router-dom";

const SignedOutSidebar = ({ toggleSidenav }) => {
  return (
    <React.Fragment>
      <li className="m-3 btn btn-light nav-search d-flex align-items-center">
        <span id="searchInput">
          <i className="fas fa-search"></i>
        </span>
        <input type="text" className="nav-search-input active" style={{ minWidth: "100%" }} />
      </li>
      <Link
        to="/signin"
        className="p-2 nav-link text-center"
        onClick={toggleSidenav}
      >
        <h4>Sign In</h4>
      </Link>
      <Link
        to="/signup"
        className="p-2 nav-link text-center"
        onClick={toggleSidenav}
      >
        <h4>Sign Up</h4>
      </Link>
      <Link to="/cart" className="p-2 nav-link text-center">
        <h4>Cart</h4>
      </Link>
    </React.Fragment>
  );
};

export default SignedOutSidebar;
