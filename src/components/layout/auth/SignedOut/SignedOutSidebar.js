import React from "react";

import { Link } from "react-router-dom";

const SignedOutSidebar = ({ toggleSidenav }) => {
  return (
    <React.Fragment>
      <li className="m-3 py-1 btn btn-light nav-search d-flex align-items-center">
        <span id="searchInput">
          <i className="fas fa-search"></i>
        </span>
        <input
          type="text"
          className="nav-search-input active"
          style={{ minWidth: "100%" }}
        />
      </li>
      <Link to="/signin" className="text-center" onClick={toggleSidenav}>
        <h5 className="nav-link">Sign In</h5>
      </Link>
      <Link to="/signup" className="text-center" onClick={toggleSidenav}>
        <h5 className="nav-link">Sign Up</h5>
      </Link>
      <Link to="/cart" className="text-center" onClick={toggleSidenav}>
        <h5 className="nav-link">Cart</h5>
      </Link>
    </React.Fragment>
  );
};

export default SignedOutSidebar;
