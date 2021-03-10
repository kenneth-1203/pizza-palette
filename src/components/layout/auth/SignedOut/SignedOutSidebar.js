import React from "react";

import { Link } from "react-router-dom";

const SignedOutSidebar = () => {
  return (
    <React.Fragment>
      <Link to="/signin" className="p-2 nav-link text-center">Sign In</Link>
      <Link to="/signup" className="p-2 nav-link text-center">Sign Up</Link>
    </React.Fragment>
  );
}

export default SignedOutSidebar;