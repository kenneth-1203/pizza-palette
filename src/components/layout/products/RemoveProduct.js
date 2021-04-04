import React from "react";

import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { removeProduct } from "../../firebase/actions/productActions";

const RemoveProduct = ({ products, removeProduct }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-lg-6 col-md-7 col-sm-8">
          <h1>Remove Product</h1>
          <ul className="list-group my-3" style={{ border: "2px solid #c0c0c0" }}>
            {products && products.length ? (
              products.map((product, index) => {
                return (
                  <li
                    className="list-group-item"
                    key={index}
                    style={{
                      background: "#1d1d1d",
                      borderBottom: "2px solid #c0c0c0",
                    }}
                  >
                    <div className="d-flex justify-content-between">
                      <label>{product.name}</label>
                      <div>
                        <label className="mx-2">RM {product.price}</label>
                        <button
                          className="btn btn-danger"
                          onClick={() => removeProduct(product.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })
            ) : (
              <p>There are currently no products in the menu.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.firestore.ordered.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeProduct: (productId) => dispatch(removeProduct(productId)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "products" }])
)(RemoveProduct);
