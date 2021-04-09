import React, { useState } from "react";

import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { withRouter } from "react-router-dom";
import { addToCart } from "../../firebase/actions/shopActions";
import { addToFav } from "../../firebase/actions/authActions";

import Notification from "../notification/Notification";

import spinner from "../../../assets/animated/spinner.svg";

const ProductDetails = ({
  product,
  products,
  profile,
  auth,
  history,
  addToCart,
  addToFav,
}) => {

  const [isLoading, handleLoad] = useState(true);

  const favorite = auth.uid && profile.favorites ? profile.favorites.some(fav => fav === product.name) : false;

  if (product) {
    return (
      <>
        <div className="container">
          <div className="text-center">
            <div
              className="col-6 mx-auto"
              style={{ width: "calc(5em + 25vw)" }}
            >
              <img
                onLoad={() => handleLoad(false)}
                src={isLoading ? spinner : product.image}
                className="card-img-top mb-3"
                alt="productImage"
                style={{
                  height: "calc(5em + 20vw)",
                  width: "calc(5em + 25vw)",
                  borderRadius: "20px",
                }}
              />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <h5>RM {product.price}</h5>
              <div className="justify-content-center">
                <button
                  className="btn btn-light cart-hover"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Add to cart"
                  onClick={() =>
                    auth.uid
                      ? addToCart(
                          history.location.pathname.split("/product/")[1],
                          products,
                          auth.uid
                        )
                      : history.push("/signin")
                  }
                >
                  <i className="fas fa-shopping-bag"></i>
                </button>
                <button
                  className="mx-2 btn btn-danger btn-like"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Add to favorites"
                  disabled={favorite}
                  onClick={() =>
                    auth.uid ? addToFav(product) : history.push("/signin")
                  }
                >
                  <i className={`${favorite ? `fas` : `far`} fa-heart`}></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Notification />
      </>
    );
  } else {
    return (
      <div className="container">
        <p>Loading...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const products = state.firestore.data.products;
  const product = products ? products[id] : null;
  return {
    product: product,
    profile: state.firebase.profile,
    products: state.firestore.ordered.products,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (productID, products, userID) =>
      dispatch(addToCart(productID, products, userID)),
    addToFav: (product) => dispatch(addToFav(product)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "products" }])
)(withRouter(ProductDetails));
