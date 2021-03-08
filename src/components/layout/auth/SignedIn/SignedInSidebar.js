import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../../store/actions/authActions";

const SignedInSidebar = (props) => {
  return (
    <React.Fragment>
      <Link to="/profile" className="p-2 nav-link text-center">Profile</Link>
      <Link to="/" onClick={() => props.signOut()} className="p-2 nav-link text-center">Sign Out</Link>
    </React.Fragment>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInSidebar);