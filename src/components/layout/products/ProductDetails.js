import React, { useState } from "react";

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import spinner from "../../../assets/animated/spinner.svg";

const ProductDetails = ({ product }) => {
  const [isLoading, handleLoad] = useState(true);

  if (product) {
    return (
      <div className="container">
        <div className="text-center">
          <div className="col-6 mx-auto" style={{ width: "calc(5em + 25vw)" }}>
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
            <div className="d-flex justify-content-center my-3">
            </div>
          </div>
        </div>
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
