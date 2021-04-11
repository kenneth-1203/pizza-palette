import React, { useState } from "react";

import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Link, withRouter } from "react-router-dom";
import { searchProducts } from "../../../firebase/actions/productActions";

const SignedOutSidebar = ({
  toggleSidenav,
  searchProducts,
  products,
  history,
}) => {
  const [search, setSearch] = useState("");

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
    <React.Fragment>
      <li className="m-3 py-1 btn btn-light nav-search d-flex align-items-center">
        <span id="searchInput">
          <i className="fas fa-search"></i>
        </span>
        <form action="submit" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search by name..."
            className="nav-search-input active"
            onChange={handleChange}
            style={{ minWidth: "100%" }}
          />
        </form>
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

const mapStateToProps = (state) => {
  return {
    products: state.firestore.ordered.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchProducts: (products, search) =>
      dispatch(searchProducts(products, search)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "products" }])
)(withRouter(SignedOutSidebar));
