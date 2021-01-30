import React from "react";

import { Link } from "react-router-dom";

const SignedIn = () => {
  return (
    <React.Fragment>
      <li className="nav-item">
        <Link to="/" className="p-2 nav-link text-center" href=".">
          Sign Out
        </Link>
      </li>
      <li className="nav-item d-flex flex-column justify-content-center">
        <Link to="/" className="btn btn-primary p-0">
          KK
        </Link>
      </li>
    </React.Fragment>
  );
}

export default SignedIn;