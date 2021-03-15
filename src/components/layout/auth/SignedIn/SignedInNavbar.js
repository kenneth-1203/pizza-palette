import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../../store/actions/authActions";

const SignedInNavbar = ({ signOut, profile }) => {
  return (
    <React.Fragment>
      <li className="nav-item">
        <Link to="/" onClick={signOut} className="p-2 nav-link text-center">Sign Out</Link>
      </li>
      <li className="nav-item d-flex flex-column justify-content-center">
        <Link to="/profile" className="nav-profile-btn text-center">
        <div className="nav-profile-initials pt-2">
          {profile.initials}
        </div>
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

export default connect(null, mapDispatchToProps)(SignedInNavbar);