import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignedIn = (props) => {
  return (
    <React.Fragment>
      <li className="nav-item">
        <Link to="/" onClick={() => props.signOut()} className="p-2 nav-link text-center">Sign Out</Link>
      </li>
      <li className="nav-item d-flex flex-column justify-content-center">
        <Link to="/profile" className="btn btn-primary p-0">
          KK
        </Link>
      </li>
    </React.Fragment>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedIn);