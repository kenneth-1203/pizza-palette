import React from "react";

import { Link } from "react-router-dom";

const SignedOutSidebar = (props) => {
  return (
    <React.Fragment>
      <Link to="/signin" className="p-2 nav-link text-center" onClick={props.toggleSidenav} >
        <h5>Sign In</h5>
      </Link>
      <Link to="/signup" className="p-2 nav-link text-center" onClick={props.toggleSidenav} >
        <h5>Sign Up</h5>
      </Link>
    </React.Fragment>
  );
}

export default SignedOutSidebar;