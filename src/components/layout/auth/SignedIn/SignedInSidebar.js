import React, { useState } from "react";

import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Link, withRouter } from "react-router-dom";
import { signOut } from "../../../firebase/actions/authActions";
import { searchProducts } from "../../../firebase/actions/productActions";

const SignedInSidebar = ({
  signOut,
  toggleSidenav,
  profile,
  count,
  products,
  history,
  searchProducts,
}) => {
  const [search, setSearch] = useState("");

  const handleSignOut = () => {
    toggleSidenav();
    signOut();
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchProducts(products, search);
    toggleSidenav();
    history.replace("/menu");
  };

  return (
    <>
      <Link
        to="/profile"
        className="d-flex justify-content-center mx-auto nav-profile-btn text-center"
        onClick={toggleSidenav}
        style={{ width: "5rem", height: "5rem" }}
      >
        <div
          className="nav-profile-initials d-flex align-items-center"
          style={{ fontSize: "2rem" }}
        >
          {profile.initials}
        </div>
      </Link>
      <li className="m-3 py-1 btn btn-light nav-search d-flex align-items-center">
        <span id="searchInput">
          <i className="fas fa-search"></i>
        </span>
        <form action="submit" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search product..."
            className="nav-search-input active"
            onChange={handleChange}
            style={{ minWidth: "100%" }}
          />
        </form>
      </li>
      <Link to="/" onClick={handleSignOut} className="text-center">
        <h5 className="nav-link">Sign Out</h5>
      </Link>
      <Link to="/cart" onClick={toggleSidenav} className="text-center">
        <h5 className="nav-link">
          Cart
          {count && count > 0 ? (
            <div className="cart-count">{count}</div>
          ) : null}
        </h5>
      </Link>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.firestore.ordered.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
    searchProducts: (products, search) =>
      dispatch(searchProducts(products, search)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "products" }])
)(withRouter(SignedInSidebar));
