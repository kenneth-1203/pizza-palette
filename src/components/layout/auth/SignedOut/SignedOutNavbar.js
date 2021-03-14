import React from "react";

import { Link } from "react-router-dom";

const SignedOutSidebar = () => {
  return (
    <React.Fragment>
      <li className="nav-item">
        <Link to="/signin" className="p-2 nav-link text-center">Sign In</Link>
      </li>
      <li className="nav-item">
        <Link to="/signup" className="p-2 nav-link text-center">Sign Up</Link>
      </li>
    </React.Fragment>
  );
}

export default SignedOutSidebar;