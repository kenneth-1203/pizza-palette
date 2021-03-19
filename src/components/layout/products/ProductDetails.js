import React, { useState } from "react";

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import spinner from "../../../assets/animated/spinner.svg";

const ProductDetails = (props) => {
  const [isLoading, handleLoad] = useState(true);
  const { product } = props;
  
  if (product) {
    return (
      <div className="container">
      <img
            onLoad={() => handleLoad(false)}
            src={isLoading ? spinner : product.image}
            className="card-img-top"
            alt="productImage"
          />
        <p>{product.name}</p>
        <p>{product.description}</p>
        <p>{product.price}</p>
      </div>
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
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "products" }])
)(ProductDetails);
